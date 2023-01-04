const withMarkdoc = require('@markdoc/next.js')

const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ['js', 'jsx', 'md'],
}

module.exports = withMarkdoc()(nextConfig)
