// Simple performance monitoring utility

// Store performance marks
const marks = new Map<string, number>();

interface PerformanceMetrics {
  dns?: number;
  tcp?: number;
  ttfb?: number;
  domContentLoaded?: number;
  pageLoad?: number;
  totalPageLoad?: number;
  firstPaint?: number;
  firstContentfulPaint?: number;
}

// Start timing a specific operation
export function startMeasure(name: string): void {
  if (typeof performance !== "undefined") {
    marks.set(name, performance.now());
    // Use the Performance API if available
    try {
      performance.mark(`${name}-start`);
    } catch (e) {
      // Performance API error - silently continue
    }
  }
}

// End timing and get the duration
export function endMeasure(name: string, logToConsole = false): number | null {
  if (typeof performance !== "undefined" && marks.has(name)) {
    const startTime = marks.get(name)!;
    const endTime = performance.now();
    const duration = endTime - startTime;

    // Use the Performance API if available
    try {
      performance.mark(`${name}-end`);
      performance.measure(name, `${name}-start`, `${name}-end`);
    } catch (e) {
      // Performance API error - silently continue
    }

    // Clean up
    marks.delete(name);

    // Log to console if requested (development only)
    if (logToConsole && process.env.NODE_ENV !== "production") {
      // Development logging - keep for debugging
    }

    return duration;
  }
  return null;
}

// Report performance metrics to analytics (can be connected to any analytics service)
export function reportPerformanceMetrics(): void {
  if (typeof performance === "undefined" || typeof window === "undefined")
    return;

  // Get navigation timing metrics
  const navigationTiming = performance.getEntriesByType(
    "navigation"
  )[0] as PerformanceNavigationTiming;
  const paintTiming = performance.getEntriesByType("paint");

  if (navigationTiming) {
    const metrics: PerformanceMetrics = {
      // DNS lookup time
      dns:
        navigationTiming.domainLookupEnd - navigationTiming.domainLookupStart,
      // TCP connection time
      tcp: navigationTiming.connectEnd - navigationTiming.connectStart,
      // Time to first byte
      ttfb: navigationTiming.responseStart - navigationTiming.requestStart,
      // DOM content loaded
      domContentLoaded:
        navigationTiming.domContentLoadedEventEnd -
        navigationTiming.domContentLoadedEventStart,
      // Page load time
      pageLoad: navigationTiming.loadEventEnd - navigationTiming.loadEventStart,
      // Total page load time
      totalPageLoad: navigationTiming.loadEventEnd - navigationTiming.startTime,
    };

    // First paint and first contentful paint
    if (paintTiming.length > 0) {
      paintTiming.forEach((paint) => {
        if (paint.name === "first-paint") {
          metrics.firstPaint = paint.startTime;
        }
        if (paint.name === "first-contentful-paint") {
          metrics.firstContentfulPaint = paint.startTime;
        }
      });
    }

    // Log metrics in development
    if (process.env.NODE_ENV !== "production") {
      // Development metrics logging - keep for debugging
    }

    // Here you would send these metrics to your analytics service
    // Example: sendToAnalytics(metrics)
  }
}

// Initialize performance monitoring
export function initPerformanceMonitoring(): void {
  if (typeof window !== "undefined") {
    // Report metrics when the page is fully loaded
    window.addEventListener("load", () => {
      // Use requestIdleCallback to not block the main thread
      if (window.requestIdleCallback) {
        window.requestIdleCallback(() => reportPerformanceMetrics());
      } else {
        // Fallback for browsers that don't support requestIdleCallback
        setTimeout(() => reportPerformanceMetrics(), 1000);
      }
    });
  }
}
