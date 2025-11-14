/** @type {import('next').NextConfig} */

const nextConfig = {
    productionBrowserSourceMaps: false,
    output: 'standalone',
    compress: true,
    poweredByHeader: false,
    transpilePackages: ['@docsynapse/core', '@docsynapse/mist', '@docsynapse/dusk'],
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'res.cloudinary.com',
            },
            {
                protocol: 'https',
                hostname: 'ik.imagekit.io',
            },
            {
                protocol: 'https',
                hostname: 'pro.docsynapse.com',
            },
            {
                protocol: 'https',
                hostname: 'images.unsplash.com',
            },
            {
                protocol: 'https',
                hostname: 'avatars.githubusercontent.com',
            },
        ],
        formats: ['image/webp', 'image/avif'],
    },
    env: {
        NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL,
        NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
    },
    experimental: {
        optimizePackageImports: ['@headlessui/react', 'framer-motion', 'lucide-react'],
    },
    serverExternalPackages: ['sharp'],
    compiler: {
        removeConsole: process.env.NODE_ENV === 'production',
    },
    eslint: {
        ignoreDuringBuilds: true,
    },
    webpack: (config, { dev, isServer }) => {
        // Add alias for @mist/components to resolve missing modules
        config.resolve.alias = {
            ...config.resolve.alias,
            '@mist/components': require('path').resolve(__dirname, '../../packages/mist/src/components'),
            '@mist': require('path').resolve(__dirname, '../../packages/mist/src'),
        }

        // Optimize chunks for better performance
        if (!dev && !isServer) {
            config.optimization.splitChunks = {
                chunks: 'all',
                cacheGroups: {
                    default: {
                        minChunks: 2,
                        priority: -20,
                        reuseExistingChunk: true,
                    },
                    vendor: {
                        test: /[\\/]node_modules[\\/]/,
                        name: 'vendors',
                        priority: -10,
                        chunks: 'all',
                    },
                },
            };
        }
        return config;
    },
}

export default nextConfig
