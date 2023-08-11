/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'Roberts Registry',
    description: 'Mein Eigenes KASM Registry',
    icon: '/img/logo.svg',
    listUrl: 'https://RrobertRr.github.io/kasm-registry/',
    contactUrl: 'https://github.com/RrobertRr/kasm-registry/issues',
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/kasm-registry/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
