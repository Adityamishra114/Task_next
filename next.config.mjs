/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";
const nextConfig = {
  assetPrefix: isProd ? "/Task_next" : "",
  basePath: isProd ? "/Task_next" : "",
  output: "export",
  trailingSlash: true,
  distDir: "dist",
  images: {
    unoptimized: true,
    path: isProd ? "/Task_next/_next/image/" : "_next/images/",
  },
};

export default nextConfig;
