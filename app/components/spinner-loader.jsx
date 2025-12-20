"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState, useCallback } from "react";

export default function SpinnerLoader() {
  const pathname = usePathname();
  const [showLoader, setShowLoader] = useState(false);
  const isFirstLoad = useRef(true);
  const previousPathname = useRef(pathname);
  const timerRef = useRef(null);

  // Clear any existing timer
  const clearTimer = useCallback(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  }, []);

  useEffect(() => {
    // Skip loader on initial page load - content should render immediately
    if (isFirstLoad.current) {
      isFirstLoad.current = false;
      previousPathname.current = pathname;
      return;
    }

    // Only show loader when navigating to a different page
    if (pathname !== previousPathname.current) {
      previousPathname.current = pathname;

      // Clear any existing timer and hide loader when navigation completes
      clearTimer();
      setShowLoader(false);
    }
  }, [pathname, clearTimer]);

  useEffect(() => {
    // Track clicks on navigation links
    const handleLinkClick = (e) => {
      const linkElement = e.target.closest("a");
      if (linkElement) {
        const href = linkElement.getAttribute("href");
        // Ignore external links and links that don't start with /
        if (
          href &&
          (href.startsWith("/") || href.startsWith("#")) &&
          !href.includes("http")
        ) {
          // Ignore links that point to the same current page or just change hash
          const [hrefPath] = href.split("#");
          if (
            href === pathname ||
            href === `${pathname}/` ||
            href.startsWith("#") ||
            (hrefPath && hrefPath === pathname)
          ) {
            return;
          }

          // Clear any existing timer before starting a new one
          clearTimer();
          setShowLoader(true);

          // Auto-hide after max 3 seconds (safety timeout)
          timerRef.current = setTimeout(() => {
            setShowLoader(false);
          }, 3000);
        }
      }
    };

    document.addEventListener("click", handleLinkClick);

    return () => {
      document.removeEventListener("click", handleLinkClick);
      clearTimer();
    };
  }, [pathname, clearTimer]);

  // Cleanup on unmount
  useEffect(() => {
    return () => clearTimer();
  }, [clearTimer]);

  if (!showLoader) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-white/70 backdrop-blur-sm">
      <div className="relative h-20 w-20">
        <div className="absolute inset-0 animate-spin rounded-full border-4 border-blue-100 border-t-blue-600" />
        <div className="absolute inset-0 flex items-center justify-center">
          <Image
            src="/images/az-logo.png"
            alt="AZ International Logo"
            width={40}
            height={40}
            className="object-contain"
            priority
          />
        </div>
      </div>
    </div>
  );
}

// Centered spinner without background (can be used anywhere)
export function CenteredSpinner({ size = "md" }) {
  const sizes = {
    sm: "w-10 h-10",
    md: "w-16 h-16",
    lg: "w-24 h-24",
  };

  return (
    <div className="flex items-center justify-center py-8">
      <div className={`relative ${sizes[size]}`}>
        <div className="absolute inset-0 animate-spin rounded-full border-4 border-blue-100 border-t-blue-600" />
        <div className="absolute inset-0 flex items-center justify-center">
          <Image
            src="/images/az-logo.png"
            alt="AZ International Logo"
            width={size === "lg" ? 60 : size === "md" ? 40 : 24}
            height={size === "lg" ? 60 : size === "md" ? 40 : 24}
            className="object-contain"
            priority
          />
        </div>
      </div>
    </div>
  );
}
