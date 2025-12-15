import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Shield, Award, Users, Zap, Search } from "lucide-react";
import { FadeIn } from "@/components/animations/fade-in";
import { StaggerChildren } from "@/components/animations/stagger-children";
import Image from "next/image";

export default function StandardNDTPage() {
  const services = [
    {
      title: "Ultrasonic Testing (UT) - Contact Techniques",
      description:
        "Comprehensive ultrasonic testing using contact techniques for precise defect detection and material characterization.",
      features: [
        "Contact transducers",
        "High resolution",
        "Deep penetration",
        "Real-time imaging",
      ],
    },
    {
      title: "Longitudinal Wave for Thickness Measurements",
      description:
        "Accurate thickness measurement using longitudinal ultrasonic waves for corrosion monitoring and material assessment.",
      features: [
        "Precise measurements",
        "Corrosion monitoring",
        "Material assessment",
        "Digital readouts",
      ],
    },
    {
      title: "Shear Wave for Weld Inspection",
      description:
        "Specialized shear wave ultrasonic testing for comprehensive weld inspection and defect detection.",
      features: [
        "Weld defect detection",
        "Crack identification",
        "Lack of fusion detection",
        "Angular beam inspection",
      ],
    },
    {
      title: "Surface Wave Methods",
      description:
        "Surface wave ultrasonic testing for detecting surface and near-surface defects in various materials.",
      features: [
        "Surface defects",
        "Near-surface detection",
        "High sensitivity",
        "Rapid scanning",
      ],
    },
    {
      title: "Magnetic Particle Testing (MT)",
      description:
        "Surface and subsurface defect detection in ferromagnetic materials using magnetic particle inspection techniques.",
      features: [
        "Surface defects",
        "Subsurface detection",
        "Wet and dry methods",
        "Fluorescent indication",
      ],
    },
    {
      title: "Liquid Penetrant Testing (PT)",
      description:
        "Fluorescent and visible liquid penetrant testing methods for detecting surface-breaking defects.",
      features: [
        "Fluorescent methods",
        "Visible dye methods",
        "Surface crack detection",
        "High sensitivity",
      ],
    },
    {
      title: "Computerized Ultrasonic Mapping Inspection",
      description:
        "Advanced computerized ultrasonic mapping for detailed corrosion mapping and thickness surveys.",
      features: [
        "Digital mapping",
        "Corrosion visualization",
        "Data analysis",
        "Trend monitoring",
      ],
    },
    {
      title: "Complete Storage Tanks Inspection (Walls & Floors)",
      description:
        "Comprehensive storage tank inspection covering walls, floors, and roofs according to API standards.",
      features: [
        "Wall inspection",
        "Floor assessment",
        "Roof evaluation",
        "API compliance",
      ],
    },
    {
      title: "Leak Detection and Testing",
      description:
        "Advanced leak detection services using various NDT methods to identify and locate leaks.",
      features: [
        "Multiple techniques",
        "Leak location",
        "Sensitivity testing",
        "Environmental safety",
      ],
    },
    {
      title: "Pipeline Inspection",
      description:
        "Comprehensive pipeline inspection services using various NDT methods for integrity assessment.",
      features: [
        "Integrity assessment",
        "Corrosion detection",
        "Wall thickness",
        "Defect identification",
      ],
    },
  ];

  const techniques = [
    {
      name: "Ultrasonic Testing (UT)",
      description: "High-frequency sound waves for internal defect detection",
      applications: [
        "Thickness measurement",
        "Weld inspection",
        "Crack detection",
        "Corrosion mapping",
      ],
    },
    {
      name: "Magnetic Particle Testing (MT)",
      description: "Magnetic field and particles for surface defect detection",
      applications: [
        "Surface cracks",
        "Subsurface defects",
        "Weld inspection",
        "Component testing",
      ],
    },
    {
      name: "Liquid Penetrant Testing (PT)",
      description: "Liquid penetrant for surface-breaking defect detection",
      applications: [
        "Surface cracks",
        "Porosity",
        "Lack of fusion",
        "Component inspection",
      ],
    },
    {
      name: "Visual Testing (VT)",
      description: "Direct and remote visual inspection techniques",
      applications: [
        "General inspection",
        "Weld quality",
        "Surface conditions",
        "Documentation",
      ],
    },
  ];

  const standards = [
    "ASME Section V - Nondestructive Examination",
    "ASTM E165 - Liquid Penetrant Testing",
    "ASTM E709 - Magnetic Particle Testing",
    "ASTM E114 - Ultrasonic Testing",
    "ISO 9712 - NDT Personnel Qualification",
    "AWS D1.1 - Structural Welding Code",
    "API 510 - Pressure Vessel Inspection",
    "NACE Standards for Corrosion Control",
  ];

  const industries = [
    { name: "Oil & Gas", icon: "🛢️" },
    { name: "Petrochemical", icon: "⚗️" },
    { name: "Power Generation", icon: "⚡" },
    { name: "Aerospace", icon: "✈️" },
    { name: "Marine", icon: "🚢" },
    { name: "Construction", icon: "🏗️" },
  ];

  const equipment = [
    "Digital Ultrasonic Flaw Detectors",
    "Phased Array UT Systems",
    "Portable Magnetic Yokes",
    "UV-A Light Sources",
    "Penetrant Testing Kits",
    "Thickness Gauges",
    "Corrosion Mapping Systems",
    "Digital Documentation Systems",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-green-900 via-green-800 to-teal-800 py-20 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container relative z-10 mx-auto px-4">
          <FadeIn>
            <div className="mx-auto max-w-4xl text-center">
              <h1 className="mb-6 text-4xl font-bold md:text-5xl">
                Standard NDT Services
              </h1>
              <p className="mb-8 text-xl opacity-90 md:text-2xl">
                Comprehensive non-destructive testing services using
                industry-standard techniques for reliable defect detection and
                material characterization
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Badge variant="secondary" className="px-6 py-2 text-lg">
                  <Zap className="mr-2 h-5 w-5" />
                  Standard Methods
                </Badge>
                <Badge variant="secondary" className="px-6 py-2 text-lg">
                  <Search className="mr-2 h-5 w-5" />
                  Defect Detection
                </Badge>
                <Badge variant="secondary" className="px-6 py-2 text-lg">
                  <Shield className="mr-2 h-5 w-5" />
                  Proven Techniques
                </Badge>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <FadeIn>
            <h2 className="mb-12 text-center text-3xl font-bold">
              Our Standard NDT Services
            </h2>
          </FadeIn>

          <StaggerChildren className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <Card
                key={index}
                className="h-full border-l-4 border-green-600 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg"
              >
                <CardHeader>
                  <CardTitle className="text-lg text-green-900">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 text-gray-700">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-600" />
                        <span className="text-sm text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* NDT Techniques */}
      <section className="bg-green-50 py-16">
        <div className="container mx-auto px-4">
          <FadeIn>
            <h2 className="mb-12 text-center text-3xl font-bold">
              Standard NDT Techniques
            </h2>
          </FadeIn>

          <StaggerChildren className="mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-2">
            {techniques.map((technique, index) => (
              <Card
                key={index}
                className="transition-all duration-300 hover:shadow-lg"
              >
                <CardHeader>
                  <CardTitle className="text-xl text-green-900">
                    {technique.name}
                  </CardTitle>
                  <p className="text-gray-600">{technique.description}</p>
                </CardHeader>
                <CardContent>
                  <h4 className="mb-3 font-semibold">Applications:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {technique.applications.map((app, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <span className="text-sm">{app}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* Standards Compliance */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-6xl">
            <FadeIn>
              <h2 className="mb-12 text-center text-3xl font-bold">
                Standards & Compliance
              </h2>
            </FadeIn>

            <FadeIn delay={200}>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
                {standards.map((standard, index) => (
                  <Card
                    key={index}
                    className="p-4 text-center transition-shadow hover:shadow-md"
                  >
                    <div className="flex items-center justify-center gap-2">
                      <Award className="h-5 w-5 text-green-600" />
                      <span className="text-sm font-medium">{standard}</span>
                    </div>
                  </Card>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Industries Served */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <FadeIn>
            <h2 className="mb-12 text-center text-3xl font-bold">
              Industries We Serve
            </h2>
          </FadeIn>

          <FadeIn delay={200}>
            <div className="mx-auto grid max-w-4xl grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-6">
              {industries.map((industry, index) => (
                <Card
                  key={index}
                  className="p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="mb-2 text-3xl">{industry.icon}</div>
                  <h3 className="text-sm font-semibold">{industry.name}</h3>
                </Card>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Equipment & Technology */}
      <section className="bg-green-50 py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <FadeIn>
              <h2 className="mb-12 text-center text-3xl font-bold">
                NDT Equipment & Technology
              </h2>
            </FadeIn>

            <FadeIn delay={200}>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                {equipment.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 rounded-lg bg-white p-4 shadow-sm"
                  >
                    <Search className="h-5 w-5 text-green-600" />
                    <span className="font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-green-900 to-teal-800 py-16 text-white">
        <div className="container mx-auto px-4 text-center">
          <FadeIn>
            <h2 className="mb-6 text-3xl font-bold">
              Need Reliable NDT Services?
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-xl opacity-90">
              Our certified NDT professionals use proven standard techniques to
              ensure the integrity and safety of your critical components and
              structures.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-lg bg-white px-8 py-3 font-semibold text-green-900 transition-colors hover:bg-gray-100"
              >
                <Users className="mr-2 h-5 w-5" />
                Get NDT Services
              </a>
              <a
                href="tel:+20222879691"
                className="inline-flex items-center justify-center rounded-lg border-2 border-white px-8 py-3 font-semibold text-white transition-colors hover:bg-white hover:text-green-900"
              >
                Call: (02) 22-8-79-691
              </a>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
