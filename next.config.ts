// next.config.ts
import type { NextConfig } from "next";

const repoName = "Personal_Website";

const isProd = process.env.NODE_ENV === "production";
const basePath = isProd ? `/${repoName}` : "";

const nextConfig: NextConfig = {
  output: "export",

  basePath,
  assetPrefix: basePath,

  trailingSlash: true, // IMPORTANT for GitHub Pages

  images: {
    unoptimized: true,
  },
};

export default nextConfig;
