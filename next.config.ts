import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  // Replace 'RahulOS' with your exact GitHub repository name
  basePath: "/RahulOS",
  assetPrefix: "/RahulOS/",
};

export default nextConfig;