/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        serverComponentsExternalPackages: ["mongoose"],
    },
    images: {
        remotePatterns: [
            {
              protocol: 'https',
              hostname: 'i.ytimg.com',
              port: '',
              pathname: '/**',
            },
            {
              protocol: 'https',
              hostname: 'assets.animatron.com',
              port: '',
              pathname: '/**',
            },
        ],
    }, 
    webpack(config){
        config.experiments = {
            ...config.experiments,
            topLevelAwait: true,
        }
        return config
    }
};

export default nextConfig;
