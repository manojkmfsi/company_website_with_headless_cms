/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
            remotePatterns: [
          {
            protocol: 'http',
            hostname: 'localhost',
            port: '1337',
            pathname: '/uploads/**',
          },
          {
            protocol: 'https',
            hostname: 'upload.wikimedia.org',
          },
          {
            protocol: 'https',
            hostname: 'placehold.co',
            port: '',
          }
        ],
  },
};

export default nextConfig;
