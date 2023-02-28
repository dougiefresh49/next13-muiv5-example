/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  env: {
    OG_IMAGE: process.env.OG_IMAGE,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "reqres.in",
      },
      {
        protocol: "https",
        hostname: "images.pexels.com",
      },
    ],
  },
};

module.exports = nextConfig;
