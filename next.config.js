/** @type {import('next').NextConfig} */
const nextConfig = {
  logging: {
    fetches: {
      fullUrl: true
    }
  },
  images: {
    remotePatterns: [
      {
        hostname: "image.tmdb.org"
      }
    ]
  }
};

module.exports = nextConfig;
