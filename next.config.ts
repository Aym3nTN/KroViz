import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  distDir: "docs",
  // basePath: "/kroviz", // <--- Add your repository name here
  // Next.js static export does not support Image Optimization API by default unless configured
  images: {
    unoptimized: true,
  },
  // Ensure base path is correct if deploying to user.github.io/repo/, but assuming user domain or root if not specified. Let's leave basePath empty for now, or maybe they just need the docs folder populated.
};

export default nextConfig;
