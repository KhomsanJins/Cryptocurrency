/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = {
    reactStrictMode: true,
    transpilePackages: ['@mui/x-charts'],
    images: {
        formats: ["image/png"],
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'assets.coingecko.com',
                port: '',
                pathname: '/coins/images/1/large/**',
            },
        ],
    },
};

module.exports = nextConfig
