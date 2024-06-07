/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";
const nextConfig = {
  assetPrefix: isProd ? NEXT_PUBLIC_BASE_PATH : "",
  basePath: isProd ? NEXT_PUBLIC_BASE_PATH : "",
  trailingSlash: true,
  distDir: "dist",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
