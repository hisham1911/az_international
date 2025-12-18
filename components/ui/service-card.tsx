"use client";

import { CheckCircle } from "lucide-react";
import Link from "next/link";
import React from "react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ServiceCategory } from "@/lib/services-data";

interface ServiceCardProps {
  service: ServiceCategory;
  showServices?: boolean;
  maxServices?: number;
}

export const ServiceCard = React.memo(function ServiceCard({
  service,
  showServices = true,
  maxServices = 6,
}: ServiceCardProps) {
  const displayedServices = showServices
    ? service.services.slice(0, maxServices)
    : [];

  const remainingCount = service.services.length - maxServices;

  return (
    <Card className="group h-full cursor-pointer border-l-4 border-blue-600 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">
      <Link href={service.link} className="block h-full">
        <CardHeader>
          <CardTitle className="text-xl text-blue-900 transition-colors group-hover:text-blue-700">
            {service.name}
          </CardTitle>
          <p className="mt-2 text-gray-600">{service.description}</p>
        </CardHeader>
        {showServices && (
          <CardContent>
            <ul className="mb-4 space-y-2">
              {displayedServices.map((serviceItem, index) => (
                <li key={index} className="flex items-start gap-2">
                  <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-600" />
                  <span className="text-sm text-gray-700">{serviceItem}</span>
                </li>
              ))}
              {remainingCount > 0 && (
                <li className="text-sm font-medium text-blue-600">
                  +{remainingCount} more services...
                </li>
              )}
            </ul>
            <div className="text-sm font-medium text-blue-600 transition-colors group-hover:text-blue-700">
              Learn More →
            </div>
          </CardContent>
        )}
      </Link>
    </Card>
  );
});
