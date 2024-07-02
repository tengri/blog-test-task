const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'ancient-cactus-f8e2cc0e6a.strapiapp.com',
                pathname: '/uploads/**',
            },
        ],
    },
    async redirects() {
        return [
            {
                source: '/',
                destination: '/posts',
                permanent: true,
            },
        ]
    },
}


export default nextConfig;
