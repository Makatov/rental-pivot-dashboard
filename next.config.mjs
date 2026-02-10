/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'static.flimod.com',
      },
    ],
  },
};

export default nextConfig;
