/** @type {import('next').NextConfig} */
const nextConfig = {
  // Exportación estática para servirse en Cloudflare Workers (migrado desde Netlify).
  output: 'export',
  images: { unoptimized: true },};

export default nextConfig;
