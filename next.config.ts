import type { NextConfig } from "next";

// Static export: `npm run build` writes plain HTML/CSS/JS/images to ./out, which any static
// host can serve (BBMC's site runs as a Render Static Site, publish directory "out").
const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: false,
  images: {
    // Pre-sized WebP copies (scripts/responsive-images.mjs) chosen per screen by lib/image-loader.ts
    loader: "custom",
    loaderFile: "./lib/image-loader.ts",
    deviceSizes: [480, 800, 1280, 1920],
    imageSizes: [],
  },
  poweredByHeader: false,
};

export default nextConfig;
