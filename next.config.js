/** @type {import('next').NextConfig} */
module.exports = {
  output: "standalone",
  images: {
    formats: ['image/webp', 'image/avif'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img.leboncoin.fr',
        port: '',
      }
    ]
  },
};