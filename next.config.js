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



module.exports = withPWA({
  pwa: {
    disable: process.env.NODE_ENV === 'development',
    // dest: 'public', // comment out this line
    register: true,
    sw: '/sw.js'
  },
  reactStrictMode: true,
  //for external images must add domain
  images: {
    domains: ["res.cloudinary.com"],
  },
});
