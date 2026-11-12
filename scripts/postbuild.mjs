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

// Next.js static export writes route prefetch data as nested files
// (about/__next.about/__PAGE__.txt) but the client requests dotted names
// (about/__next.about.__PAGE__.txt). Write the dotted copies so prefetching doesn't 404.
let flat = 0;
async function flatten(dir) {
  for (const name of await readdir(dir)) {
    const full = path.join(dir, name);
    if (!(await stat(full)).isDirectory() || name === "_next" || name === "img") continue;
    if (name.startsWith("__next.")) {
      const files = [];
      const collect = async (d, rel) => {
        for (const n of await readdir(d)) {
          const f = path.join(d, n);
          if ((await stat(f)).isDirectory()) await collect(f, [...rel, n]);
          else files.push([f, [...rel, n].join(".")]);
        }
      };
      await collect(full, [name]);
      for (const [src, dotted] of files) {
        await copyFile(src, path.join(dir, dotted));
        flat++;
      }
    } else {
      await flatten(full);
    }
  }
}
await flatten(out);
console.log(`postbuild: wrote ${flat} prefetch file copies`);
