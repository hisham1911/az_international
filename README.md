# AZ International - Engineering & Technical Consulting

A modern, high-performance web application built with Next.js 15 and React 18, showcasing AZ International's engineering inspection, technical consultancy, and professional training services.

## 🎯 Project Overview

**What it does:** AZ International's official website provides comprehensive information about engineering services, certificate verification system, and administrative dashboard for managing certificates and content.

**Who it's for:**

- Potential clients seeking engineering inspection and consultancy services
- Certificate holders and verifying parties needing authentication
- Administrators managing certificates and system content
- Mobile users requiring full-featured access across all devices

**Why Next.js 15 + App Router:**

- **Server Components** for optimal performance and SEO
- **App Router** for modern routing with layouts and loading states
- **Image Optimization** for fast loading and better Core Web Vitals
- **Built-in TypeScript** support for type safety and developer experience
- **Edge Runtime** compatibility for global performance

## 🏗️ Architecture

### App Router Flow

```
app/
├── layout.tsx          # Root layout with navigation
├── page.tsx           # Homepage with lazy-loaded components
├── loading.tsx        # Global loading UI
├── about/             # Static about page
├── services/          # Service pages with dynamic routing
├── certificates/      # Certificate verification system
├── contact/           # Contact form with validation
└── adminAZ/          # Protected admin dashboard
    ├── layout.jsx     # Admin-specific layout
    ├── login/         # Authentication
    ├── certificates/  # Certificate management
    └── services/      # Service management
```

### Server vs Client Components

- **Server Components (Default):** Static pages, layouts, and data-heavy components
- **Client Components ("use client"):** Interactive forms, animations, state management
- **Hybrid Approach:** Server-side rendering for SEO, client-side hydration for interactivity

### Data & Rendering Strategy

- **Static Generation (SSG):** Service pages, about page for optimal performance
- **Server-Side Rendering (SSR):** Dynamic certificate verification
- **Client-Side Rendering (CSR):** Admin dashboard, interactive forms
- **Incremental Static Regeneration (ISR):** Content updates without full rebuilds

## 🔧 Engineering Decisions

### Why Phased Upgrades

1. **Risk Mitigation:** Incremental updates reduce breaking changes
2. **Production Stability:** Each phase validated before proceeding
3. **Dependency Compatibility:** Ensures ecosystem alignment
4. **Performance Monitoring:** Measure impact of each upgrade

### Why React 18 (Not 19)

- **Production Stability:** React 18.3.1 is battle-tested in production
- **Ecosystem Maturity:** Full library compatibility and community support
- **Concurrent Features:** Suspense, automatic batching, and transitions
- **Future-Ready:** Easy upgrade path to React 19 when stable

### Why Strict TypeScript

- **Type Safety:** Catch errors at compile time, not runtime
- **Developer Experience:** Better IntelliSense and refactoring
- **Code Quality:** Enforces consistent patterns and interfaces
- **Maintainability:** Self-documenting code with explicit types

### Why ESLint v9

- **Modern Rules:** Latest JavaScript/TypeScript best practices
- **Performance:** Faster linting with improved rule engine
- **React 18 Support:** Hooks rules and concurrent features
- **Next.js Integration:** Framework-specific optimizations

## ⚡ Performance Strategy

### Lighthouse Issues Addressed

- **Reduced Unused JavaScript:** Removed 7 unused dependencies (vaul, input-otp, cmdk, embla-carousel, react-resizable-panels)
- **Code Splitting:** Lazy loading of non-critical components (Stats, Engineers, Clients)
- **Image Optimization:** All images use Next.js `<Image />` with AVIF/WebP formats
- **Bundle Optimization:** Eliminated duplicate components and unused UI libraries

### Code-Splitting Approach

```typescript
// Critical components loaded immediately
import Hero from "@/components/hero";
import Services from "@/components/services";

// Non-critical components lazy loaded
const Stats = lazy(() => import("@/components/stats"));
const Engineers = lazy(() => import("@/components/engineers"));
const Clients = lazy(() => import("@/components/clients"));
```

### Main-Thread Reduction Strategy

- **Server Components:** Move rendering to server where possible
- **Dynamic Imports:** Load components only when needed
- **Optimized Fonts:** Inter font with `display: swap` to prevent FOIT
- **Preconnect:** DNS prefetching for external domains
- **Critical Resource Preloading:** Logo and hero images

## 🚀 How to Run

### Prerequisites

- Node.js >= 18.0.0
- npm >= 8.0.0

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd az_international

# Install dependencies
npm install
```

### Development

```bash
# Start development server
npm run dev

# Open http://localhost:3000
```

### Build & Production

```bash
# Create production build
npm run build

# Start production server
npm start
```

### Code Quality

```bash
# Run ESLint
npm run lint

# Fix ESLint issues
npm run lint:fix

# Type checking
npm run type-check

# Format code
npm run format
```

## 🎤 Interview Talking Points

### 1. **Modern Architecture Decision**

"I chose Next.js 15 with App Router for its server-first approach, which gives us the best of both worlds - server-side rendering for SEO and performance, with client-side interactivity where needed. The certificate verification system benefits from SSR for security, while the admin dashboard uses client components for rich interactions."

### 2. **Performance Optimization Strategy**

"I implemented a comprehensive performance strategy including lazy loading of non-critical components, removing 7 unused dependencies to reduce bundle size, and using Next.js Image optimization. This resulted in improved Core Web Vitals and faster page loads, especially important for mobile users in emerging markets."

### 3. **Type Safety & Code Quality**

"I enforced strict TypeScript throughout the application, which catches errors at compile time and provides excellent developer experience. Combined with ESLint v9 and Prettier, we maintain consistent code quality and reduce bugs in production."

### 4. **Scalable Component Architecture**

"I organized components into a clear hierarchy - UI components in `/components/ui`, feature components in `/components`, and page-specific components in `/app`. This makes the codebase maintainable and allows for easy testing and reusability."

### 5. **Production-Ready Deployment**

"The application is built with production considerations from day one - proper error boundaries, loading states, SEO optimization, and security headers. The admin dashboard includes proper authentication and the certificate system has validation and error handling for real-world usage."

---

**Built with ❤️ using Next.js 15, React 18, TypeScript, and Tailwind CSS**
