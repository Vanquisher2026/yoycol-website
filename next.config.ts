import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Cloudflare Pages 静态导出（与 fenix-sanyamed / keylozin 同模式）
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
};

export default nextConfig;
