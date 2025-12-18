"use client";

import { LucideIcon } from "lucide-react";
import React from "react";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { OptimizedAnimation } from "@/components/ui/optimized-animation";

interface ServicePageLayoutProps {
  title: string;
  description: string;
  icon: LucideIcon;
  badges?: string[];
  services?: Array<{
    title: string;
    description: string;
    features: string[];
  }>;
  standards?: string[];
  industries?: Array<{
    name: string;
    icon: string;
    description: string;
  }>;
  equipment?: Array<{
    title: string;
    items: string[];
    icon: LucideIcon;
    color: string;
  }>;
}

export const ServicePageLayout = React.memo(function ServicePageLayout({
  title,
  description,
  icon: Icon,
  badges = [],
  services = [],
  standards = [],
  industries = [],
  equipment = [],
}: ServicePageLayoutProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 py-16 text-white">
        <div className="container mx-auto px-4">
          <OptimizedAnimation type="fade">
            <div className="mx-auto max-w-4xl text-center">
              <div className="mb-6 flex items-center justify-center">
                <Icon className="mr-4 h-16 w-16 text-blue-300" />
                <h1 className="text-4xl font-bold md:text-5xl">{title}</h1>
              </div>
              <p className="mb-8 text-xl leading-relaxed text-blue-100">
                {description}
              </p>
              {badges.length > 0 && (
                <div className="flex flex-wrap justify-center gap-4">
                  {badges.map((badge, index) => (
                    <Badge
                      key={index}
                      variant="secondary"
                      className="bg-blue-800 px-4 py-2 text-sm text-blue-100"
                    >
                      {badge}
                    </Badge>
                  ))}
                </div>
              )}
            </div>
          </OptimizedAnimation>
        </div>
      </section>

      {/* Services Grid */}
      {services.length > 0 && (
        <section className="py-16">
          <div className="container mx-auto px-4">
            <OptimizedAnimation type="fade">
              <div className="mb-12 text-center">
                <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
                  Our Services
                </h2>
                <p className="mx-auto max-w-3xl text-lg text-gray-600">
                  We provide comprehensive services designed to ensure the
                  highest standards of safety, reliability, and performance.
                </p>
              </div>
            </OptimizedAnimation>

            <OptimizedAnimation
              type="stagger"
              delay={100}
              className="grid grid-cols-1 gap-8 md:grid-cols-2"
            >
              {services.map((service, index) => (
                <ServiceDetailCard key={index} service={service} />
              ))}
            </OptimizedAnimation>
          </div>
        </section>
      )}

      {/* Standards Section */}
      {standards.length > 0 && (
        <section className="bg-white py-16">
          <div className="container mx-auto px-4">
            <OptimizedAnimation type="fade">
              <div className="mb-12 text-center">
                <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
                  International Standards & Certifications
                </h2>
                <p className="mx-auto max-w-3xl text-lg text-gray-600">
                  Our services comply with the most stringent international
                  standards.
                </p>
              </div>
            </OptimizedAnimation>

            <OptimizedAnimation type="fade" delay={200}>
              <div className="mx-auto grid max-w-4xl grid-cols-2 gap-4 md:grid-cols-4">
                {standards.map((standard, index) => (
                  <div
                    key={index}
                    className="rounded-lg bg-gray-50 p-4 text-center transition-colors duration-300 hover:bg-blue-50"
                  >
                    <p className="text-sm font-medium text-gray-800">
                      {standard}
                    </p>
                  </div>
                ))}
              </div>
            </OptimizedAnimation>
          </div>
        </section>
      )}

      {/* Industries Served */}
      {industries.length > 0 && (
        <section className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <OptimizedAnimation type="fade">
              <div className="mb-12 text-center">
                <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
                  Industries We Serve
                </h2>
                <p className="mx-auto max-w-3xl text-lg text-gray-600">
                  Our services support critical operations across diverse
                  industrial sectors.
                </p>
              </div>
            </OptimizedAnimation>

            <OptimizedAnimation
              type="stagger"
              delay={100}
              className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
            >
              {industries.map((industry, index) => (
                <Card
                  key={index}
                  className="text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <CardContent className="pt-6">
                    <div className="mb-4 text-4xl">{industry.icon}</div>
                    <h3 className="mb-2 text-xl font-bold text-gray-900">
                      {industry.name}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {industry.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </OptimizedAnimation>
          </div>
        </section>
      )}

      {/* Equipment & Technology */}
      {equipment.length > 0 && (
        <section className="bg-white py-16">
          <div className="container mx-auto px-4">
            <OptimizedAnimation type="fade">
              <div className="mb-12 text-center">
                <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
                  State-of-the-Art Equipment
                </h2>
                <p className="mx-auto max-w-3xl text-lg text-gray-600">
                  We utilize the latest technology and equipment to deliver
                  accurate, reliable, and efficient services.
                </p>
              </div>
            </OptimizedAnimation>

            <OptimizedAnimation
              type="stagger"
              delay={100}
              className="mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-2"
            >
              {equipment.map((item, index) => (
                <Card
                  key={index}
                  className={`border-l-4 border-${item.color}-600`}
                >
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <item.icon className={`h-6 w-6 text-${item.color}-600`} />
                      {item.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-gray-700">
                      {item.items.map((equipmentItem, itemIndex) => (
                        <li key={itemIndex}>• {equipmentItem}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </OptimizedAnimation>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 py-16 text-white">
        <div className="container mx-auto px-4 text-center">
          <OptimizedAnimation type="fade">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              Ready to Get Started?
            </h2>
            <p className="mx-auto mb-8 max-w-3xl text-xl text-blue-100">
              Contact our experts today to discuss how we can help with your
              project.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <button className="rounded-lg bg-white px-8 py-3 font-semibold text-blue-600 transition-colors duration-300 hover:bg-gray-100">
                Get Quote
              </button>
              <button className="rounded-lg border-2 border-white px-8 py-3 font-semibold text-white transition-colors duration-300 hover:bg-white hover:text-blue-600">
                Learn More
              </button>
            </div>
          </OptimizedAnimation>
        </div>
      </section>
    </div>
  );
});

const ServiceDetailCard = React.memo(function ServiceDetailCard({
  service,
}: {
  service: {
    title: string;
    description: string;
    features: string[];
  };
}) {
  return (
    <Card className="border-l-4 border-blue-600 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <CardHeader>
        <CardTitle className="text-xl text-gray-900">{service.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="mb-4 text-gray-700">{service.description}</p>
        <div className="grid grid-cols-2 gap-2">
          {service.features.map((feature, index) => (
            <div
              key={index}
              className="flex items-center text-sm text-gray-600"
            >
              <div className="mr-2 h-2 w-2 rounded-full bg-blue-600" />
              {feature}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
});
