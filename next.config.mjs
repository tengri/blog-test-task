const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'http',
                hostname: 'localhost',
                port: '1337',
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
