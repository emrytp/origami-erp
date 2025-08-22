// next.config.ts
import createNextIntlPlugin from 'next-intl/plugin';
import type {NextConfig} from 'next';

// next-intl plugin (URL değiştirmeden cookie ile i18n)
// src/i18n/request.ts dosyanı otomatik kullanır
const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
  images: {
    unoptimized: true
  },
  typescript: {
    // ignoreBuildErrors: true,
  },
  // output: "export", // statik export kullanacaksan açık bırakabilirsin (routing'siz i18n ile uyumlu)
};

// eslint-disable-next-line import/no-default-export
export default withNextIntl(nextConfig);
