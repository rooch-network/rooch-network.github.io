const withNextra = require("nextra")({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.tsx",
});

module.exports = withNextra({
  i18n: {
    locales: ["en-US", "zh-CN"],
    defaultLocale: "en-US",
  },
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  webpack5: true,
  webpack: (config) => {
    config.resolve.fallback = { fs: false };

    return config;
  },
  async redirects() {
    return [
      {
        source: "/docs",
        permanent: false,
        destination: "/docs/introduction",
      },
      {
        source: "/docs/why-rooch",
        permanent: false,
        destination: "/docs/rooch",
      },
      {
        source: "/contact-us",
        permanent: false,
        destination: "/about#contact",
      },
      {
        source: "/docs/technology/move-on-rooch",
        permanent: false,
        destination: "/docs/tech-highlights/move-language",
      },
    ];
  },
});
