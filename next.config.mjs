/** @type {import('next').NextConfig} */
const nextConfig = {
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
    unoptimized: true, // يمكن تعديله إلى false في الإنتاج لتحسين الأداء
    domains: ["hebbkx1anhila5yf.public.blob.vercel-storage.com"],
    formats: ["image/avif", "image/webp"],
  },

  // تحسينات تجريبية
  experimental: {
    // تعطيل optimizeCss لتجنب مشاكل مع critters
    optimizeCss: false,
    optimizePackageImports: [
      "lucide-react", 
      "@radix-ui/react-icons",
      "framer-motion",
      "date-fns",
      "recharts"
    ],
    webVitalsAttribution: ["CLS", "LCP"], // تقليل التتبع في التطوير
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
