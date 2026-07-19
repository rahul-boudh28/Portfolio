import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enables static export
  output: "export",
  
  // GitHub Pages requires unoptimized images if using default Next/Image loaders without a provider
  images: {
    unoptimized: true,
  },

  // NOTE: If deploying to a repository named something OTHER than your username (e.g. username.github.io),
  // uncomment the next line and replace 'repository-name' with your actual GitHub repo name.
  // basePath: "/repository-name",
  
  // Optional: Disable powered-by header for minor security obscurity
  poweredByHeader: false,
};

export default nextConfig;