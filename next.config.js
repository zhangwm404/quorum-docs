const withMarkdoc = require('@markdoc/next.js')

const nextConfig = {
  exportTrailingSlash: true,

  reactStrictMode: true,

  pageExtensions: ['js', 'jsx', 'md'],
}

module.exports = withMarkdoc()(nextConfig)
