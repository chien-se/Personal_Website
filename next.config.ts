import type { NextConfig } from "next";

const basePath =
  process.env.NODE_ENV === "production" ? "/Personal_Website" : "";

const nextConfig: NextConfig = {
  output: "export",

  basePath,
  assetPrefix: basePath, // IMPORTANT for GitHub Pages

  images: {
    unoptimized: true,
  },
};

export default nextConfig;
