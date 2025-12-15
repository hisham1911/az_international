"use client";

/**
 * وظائف لتحسين الأداء وتجربة المستخدم
 */

/**
 * تأخير تنفيذ المهام غير الضرورية بعد تحميل الصفحة
 */
export function deferTask(callback: () => void, delay = 1000): void {
  if (typeof window === "undefined") return;

  // استخدام requestIdleCallback إذا كان متاحًا، وإلا استخدام setTimeout
  if (window.requestIdleCallback) {
    window.requestIdleCallback(() => {
      setTimeout(callback, delay);
    });
  } else {
    setTimeout(callback, delay);
  }
}

/**
 * تقسيم المهام الثقيلة لتجنب تجميد واجهة المستخدم
 */
export function processBatch<T>(
  items: T[],
  processor: (item: T) => void,
  batchSize = 5,
  delay = 10
): Promise<void> {
  return new Promise((resolve) => {
    if (!items.length) {
      resolve();
      return;
    }

    const batchProcessor = (startIndex: number): void => {
      const endIndex = Math.min(startIndex + batchSize, items.length);
      const batch = items.slice(startIndex, endIndex);

      // معالجة الدفعة الحالية
      batch.forEach(processor);

      // التحقق مما إذا انتهينا من جميع العناصر
      if (endIndex >= items.length) {
        resolve();
        return;
      }

      // جدولة الدفعة التالية
      setTimeout(() => batchProcessor(endIndex), delay);
    };

    // بدء المعالجة من العنصر الأول
    batchProcessor(0);
  });
}

/**
 * تحسين تفاعلات المستخدم من خلال تقليل تكرار الأحداث
 */
export function debounce<T extends (...args: unknown[]) => unknown>(
  func: T,
  wait = 100
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout;
  return function (...args: Parameters<T>) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), wait);
  };
}

/**
 * تقييد معدل تنفيذ الوظائف (مفيد جدًا للأحداث المتكررة مثل التمرير)
 */
export function throttle<T extends (...args: unknown[]) => unknown>(
  func: T,
  limit = 100
): (...args: Parameters<T>) => void {
  let inThrottle: boolean;
  return function (...args: Parameters<T>) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}
