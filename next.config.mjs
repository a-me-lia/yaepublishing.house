/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  images: {
    domains: [
      // Add any image domains you need
    ],
  },
}

export default nextConfig