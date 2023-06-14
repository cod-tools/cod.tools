/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    experimental: {
      newNextLinkBehavior: false,
    },
    trailingSlash: true,
    images: {
      domains: ['raw.githubusercontent.com','i.imgur.com'],
    },
  };
  
module.exports = nextConfig;