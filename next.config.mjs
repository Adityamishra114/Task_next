/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/Task_next/",
  output: "export",
  distDir: "dist",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
