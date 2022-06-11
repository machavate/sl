/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ['page.tsx', 'ts'],
  compiler: {
    styledComponents: true
  }
}

module.exports = nextConfig
