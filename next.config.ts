import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  distDir: "docs",
  basePath: "/KroViz", // Needed for GitHub Pages
  trailingSlash: true, // Ensures /demo generates /demo/index.html
  // Next.js static export does not support Image Optimization API by default unless configured
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
