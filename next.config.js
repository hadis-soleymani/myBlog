/** @type {import('next').NextConfig} */

const nextConfig = {
  
  reactStrictMode: true,
  //for external images must add domain
  images: {
    domains: ['res.cloudinary.com'],
  },
  
}

module.exports = nextConfig
