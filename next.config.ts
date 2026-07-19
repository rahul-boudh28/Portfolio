import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  // This MUST match your GitHub repository name exactly
  basePath: "/Portfolio",
  assetPrefix: "/Portfolio/",
};

export default nextConfig;