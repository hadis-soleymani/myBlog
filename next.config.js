/** @type {import('next').NextConfig} */

// const nextConfig = {

//   reactStrictMode: true,
//   //for external images must add domain
//   images: {
//     domains: ['res.cloudinary.com'],
//   },

// }
// module.exports = nextConfig

const withPWA = require("next-pwa");

module.exports = withPWA({
  pwa: {
    dest: "public",
    register: true,
    skipWaiting: true,
  },
  reactStrictMode: true,
  //for external images must add domain
  images: {
    domains: ["res.cloudinary.com"],
  },
});
