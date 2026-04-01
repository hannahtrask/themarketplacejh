/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "dl.airtable.com"
      },
      {
        protocol: "https",
        hostname: "v5.airtableusercontent.com"
      },
      {
        protocol: "https",
        hostname: "v6.airtableusercontent.com"
      }
    ]
  }
};

export default nextConfig;
