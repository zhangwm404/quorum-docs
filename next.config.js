const withMarkdoc = require('@markdoc/next.js')

const nextConfig = {
  exportTrailingSlash: true,

  reactStrictMode: true,

  pageExtensions: ['js', 'jsx', 'md'],
}

const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  assetPrefix: isProd ? 'https://zhangwm404.github.io/quorum-docs' : undefined,
  withMarkdoc()(nextConfig),
}
