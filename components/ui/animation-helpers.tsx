"use client";

import React from "react";

/**
 * NoAnimation - Wrapper that renders children without animation
 * Used for content that should appear immediately with optional styling
 */
export function NoAnimation({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  if (className) {
    return <div className={className}>{children}</div>;
  }
  return <>{children}</>;
}

/**
 * SimpleAnimation - Simple grid wrapper without animation delays
 * Used for instant grid display
 */
export function SimpleAnimation({
  children,
  className = "grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return <div className={className}>{children}</div>;
}
