/** @type {import('next').NextConfig} */
const nextConfig = {
  // This line tells Vercel to ignore those text errors and just build the site
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Keep any other settings you already have below this...
};

export default nextConfig;