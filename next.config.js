/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  reactStrictMode: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
      },

      {
        protocol: "https",
        hostname: "blog.ankerherz.de",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.shmh.de",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
