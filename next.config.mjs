/** @type {import('next').NextConfig} */
const nextConfig = {
  // Set output file tracing root to silence workspace warning
  outputFileTracingRoot: process.cwd(),
  
  // Enable strict mode for better development experience
  eslint: {
    dirs: ["app", "components", "lib", "hooks"],
  },
  typescript: {
    // Enable type checking during builds
    ignoreBuildErrors: false,
  },
  // تحسين الصور
  images: {
    unoptimized: false, // Enable Next.js image optimization for production
    domains: ["hebbkx1anhila5yf.public.blob.vercel-storage.com"],
    formats: ["image/avif", "image/webp"],
  },

  // تحسينات تجريبية
  experimental: {
    // optimizePackageImports is now stable in Next.js 15, but keeping in experimental for compatibility
  },

  // تحسين معالجة المكونات الخارجية
  serverExternalPackages: ["sharp"],

  // تحسينات المترجم
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },

  // تحسين التحميل
  reactStrictMode: true, // يمكن تعطيله مؤقتاً لتحسين الأداء في التطوير

  // تسريع التحميل
  compress: true, // تفعيل الضغط (الافتراضي هو true لكن للتأكيد)
  poweredByHeader: false, // إزالة ترويسة X-Powered-By
  
  // تحسين التطوير (swcMinify محذوف لأنه افتراضي في Next.js 15)
  
  // تسريع تحميل الصفحة
  onDemandEntries: {
    maxInactiveAge: 60 * 60 * 1000, // زيادة وقت الاحتفاظ بالصفحات المحملة
    pagesBufferLength: 5, // عدد الصفحات المحملة مسبقاً
  },
};

export default nextConfig;
