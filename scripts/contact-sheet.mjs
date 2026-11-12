// Builds numbered contact sheets of a photo folder so photos can be compared and picked.
// Usage: node scripts/contact-sheet.mjs <photo-dir> <out-prefix> [perSheet=40]
import sharp from "sharp";
import { readdir, writeFile } from "node:fs/promises";
import path from "node:path";

const [dir, prefix, per = "40"] = process.argv.slice(2);
const files = (await readdir(dir)).filter((f) => /\.(jpe?g|png|webp)$/i.test(f)).sort();
const cols = 8, cell = 220, label = 22, perSheet = Number(per);
const index = [];

for (let s = 0; s * perSheet < files.length; s++) {
  const batch = files.slice(s * perSheet, (s + 1) * perSheet);
  const rows = Math.ceil(batch.length / cols);
  const tiles = [];
  for (let i = 0; i < batch.length; i++) {
    const n = s * perSheet + i;
    const f = batch[i];
    let meta = { width: 0, height: 0 };
    let img;
    try {
      meta = await sharp(path.join(dir, f)).metadata();
      img = await sharp(path.join(dir, f)).resize(cell, cell - label, { fit: "contain", background: "#ffffff" }).toBuffer();
    } catch {
      continue;
    }
    index.push(`${n}\t${f}\t${meta.width}x${meta.height}`);
    const svg = Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="${cell}" height="${label}"><rect width="100%" height="100%" fill="#111"/><text x="6" y="16" font-size="14" font-family="sans-serif" fill="#fff">#${n} ${meta.width}x${meta.height}</text></svg>`);
    const x = (i % cols) * cell, y = Math.floor(i / cols) * cell;
    tiles.push({ input: svg, left: x, top: y }, { input: img, left: x, top: y + label });
  }
  await sharp({ create: { width: cols * cell, height: rows * cell, channels: 3, background: "#ffffff" } })
    .composite(tiles)
    .jpeg({ quality: 80 })
    .toFile(`${prefix}-${s + 1}.jpg`);
}
await writeFile(`${prefix}-index.tsv`, index.join("\n"));
console.log(`${files.length} photos, ${Math.ceil(files.length / perSheet)} sheets`);
