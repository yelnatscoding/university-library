const config = {
    env: {
        apiEndpoint: process.env.NEXT_PUBLIC_API_ENDPOINT!,
        imagekit: {
            publicKey: process.env.NEXT_PUBLIC_IMAGEKIT_PUBLIC_KEY!,
            urlEndpoint: process.env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT!,
            privateKey: process.env.IMAGEKIT_PRIVATE_KEY!
        },
        databseUrl: process.env.DATABASE_URL!,
        upstash: {
            redisUrl: process.env.UPSTASH_REDIS_URL!,
            token: process.env.UPSTASH_REDIS_TOKEN!,
            qstashUrl: process.env.QSTASH_URL!,
            qstashToken: process.env.QSTASH_TOKEN!
        }
    }
}

export default config;