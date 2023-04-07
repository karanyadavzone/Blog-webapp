/** @type {import('next').NextConfig} */
const nextConfig = {
  serverRuntimeConfig: {
    bodyParser: {
      sizeLimit: '10mb',
    },
  },
  reactStrictMode: true,
}

module.exports = nextConfig
