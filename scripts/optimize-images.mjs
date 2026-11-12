// Converts the original BBMC images to compressed WebP with SEO-friendly names.
// Usage: node scripts/optimize-images.mjs <path-to-PerfectLanding/attached_assets>
import sharp from "sharp";
import { mkdir, stat } from "node:fs/promises";
import path from "node:path";

const src = process.argv[2] ?? "../bbmc/PerfectLanding/attached_assets";
const out = path.resolve("public/images");

const map = {
  // Logo + founder
  "WhatsApp_Image_2025-12-04_at_01.01.12_a177f220_1764791221568.jpg": ["er-paspunoori-srinivas-gupta-founder-bbmc", 800],
  // Service / hero images
  // Architecture projects
  "7fed6f05-b190-4486-acba-e757fe5491af_1764800275151.png": ["projects/commercial-complex-with-retail", 1600],
  "4256ee6d-5a19-4de6-af15-ac9bf91f479a_1764800283268.png": ["projects/contemporary-luxury-villa", 1600],
  "820319d6-06ef-43c5-a79e-0eea99cbff9c_1764800287073.png": ["projects/modern-apartment-complex", 1600],
  "b3b8c03f-9aab-412e-853a-7ee3bed645e5_1764800293357.png": ["projects/nvs-heights-tower", 1600],
  "IMG-20251204-WA0065_1764800309875.jpg": ["projects/pareeksha-residential-tower", 1600],
  "IMG-20251204-WA0070_1764800314247.jpg": ["projects/premium-duplex-villa", 1600],
  // Interiors
  "IMG-20251204-WA0093_1764801531025.jpg": ["interiors/urban-coffee-cafe", 1600],
  "IMG-20251204-WA0095_1764801531025.jpg": ["interiors/industrial-restaurant-design", 1600],
  "IMG-20251204-WA0108_1764801452434.jpg": ["interiors/rooftop-terrace-lounge", 1600],
  "IMG-20251204-WA0117_1764801580436.jpg": ["interiors/designer-staircase", 1600],
  "IMG-20251204-WA0161_1764801580440.jpg": ["interiors/grand-foyer-design", 1600],
};

// ---- Watermark: transparent BBMC logo (run scripts/make-logo.mjs first) ----
const LOGO = path.resolve("public/images/bbmc-logo.png");
const WM_WIDTH = 0.3; // logo width as a share of the photo width
const WM_OPACITY = 0.45;

async function watermark(photoWidth, photoHeight) {
  const w = Math.round(Math.max(110, photoWidth * WM_WIDTH));
  const logo = await sharp(LOGO).resize({ width: w }).ensureAlpha().toBuffer();
  const { height: h } = await sharp(logo).metadata();
  const fade = (img, opacity) =>
    sharp(img)
      .composite([{ input: Buffer.from([255, 255, 255, Math.round(255 * opacity)]), raw: { width: 1, height: 1, channels: 4 }, tile: true, blend: "dest-in" }])
      .png()
      .toBuffer();
  // Centred so it survives the object-cover cropping used by the cards and galleries.
  // A soft dark glow keeps the grey parts of the logo visible on white walls and skies.
  const glowPad = Math.round(w * 0.12);
  const glow = await sharp({ create: { width: w + glowPad * 2, height: h + glowPad * 2, channels: 4, background: { r: 0, g: 0, b: 0, alpha: 0 } } })
    .composite([{ input: await sharp(logo).ensureAlpha().linear([0, 0, 0, 1], [0, 0, 0, 0]).toBuffer(), left: glowPad, top: glowPad }])
    .blur(Math.max(4, w / 25))
    .png()
    .toBuffer();
  const left = Math.round((photoWidth - w) / 2);
  const top = Math.round((photoHeight - h) / 2);
  return [
    { input: await fade(glow, 0.28), left: left - glowPad, top: top - glowPad },
    { input: await fade(logo, WM_OPACITY), left, top },
  ];
}

// The original architecture renders carry a "free version of Watermarkly" banner along the bottom.
const BANNER_CROP = 0.06;

const isPhoto = (name) => /^(projects|interiors|services)\//.test(name);

let before = 0;
let after = 0;
for (const [file, [name, width]] of Object.entries(map)) {
  const input = path.join(src, file);
  const output = path.join(out, `${name}.webp`);
  await mkdir(path.dirname(output), { recursive: true });
  before += (await stat(input)).size;
  let base = sharp(input).rotate();
  if (name.startsWith("projects/")) {
    const meta = await sharp(input).metadata();
    base = base.extract({ left: 0, top: 0, width: meta.width, height: Math.round(meta.height * (1 - BANNER_CROP)) });
  }
  const resized = await base.resize({ width, withoutEnlargement: true }).toBuffer({ resolveWithObject: true });
  let img = sharp(resized.data);
  if (isPhoto(name)) img = img.composite(await watermark(resized.info.width, resized.info.height));
  await img.sharpen({ sigma: 0.6 }).webp({ quality: 90, effort: 6, smartSubsample: true }).toFile(output);
  after += (await stat(output)).size;
}

// Logo as PNG too (for schema / favicon sources)
await sharp(LOGO)
  .resize({ width: 512, height: 512, fit: "contain", background: "#ffffff" })
  .png()
  .toFile(path.resolve("app/icon.png"));

console.log(`Images: ${(before / 1e6).toFixed(1)} MB -> ${(after / 1e6).toFixed(1)} MB`);
