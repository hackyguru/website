/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'blog.codex.storage',
      },
      {
        protocol: 'https',
        hostname: 'blog.waku.org',
      },
      {
        protocol: 'https',
        hostname: 'miro.medium.com',
      },
      {
        protocol: 'https',
        hostname: 'opengraph.b-cdn.net',
      },
    ],
  },
};

export default nextConfig;
