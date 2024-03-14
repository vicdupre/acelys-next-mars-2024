/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "fakestoreapi.com",
        protocol: "https",
        pathname: "/img/*",
        port: "",
      },
    ],
  },
};

export default nextConfig;
