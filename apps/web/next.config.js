/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["@sonfootball/ui"],
  experimental: {
    useCache: true,
  },
};

export default nextConfig;
