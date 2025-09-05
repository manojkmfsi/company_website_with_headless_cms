/** @type {import('next').NextConfig} */
const url = new URL(process.env.NEXT_PUBLIC_STRAPI_MEDIA_URL);
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: url.protocol.replace(":", ""),
        hostname: url.hostname,
      },
      {
        protocol: "https",
        hostname: "upload.wikimedia.org",
      },
      {
        protocol: "https",
        hostname: "placehold.co",
        port: "",
      },
    ],
  },
  eslint: {
    ignoreDuringBuilds: false,
  },
};

export default nextConfig;
