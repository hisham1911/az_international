import {
  FileCheck,
  Microscope,
  Users,
  Shield,
  Wrench,
  Award,
} from "lucide-react";
import Link from "next/link";
import React from "react";

import { FadeIn } from "@/components/animations/fade-in";
import { StaggerChildren } from "@/components/animations/stagger-children";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface Service {
  icon: React.ReactElement;
  title: string;
  description: string;
  link: string;
}

export default function Services() {
  const services: Service[] = [
    {
      icon: <FileCheck className="h-10 w-10 text-blue-600" />,
      title: "Quality Assurance & Controls",
      description:
        "Comprehensive testing including UT, MT, PT, VT, and welders' qualification.",
      link: "/services/quality-assurance",
    },
    {
      icon: <Microscope className="h-10 w-10 text-blue-600" />,
      title: "Standard NDT Services",
      description:
        "Complete range of non-destructive testing using state-of-the-art equipment for all field applications.",
      link: "/services/standard-ndt",
    },
    {
      icon: <Wrench className="h-10 w-10 text-blue-600" />,
      title: "Field/Industrial Inspection",
      description:
        "Pipeline welding inspection, on-stream wall thickness measurement, and comprehensive equipment inspection.",
      link: "/services/field-industrial",
    },
    {
      icon: <Shield className="h-10 w-10 text-blue-600" />,
      title: "Specialized Services",
      description:
        "Vendor surveillance, rope access inspection, tank integrity programs, and advanced engineering services.",
      link: "/services/specialized-services",
    },
    {
      icon: <Users className="h-10 w-10 text-blue-600" />,
      title: "Capacity Building Training",
      description:
        "Customized training courses to develop competencies of engineers and technicians in various disciplines.",
      link: "/services/capacity-building",
    },
    {
      icon: <Award className="h-10 w-10 text-blue-600" />,
      title: "Certifications & Standards",
      description:
        "Services compliant with international standards and certifications.",
      link: "/services",
    },
  ];

  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        {" "}
        <FadeIn className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">Our Services</h2>
          <p className="mx-auto max-w-3xl text-lg text-gray-600">
            AZ INTERNATIONAL specializes in third party inspection and capacity
            building, providing comprehensive NDT services, quality control
            inspection, and technical training to develop human resources across
            various industrial sectors.
          </p>
        </FadeIn>
        <StaggerChildren className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Card
              key={index}
              className="transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <CardHeader className="pb-2">
                <div className="mb-4">{service.icon}</div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>{" "}
              <CardContent>
                <p className="mb-4 text-gray-600">{service.description}</p>
                <Link
                  href={service.link}
                  className="group flex items-center text-sm font-medium text-blue-600 hover:text-blue-800"
                >
                  Learn more{" "}
                  <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </Link>
              </CardContent>
            </Card>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
