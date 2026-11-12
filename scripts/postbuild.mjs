// After `next build` (static export to ./out), also write each page as <page>/index.html,
// so clean URLs like /about work on hosts that serve folders as well as on hosts that
// map /about to about.html.
import { copyFile, mkdir, readdir, stat } from "node:fs/promises";
import path from "node:path";

const out = path.resolve("out");
let count = 0;

async function walk(dir) {
  for (const name of await readdir(dir)) {
    const full = path.join(dir, name);
    if ((await stat(full)).isDirectory()) {
      if (name !== "_next" && name !== "img") await walk(full);
      continue;
    }
    if (!name.endsWith(".html") || name === "index.html" || name === "404.html") continue;
    const folder = path.join(dir, name.slice(0, -5));
    await mkdir(folder, { recursive: true });
    await copyFile(full, path.join(folder, "index.html"));
    count++;
  }
}

await walk(out);
console.log(`postbuild: wrote ${count} folder/index.html copies`);
