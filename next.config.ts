import type { NextConfig } from "next";
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
  allowedDevOrigins: [
    'smart-dancers-spend.loca.lt'
  ]
};

export default withNextIntl(nextConfig);
