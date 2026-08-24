/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    optimizePackageImports: ['lucide-react']
  },
  logging: {
    fetches: {
      fullUrl: true
    }
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        hostname: "image.tmdb.org"
      }
    ]
  }
};

module.exports = nextConfig;
