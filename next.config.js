/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}
const withSass = require('@zeit/next-sass')
module.exports = withSass()

module.exports = nextConfig
