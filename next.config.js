// /** @type {import('next').NextConfig} */
// const nextConfig = {
//     images: {
//         remotePatterns: [
//           {
//             protocol: 'https',
//             hostname: 'images.ctfassets.net',
//           },
//         ],
//       },
// };
 
 
// export default nextConfig;
 
 
// // next.config.mjs


/** @type {import('next').NextConfig} */
// const nextConfig = {
//   images: {
//       remotePatterns: [
//         {
//           protocol: 'https',
//           hostname: 'images.ctfassets.net',
//         },
//       ],
//       domains: ['app.contentful.com'], // Add other domains if necessary
//   },
// };

// export default nextConfig;

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.ctfassets.net',
        pathname: '/**', // This matches all paths
      },
      {
        protocol: 'https',
        hostname: 'app.contentful.com', // Migrate from domains to remotePatterns
        pathname: '/**', // This matches all paths
      },
    ],
  },
};

export default nextConfig;
