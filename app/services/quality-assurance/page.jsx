"use client";

import {
  Shield,
  ClipboardCheck,
  Award,
  CheckCircle,
  Users,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { OptimizedAnimation } from "@/components/ui/optimized-animation";

export default function QualityAssurancePage() {
  const services = [
    {
      title: "Quality Inspection of All Engineering Disciplines",
      description:
        "Comprehensive quality inspection services covering all engineering disciplines according to international standards.",
      features: [
        "Multi-disciplinary expertise",
        "International standards compliance",
        "Detailed reporting",
        "Expert recommendations",
      ],
    },
    {
      title: "Ultrasonic Testing (UT)",
      description:
        "Advanced ultrasonic testing for detecting internal flaws and measuring thickness with high precision.",
      features: [
        "Internal flaw detection",
        "Thickness measurement",
        "Contact techniques",
        "Computerized reporting",
      ],
    },
    {
      title: "Magnetic Particle Testing (MT)",
      description:
        "Surface and near-surface defect detection in ferromagnetic materials using magnetic particle inspection.",
      features: [
        "Surface crack detection",
        "Subsurface defects",
        "Wet and dry methods",
        "Fluorescent techniques",
      ],
    },
    {
      title: "Dye Penetrant Testing (PT)",
      description:
        "Liquid penetrant testing for detecting surface-breaking defects in non-porous materials.",
      features: [
        "Surface defect detection",
        "Fluorescent and visible dyes",
        "Post-emulsifiable systems",
        "Solvent removable",
      ],
    },
    {
      title: "Visual Inspection (VT)",
      description:
        "Direct and remote visual inspection services using advanced optical equipment and techniques.",
      features: [
        "Direct visual inspection",
        "Remote visual inspection",
        "Borescope inspection",
        "Digital documentation",
      ],
    },
    {
      title: "Welders Inspection and Procedure Testing",
      description:
        "Comprehensive welder qualification and welding procedure specification (WPS) development and testing.",
      features: [
        "WPS development",
        "Procedure qualification",
        "Performance testing",
        "Certification documentation",
      ],
    },
  ];

  const standards = [
    "ASME Boiler and Pressure Vessel Code",
    "API Standards (API 570, 510, 653)",
    "AWS Welding Standards",
    "ASTM Testing Standards",
    "ISO 9000 Quality Management",
    "NACE Corrosion Standards",
    "ASNT Personnel Qualification",
    "EN European Standards",
  ];

  const industries = [
    {
      name: "Oil & Gas",
      icon: "🛢️",
      description: "Refineries, petrochemical plants, offshore platforms",
    },
    {
      name: "Power Generation",
      icon: "⚡",
      description: "Power plants, electrical infrastructure",
    },
    {
      name: "Manufacturing",
      icon: "⚙️",
      description: "Industrial equipment, machinery",
    },
    {
      name: "Construction",
      icon: "🏗️",
      description: "Steel structures, building construction",
    },
    {
      name: "Chemical",
      icon: "🧪",
      description: "Chemical processing, fertilizer plants",
    },
    {
      name: "Marine",
      icon: "🚢",
      description: "Shipbuilding, offshore structures",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 py-16 text-white">
        <div className="container mx-auto px-4">
          <OptimizedAnimation type="fade">
            <div className="mx-auto max-w-4xl text-center">
              <div className="mb-6 flex items-center justify-center">
                <Shield className="mr-4 h-16 w-16 text-blue-300" />
                <h1 className="text-4xl font-bold md:text-5xl">
                  Quality Assurance & Controls
                </h1>
              </div>
              <p className="mb-8 text-xl leading-relaxed text-blue-100">
                Comprehensive quality inspection services covering all
                engineering disciplines with adherence to the highest
                international standards in Non-Destructive Testing (NDT),
                quality assurance, and welding inspection.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Badge
                  variant="secondary"
                  className="bg-blue-800 px-4 py-2 text-sm text-blue-100"
                >
                  ASNT Certified
                </Badge>
                <Badge
                  variant="secondary"
                  className="bg-blue-800 px-4 py-2 text-sm text-blue-100"
                >
                  ISO 9000 Compliant
                </Badge>
                <Badge
                  variant="secondary"
                  className="bg-blue-800 px-4 py-2 text-sm text-blue-100"
                >
                  API Standards
                </Badge>
              </div>
            </div>
          </OptimizedAnimation>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <OptimizedAnimation type="fade">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
                Our QA/QC Services
              </h2>
              <p className="mx-auto max-w-3xl text-lg text-gray-600">
                We provide comprehensive quality assurance and control services
                designed to ensure the highest standards of safety, reliability,
                and performance in your operations.
              </p>
            </div>
          </OptimizedAnimation>

          <OptimizedAnimation
            type="stagger"
            delay={100}
            className="grid grid-cols-1 gap-8 md:grid-cols-2"
          >
            {services.map((service, index) => (
              <Card
                key={index}
                className="border-l-4 border-blue-600 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <CardHeader>
                  <CardTitle className="flex items-start gap-3 text-xl text-gray-900">
                    <CheckCircle className="mt-1 h-6 w-6 flex-shrink-0 text-blue-600" />
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 text-gray-700">{service.description}</p>
                  <div className="grid grid-cols-2 gap-2">
                    {service.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-center text-sm text-gray-600"
                      >
                        <div className="mr-2 h-2 w-2 rounded-full bg-blue-600" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </OptimizedAnimation>
        </div>
      </section>

      {/* Standards Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <OptimizedAnimation type="fade">
            <div className="mb-12 text-center">
              <Award className="mx-auto mb-4 h-12 w-12 text-blue-600" />
              <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
                International Standards & Certifications
              </h2>
              <p className="mx-auto max-w-3xl text-lg text-gray-600">
                Our services comply with the most stringent international
                standards to ensure quality, safety, and reliability in all our
                inspections and certifications.
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

      {/* Industries Served */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <OptimizedAnimation type="fade">
            <div className="mb-12 text-center">
              <Users className="mx-auto mb-4 h-12 w-12 text-blue-600" />
              <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
                Industries We Serve
              </h2>
              <p className="mx-auto max-w-3xl text-lg text-gray-600">
                Our quality assurance services support critical operations
                across diverse industrial sectors.
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

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 py-16 text-white">
        <div className="container mx-auto px-4 text-center">
          <OptimizedAnimation type="fade">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              Ready to Ensure Quality Excellence?
            </h2>
            <p className="mx-auto mb-8 max-w-3xl text-xl text-blue-100">
              Contact our quality assurance experts today to discuss how we can
              help maintain the highest standards in your operations.
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
}
