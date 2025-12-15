"use client";

import { useEffect, useState, useRef } from "react";

export function CountUp({
  end,
  duration = 2000,
  prefix = "",
  suffix = "",
  className = "",
}) {
  const [count, setCount] = useState(0);
  const countRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.1,
      }
    );

    const currentRef = countRef.current;

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    // Use CSS animation instead of JavaScript for better performance
    // Fallback to JS animation for complex numbers
    if (end <= 100) {
      // For small numbers, use a simpler approach with fewer frames
      const steps = Math.min(end, 20); // Limit animation steps to reduce main-thread work
      const stepDuration = duration / steps;
      let currentStep = 0;

      const interval = setInterval(() => {
        currentStep++;
        const progress = currentStep / steps;
        const eased = 1 - (1 - progress) * (1 - progress);
        const currentCount = Math.floor(eased * end);

        setCount(currentCount);

        if (currentStep >= steps) {
          setCount(end);
          clearInterval(interval);
        }
      }, stepDuration);

      return () => clearInterval(interval);
    } else {
      // For larger numbers, use requestAnimationFrame but with throttling
      let startTime;
      let animationFrame;
      let lastUpdate = 0;
      const throttleMs = 16; // ~60fps max to reduce main-thread work

      const startAnimation = (timestamp) => {
        if (!startTime) startTime = timestamp;

        // Throttle updates to reduce main-thread work
        if (timestamp - lastUpdate < throttleMs) {
          animationFrame = requestAnimationFrame(startAnimation);
          return;
        }
        lastUpdate = timestamp;

        const progress = timestamp - startTime;
        const percentage = Math.min(progress / duration, 1);
        const eased = 1 - (1 - percentage) * (1 - percentage);
        const currentCount = Math.floor(eased * end);

        setCount(currentCount);

        if (progress < duration) {
          animationFrame = requestAnimationFrame(startAnimation);
        } else {
          setCount(end);
        }
      };

      animationFrame = requestAnimationFrame(startAnimation);

      return () => {
        if (animationFrame) {
          cancelAnimationFrame(animationFrame);
        }
      };
    }
  }, [end, duration, isVisible]);

  return (
    <span ref={countRef} className={className}>
      {prefix}
      {count}
      {suffix}
    </span>
  );
}
