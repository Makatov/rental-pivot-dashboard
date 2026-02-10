/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'static.flimod.com' },
      { protocol: 'https', hostname: 'media.gucci.com' },
      { protocol: 'https', hostname: 'diorama.dam-broadcast.com' },
      { protocol: 'https', hostname: 'us.louisvuitton.com' },
      { protocol: 'https', hostname: 'assets.burberry.com' },
      { protocol: 'https', hostname: 'valentino-cdn.thron.com' },
      { protocol: 'https', hostname: 'www.prada.com' },
      { protocol: 'https', hostname: 'dolcegabbana-cdn.thron.com' },
    ],
  },
};

export default nextConfig;
