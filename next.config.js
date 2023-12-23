/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname:
                    'ventsislav-kostadinov-next-food-level.s3.eu-central-1.amazonaws.com',
                port: '',
                pathname: '/**',
            },
        ],
    },
}

module.exports = nextConfig

//hostname: 'next-food-level.s3.eu-central-1.amazonaws.com/',
