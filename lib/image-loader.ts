// Custom next/image loader for the static export: maps each requested width to a
// pre-generated size (scripts/responsive-images.mjs), e.g. /img/x.webp -> /img/x-800.webp.
const WIDTHS = [480, 800, 1280];

export default function imageLoader({ src, width }: { src: string; width: number; quality?: number }) {
  if (!src.startsWith("/img/") || !src.endsWith(".webp") || /-\d+\.webp$/.test(src)) return src;
  const w = WIDTHS.find((x) => x >= width);
  return w ? src.replace(/\.webp$/, `-${w}.webp`) : src;
}
