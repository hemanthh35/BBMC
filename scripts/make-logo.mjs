// Cuts the BBMC logo out of its dark mockup background and crops it tight.
// Output: public/images/bbmc-logo.png (transparent) – used in the header/footer and as the photo watermark.
// Usage: node scripts/make-logo.mjs <path-to-original-logo.jpg>
import sharp from "sharp";
import path from "node:path";

const src = process.argv[2];
if (!src) throw new Error("Pass the original logo path");

const { data, info } = await sharp(src).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
const { width, height } = info;

// Background is dark grey (~40-55 brightness); the logo is light grey and bright blue.
// Alpha ramps from 0 at brightness 70 to 255 at brightness 115, so the drop shadow disappears.
const LO = 70;
const HI = 115;
let minX = width, minY = height, maxX = 0, maxY = 0;
for (let y = 0; y < height; y++) {
  for (let x = 0; x < width; x++) {
    const i = (y * width + x) * 4;
    const v = Math.max(data[i], data[i + 1], data[i + 2]);
    const a = Math.max(0, Math.min(255, Math.round(((v - LO) / (HI - LO)) * 255)));
    data[i + 3] = a;
    if (a > 200) {
      if (x < minX) minX = x;
      if (x > maxX) maxX = x;
      if (y < minY) minY = y;
      if (y > maxY) maxY = y;
    }
  }
}

const pad = 8;
const left = Math.max(0, minX - pad);
const top = Math.max(0, minY - pad);
const crop = { left, top, width: Math.min(width, maxX + pad) - left, height: Math.min(height, maxY + pad) - top };

const out = path.resolve("public/images/bbmc-logo.png");
await sharp(data, { raw: { width, height, channels: 4 } }).extract(crop).png({ compressionLevel: 9 }).toFile(out);
console.log("Logo cropped to", crop, "->", out);
