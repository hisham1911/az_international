"use client";

import React from "react";

import { OptimizedAnimation } from "@/components/ui/optimized-animation";
import { ServiceCard } from "@/components/ui/service-card";
import { serviceCategories } from "@/lib/services-data";

export default function ServicesPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <OptimizedAnimation type="fade">
        <h1 className="mb-8 text-center text-3xl font-bold md:text-4xl">
          Our Services
        </h1>

        <p className="mx-auto mb-12 max-w-3xl text-center text-lg text-gray-700">
          AZ INTERNATIONAL provides comprehensive inspection, testing, and
          training services adhering to the highest international standards.
        </p>
      </OptimizedAnimation>

      <OptimizedAnimation
        type="stagger"
        delay={100}
        className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
      >
        {serviceCategories.map((category) => (
          <ServiceCard
            key={category.id}
            service={category}
            showServices={true}
            maxServices={6}
          />
        ))}
      </OptimizedAnimation>
    </div>
  );
}
