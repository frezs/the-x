/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{
      protocol: 'https', hostname: 'image.baidu.com', port: '', pathname: '/search/down?url=**'
    }]
  }
}

module.exports = nextConfig
