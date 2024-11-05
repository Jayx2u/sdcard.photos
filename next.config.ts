import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    //domains: ['joshbucket.sdcard.photos', 'l9wfy1uxvbx3tyyf.public.blob.vercel-storage.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*.sdcard.photos'
      },
      {
        protocol: 'https',
        hostname: 'l9wfy1uxvbx3tyyf.public.blob.vercel-storage.com',
      },
    ],
  },
};

export default nextConfig;
