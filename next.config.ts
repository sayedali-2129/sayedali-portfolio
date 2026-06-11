import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true, // keeps things simple for static/dynamic deployments without requiring specific image loader setups
  },
};

export default nextConfig;
