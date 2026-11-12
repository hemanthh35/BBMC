// Creates smaller copies of every photo so phones download a right-sized image.
//   public/img/projects/villa.webp -> villa-480.webp, villa-800.webp, villa-1280.webp
// lib/image-loader.ts picks the right one for each screen. Run after adding or changing images:
//   node scripts/responsive-images.mjs
import sharp from "sharp";
import { readdir, stat } from "node:fs/promises";
import path from "node:path";

export const WIDTHS = [480, 800, 1280];
const root = path.resolve("public/img");
let made = 0;

async function walk(dir) {
  for (const name of await readdir(dir)) {
    const full = path.join(dir, name);
    if ((await stat(full)).isDirectory()) { await walk(full); continue; }
    if (!name.endsWith(".webp") || /-\d+\.webp$/.test(name)) continue;
    const meta = await sharp(full).metadata();
    for (const w of WIDTHS) {
      const out = full.replace(/\.webp$/, `-${w}.webp`);
      await sharp(full).resize({ width: Math.min(w, meta.width) }).webp({ quality: w <= 480 ? 72 : 78, effort: 6 }).toFile(out);
      made++;
    }
  }
}

await walk(root);

// Small logo for the header/footer (the full PNG is ~490 KB)
await sharp(path.join(root, "bbmc-logo.png")).resize({ width: 240 }).webp({ quality: 85, alphaQuality: 90 }).toFile(path.join(root, "bbmc-logo-240.webp"));

console.log(`responsive-images: wrote ${made} sized copies + small logo`);
