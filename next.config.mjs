// next.config.mjs
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'www.mpug.com',
        },
      ],
    },
  };
  
  export default nextConfig;