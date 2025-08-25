import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',             // static export
  images: { unoptimized: true },// <Image> için
  trailingSlash: true,          // /tr/ gibi son slash’lı yollar
  eslint: { ignoreDuringBuilds: true }
};

export default nextConfig;
