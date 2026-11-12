// Turns selected BBMC Justdial photos into clean, watermarked WebP images for the site.
// Removes the "Designed and Executed By BBMC ..." caption by cropping (when it sits at an edge)
// or by blending a blurred patch over it (when it sits on sky/ground).
// Usage: node scripts/process-justdial.mjs <justdial-folder>
import sharp from "sharp";
import { mkdir } from "node:fs/promises";
import path from "node:path";

const SRC = process.argv[2] ?? "../bbmc-source-photos/justdial";
const OUT = path.resolve("public/images");
const LOGO = path.resolve("public/images/bbmc-logo.png");

// crop: fractions to remove from each side. blur: [x0, y0, x1, y1] fractions to blend out.
const photos = [
  // ---- Architecture ----
  { id: "0pd5panwy3", out: "projects/contemporary-residence-hyderabad", w: 1600 },
  { id: "sog5xxhv1d", out: "projects/modern-house-elevation", w: 1600 },
  { id: "bgtlc07i97", out: "projects/bommak-narsimha-convention-hall", w: 1600 },
  { id: "wh42wzlcrv", out: "projects/balaji-benchmark-enclave", w: 1600, crop: { bottom: 0.06 } },
  { id: "v7407tvxfd", out: "projects/contemporary-duplex-house", w: 1600, crop: { bottom: 0.13 } },
  { id: "pquez8e81h", out: "projects/twin-storey-residence", w: 1600, crop: { bottom: 0.2 } },
  { id: "yfsijjglqx", out: "projects/bommaku-arcade-commercial-building", w: 1600, crop: { top: 0.13 } },
  // ---- Interiors ----
  { id: "11mvw6o8l9", out: "interiors/luxury-living-room", w: 1600 },
  { id: "1p2a4aapl9", out: "interiors/living-room-wooden-ceiling", w: 1600 },
  { id: "2hb1b96y5i", out: "interiors/modular-kitchen", w: 1600 },
  { id: "2i56xbjc5f", out: "interiors/contemporary-living-room", w: 1600 },
  { id: "3on8aqzoqi", out: "interiors/island-kitchen", w: 1600 },
  { id: "bigunb7amk", out: "interiors/designer-wardrobe", w: 1600 },
  { id: "c9ms956g76", out: "interiors/master-bedroom", w: 1600 },
  { id: "e5ga6wy738", out: "interiors/open-living-and-dining", w: 1600, crop: { left: 0.09, right: 0.09 } },
  { id: "qmh89k3opx", out: "interiors/teal-accent-bedroom", w: 1600 },
  { id: "opbbunr2v5", out: "interiors/bedroom-with-study", w: 1600 },
  { id: "vu0a1b6w07", out: "interiors/pooja-room", w: 1600, wmCorner: true },
  { id: "r7fc9a1vv2", out: "interiors/botanical-wardrobe", w: 1600 },
  { id: "bcpgx4dmhc", out: "interiors/salon-interior", w: 1600 },
  // ---- Service cards / hero ----
  { id: "c9xohggp86", out: "services/structural-engineering", w: 1920 },
  { id: "leao0s5uv7", out: "services/construction", w: 1920 },
];

const fade = (img, opacity) =>
  sharp(img)
    .composite([{ input: Buffer.from([255, 255, 255, Math.round(255 * opacity)]), raw: { width: 1, height: 1, channels: 4 }, tile: true, blend: "dest-in" }])
    .png()
    .toBuffer();

async function watermark(W, H, corner = false) {
  const w = Math.round(Math.max(110, W * 0.3));
  const logo = await sharp(LOGO).resize({ width: w }).ensureAlpha().toBuffer();
  const { height: h } = await sharp(logo).metadata();
  const pad = Math.round(w * 0.12);
  const glow = await sharp({ create: { width: w + pad * 2, height: h + pad * 2, channels: 4, background: { r: 0, g: 0, b: 0, alpha: 0 } } })
    .composite([{ input: await sharp(logo).linear([0, 0, 0, 1], [0, 0, 0, 0]).toBuffer(), left: pad, top: pad }])
    .blur(Math.max(4, w / 25))
    .png()
    .toBuffer();
  const left = corner ? W - w - Math.round(W * 0.04) : Math.round((W - w) / 2);
  const top = corner ? H - h - Math.round(H * 0.03) : Math.round((H - h) / 2);
  return [
    { input: await fade(glow, 0.28), left: left - pad, top: top - pad },
    { input: await fade(logo, 0.45), left, top },
  ];
}

