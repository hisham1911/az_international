/** @type {import('next').NextConfig} */
const nextConfig = {
  // Set output file tracing root to silence workspace warning
  outputFileTracingRoot: process.cwd(),
  
  // Enable strict mode for better development experience
  reactStrictMode: true,
  
  // ESLint configuration
  eslint: {
    dirs: ["app", "components", "lib", "hooks"],
  },
  
  // TypeScript configuration
  typescript: {
    ignoreBuildErrors: false,
  },
  
  // Image optimization
  images: {
    unoptimized: false,
    domains: ["hebbkx1anhila5yf.public.blob.vercel-storage.com"],
    formats: ["image/avif", "image/webp"],
  },

  // External packages for server-side rendering
  serverExternalPackages: ["sharp"],

  // Compiler optimizations
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },

  // Performance optimizations
  compress: true,
  poweredByHeader: false,
  
  // Development optimizations
  onDemandEntries: {
    maxInactiveAge: 60 * 60 * 1000,
    pagesBufferLength: 5,
  },
};

export default nextConfig;
