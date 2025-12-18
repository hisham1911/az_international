import { useEffect, useRef, useState, useCallback } from "react";

interface UseIntersectionObserverOptions {
  threshold?: number;
  rootMargin?: string;
  once?: boolean;
}

export function useIntersectionObserver({
  threshold = 0.1,
  rootMargin = "50px",
  once = true,
}: UseIntersectionObserverOptions = {}) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  const handleIntersection = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      const [entry] = entries;
      if (entry.isIntersecting) {
        setIsVisible(true);
        if (once && observerRef.current) {
          observerRef.current.disconnect();
        }
      } else if (!once) {
        setIsVisible(false);
      }
    },
    [once]
  );

  useEffect(() => {
    const currentRef = ref.current;
    if (!currentRef) return;

    // Use requestIdleCallback for better performance
    const setupObserver = () => {
      observerRef.current = new IntersectionObserver(handleIntersection, {
        threshold,
        rootMargin,
      });
      observerRef.current.observe(currentRef);
    };

    if (window.requestIdleCallback) {
      window.requestIdleCallback(setupObserver);
    } else {
      setupObserver();
    }

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [handleIntersection, threshold, rootMargin]);

  return { ref, isVisible };
}
