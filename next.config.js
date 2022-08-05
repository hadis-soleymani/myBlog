/** @type {import('next').NextConfig} */

// const nextConfig = {

//   reactStrictMode: true,
//   //for external images must add domain
//   images: {
//     domains: ['res.cloudinary.com'],
//   },

// }
// module.exports = nextConfig

const withPWA = require('next-pwa')

const runtimeCaching = require("next-pwa/cache");

module.exports = withPWA({
  pwa: {
    dest: "public",
		register: true,
		skipWaiting: true,
		runtimeCaching,
		buildExcludes: [/middleware-manifest.json$/]
  },
  reactStrictMode: true,
  //for external images must add domain
  images: {
    domains: ["res.cloudinary.com"],
  },
});
