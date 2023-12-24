/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: process.env.NEXT_PUBLIC_AWS_BUCKET_ENDPOINT,
                port: '',
                pathname: '/**',
            },
        ],
    },
}

module.exports = nextConfig
