import type { NextConfig } from 'next';
import path from 'path';

const nextConfig: NextConfig = {
  // senin ayarların
  output: 'export',             // static export
  images: { unoptimized: true },// <Image> için
  trailingSlash: true,          // /tr/ gibi son slash’lı yollar
  eslint: { ignoreDuringBuilds: true },

  // güvenlik eklemeleri
  poweredByHeader: false,              // X-Powered-By headerını kaldır
  productionBrowserSourceMaps: false,  // browser sourcemap gizle

  // workspace root uyarısı için
  outputFileTracingRoot: path.join(__dirname)
};

export default nextConfig;
