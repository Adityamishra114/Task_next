/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";
const nextConfig = {
  assetPrefix: isProd ? "/Task_next/" : "",
  basePath: isProd ? "/Task_next/" : "",
  output: "export",
  distDir: "dist",
  images: {
    unoptimized: true,
    path: "/Task_next/",
  },
};

export default nextConfig;
