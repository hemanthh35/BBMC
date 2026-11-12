import type { NextConfig } from "next";

// Static export: `npm run build` writes plain HTML/CSS/JS/images to ./out, which any static
// host can serve (BBMC's site runs as a Render Static Site, publish directory "out").
const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: false,
  images: {
    // Images are already optimised to WebP by scripts/optimize-images.mjs
    unoptimized: true,
  },
  poweredByHeader: false,
};

export default nextConfig;
