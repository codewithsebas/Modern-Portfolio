/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["api.daily.dev", "res.cloudinary.com"],
  },
};

module.exports = nextConfig;
