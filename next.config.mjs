/** @type {import('next').NextConfig} */
// Safely parse the URL only if it exists and is valid
let url;
try {
  if (process.env.NEXT_PUBLIC_STRAPI_MEDIA_URL) {
    url = new URL(process.env.NEXT_PUBLIC_STRAPI_MEDIA_URL);
  }
} catch (e) {
  console.error('Invalid NEXT_PUBLIC_STRAPI_MEDIA_URL:', e);
  url = null;
}
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      ...(url
        ? [
            {
              protocol: url.protocol.replace(':', ''),
              hostname: url.hostname,
            },
          ]
        : []),
      {
        protocol: 'https',
        hostname: 'upload.wikimedia.org',
      },
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
      },
    ],
  },
  eslint: {
    ignoreDuringBuilds: false,
  },
};

export default nextConfig;
