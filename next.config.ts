import type { NextConfig } from "next";

const { withContentlayer } = require("next-contentlayer");

const nextConfig: NextConfig = {
  /* config options here */
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
};

module.exports = withContentlayer({ ...nextConfig });
