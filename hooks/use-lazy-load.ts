"use client";

import { useState, useEffect } from "react";

/**
 * Hook لتحميل المكونات بشكل كسول لتحسين الأداء الأولي
 */
export function useLazyLoad(
  initialState = false,
  delay = 0,
  skipCondition = false
): boolean {
  const [isLoaded, setIsLoaded] = useState(initialState || skipCondition);

  useEffect(() => {
    // إذا كان يجب تخطي التحميل الكسول، نعيد true مباشرة
    if (skipCondition) {
      setIsLoaded(true);
      return;
    }

    // لا داعي للتحميل المتأخر إذا كانت الحالة الأولية true بالفعل
    if (initialState) return;

    // تأخير التحميل إذا تم تحديد تأخير
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [initialState, delay, skipCondition]);

  return isLoaded;
}

interface UseVisibleLoadOptions {
  threshold?: number;
  rootMargin?: string;
}

interface UseVisibleLoadReturn {
  ref: (element: HTMLElement | null) => void;
  isVisible: boolean;
}

/**
 * Hook لتحميل المكونات عند ظهورها في الشاشة
 * يساعد على تحسين الأداء بشكل كبير للصفحات الطويلة
 */
export function useVisibleLoad(options: UseVisibleLoadOptions = { threshold: 0.1 }): UseVisibleLoadReturn {
  const [isVisible, setIsVisible] = useState(false);
  const [ref, setRef] = useState<HTMLElement | null>(null);

  useEffect(() => {
    if (!ref) return;

    const observer = new IntersectionObserver(([entry]) => {
      setIsVisible(entry.isIntersecting);
    }, options);

    observer.observe(ref);

    return () => {
      observer.disconnect();
    };
  }, [ref, options]);

  return { ref: setRef, isVisible };
}