// Blend a heavily blurred copy of the area over the caption, with soft edges.
async function blurPatch(buf, W, H, [x0, y0, x1, y1]) {
  const left = Math.max(0, Math.round(x0 * W));
  const top = Math.max(0, Math.round(y0 * H));
  const width = Math.min(W - left, Math.round((x1 - x0) * W));
  const height = Math.min(H - top, Math.round((y1 - y0) * H));
  const sigma = Math.max(12, Math.min(width, height) / 3);
  const patch = await sharp(buf).extract({ left, top, width, height }).blur(sigma).png().toBuffer();
  const feather = Math.round(Math.min(width, height) * 0.18);
  const mask = Buffer.from(
    `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}"><defs><filter id="f"><feGaussianBlur stdDeviation="${feather / 2}"/></filter></defs>` +
      `<rect x="${feather}" y="${feather}" width="${width - feather * 2}" height="${height - feather * 2}" fill="#fff" filter="url(#f)"/></svg>`,
  );
  const soft = await sharp(patch).composite([{ input: mask, blend: "dest-in" }]).png().toBuffer();
  // Cover the hard centre fully, then the feathered edge on top
  const core = await sharp(patch)
    .extract({ left: feather, top: feather, width: Math.max(1, width - feather * 2), height: Math.max(1, height - feather * 2) })
    .png()
    .toBuffer();
  return [
    { input: soft, left, top },
    { input: core, left: left + feather, top: top + feather },
  ];
}

for (const p of photos) {
  const file = path.join(SRC, `${p.id}.jpg`);
  let img = sharp(file).rotate();
  const meta = await sharp(file).rotate().toBuffer({ resolveWithObject: true });
  let { width: W, height: H } = meta.info;
  if (p.crop) {
    const c = { top: 0, bottom: 0, left: 0, right: 0, ...p.crop };
    const left = Math.round(W * c.left);
    const top = Math.round(H * c.top);
    const width = Math.round(W * (1 - c.left - c.right));
    const height = Math.round(H * (1 - c.top - c.bottom));
    img = sharp(meta.data).extract({ left, top, width, height });
  } else {
    img = sharp(meta.data);
  }
  let { data: buf, info } = await img.resize({ width: p.w, withoutEnlargement: true }).toBuffer({ resolveWithObject: true });
  W = info.width;
  H = info.height;
  if (p.fill) {
    const layers = [];
    for (const [x0, y0, x1, y1, sx, sy] of p.fill) {
      const { data } = await sharp(buf).extract({ left: Math.round(sx * W), top: Math.round(sy * H), width: 4, height: 4 }).raw().toBuffer({ resolveWithObject: true });
      const [r, g, b] = [data[0], data[1], data[2]];
      const width = Math.round((x1 - x0) * W);
      const height = Math.round((y1 - y0) * H);
      layers.push({ input: { create: { width, height, channels: 3, background: { r, g, b } } }, left: Math.round(x0 * W), top: Math.round(y0 * H) });
    }
    buf = await sharp(buf).composite(layers).toBuffer();
  }
  if (p.blur) {
    const layers = [];
    for (const box of p.blur) layers.push(...(await blurPatch(buf, W, H, box)));
    buf = await sharp(buf).composite(layers).toBuffer();
  }
  let out = sharp(buf);
  if (p.watermark !== false) out = out.composite(await watermark(W, H, p.wmCorner));
  const dest = path.join(OUT, `${p.out}.webp`);
  await mkdir(path.dirname(dest), { recursive: true });
  await out.sharpen({ sigma: 0.5 }).webp({ quality: 90, effort: 6, smartSubsample: true }).toFile(dest);
  console.log(`${p.out}  ${W}x${H}`);
}
