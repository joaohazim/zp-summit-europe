/** @type {import('next').NextConfig} */
const nextConfig = {
  // Otimizações de performance
  experimental: {
    optimizePackageImports: ['lucide-react']
  },
  
  // Configurações de imagem
  images: {
    domains: ['images.unsplash.com'],
    formats: ['image/webp', 'image/avif']
  },

  // Headers de segurança
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          }
        ],
      },
    ]
  },
}

module.exports = nextConfig