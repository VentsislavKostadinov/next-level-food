/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: process.env.DB_AWS_BUCKET_ENDPOINT,
                port: '',
                pathname: '/**',
            },
        ],
    },
}

module.exports = nextConfig
