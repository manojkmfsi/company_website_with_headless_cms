/** @type {import('next').NextConfig} */
const url = new URL(process.env.NEXT_PUBLIC_STRAPI_API_URL);
const nextConfig = {
  reactStrictMode: true,
  images: {
            remotePatterns: [
          {
            protocol: url.protocol.replace(':', ''),
            hostname: url.hostname,
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
