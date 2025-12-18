"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";

import { cn } from "@/lib/utils";

interface OptimizedAnimationProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  threshold?: number;
  once?: boolean;
  type?: "fade" | "slide" | "stagger";
  staggerDelay?: number;
  /** If true, content is visible immediately without waiting for intersection */
  immediate?: boolean;
}

export const OptimizedAnimation = React.memo(function OptimizedAnimation({
  children,
  className,
  delay = 0,
  duration = 300,
  threshold = 0.1,
  once = true,
  type = "fade",
  staggerDelay = 50,
  immediate = false,
}: OptimizedAnimationProps) {
  // If immediate, start visible right away (no animation delay)
  const [isVisible, setIsVisible] = useState(immediate);
  const ref = useRef<HTMLDivElement>(null);
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
    // If immediate mode, content is already visible, skip observer
    if (immediate) return;

    const currentRef = ref.current;
    if (!currentRef) return;

    observerRef.current = new IntersectionObserver(handleIntersection, {
      threshold,
      rootMargin: "100px",
    });
    observerRef.current.observe(currentRef);

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [handleIntersection, threshold, immediate]);

  const getAnimationStyles = (): React.CSSProperties => {
    const baseStyles: React.CSSProperties = {
      transition: `opacity ${duration}ms ease-out, transform ${duration}ms ease-out`,
      transitionDelay: `${delay}ms`,
    };

    if (type === "fade") {
      return {
        ...baseStyles,
        opacity: isVisible ? 1 : 0,
      };
    }

    if (type === "slide") {
      return {
        ...baseStyles,
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(20px)",
      };
    }

    return baseStyles;
  };

  if (type === "stagger") {
    return (
      <div ref={ref} className={cn(className)}>
        {React.Children.map(children, (child, index) => {
          if (!React.isValidElement(child)) return child;

          return (
            <div
              key={index}
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(20px)",
                transition: `opacity ${duration}ms ease-out, transform ${duration}ms ease-out`,
                transitionDelay: `${delay + index * staggerDelay}ms`,
              }}
            >
              {child}
            </div>
          );
        })}
      </div>
    );
  }

  return (
    <div ref={ref} className={cn(className)} style={getAnimationStyles()}>
      {children}
    </div>
  );
});
