import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  CheckCircle,
  Shield,
  Award,
  Users,
  Wrench,
  Factory,
} from "lucide-react";
import { FadeIn } from "@/components/animations/fade-in";
import { StaggerChildren } from "@/components/animations/stagger-children";
import Image from "next/image";

export default function FieldIndustrialPage() {
  const services = [
    {
      title: "Ultrasonic Testing (UT)",
      description:
        "Advanced field ultrasonic testing for in-service inspection of industrial equipment and structures.",
      features: [
        "Portable equipment",
        "Real-time analysis",
        "Thickness monitoring",
        "Crack detection",
      ],
    },
    {
      title: "Magnetic Particle Testing (MT)",
      description:
        "On-site magnetic particle inspection for detecting surface and near-surface defects in ferromagnetic materials.",
      features: [
        "Portable magnetization",
        "Field application",
        "Immediate results",
        "Surface crack detection",
      ],
    },
    {
      title: "Dye Penetrant Testing (PT)",
      description:
        "Field penetrant testing for surface defect detection in various industrial components.",
      features: [
        "Portable systems",
        "Quick detection",
        "Surface defects",
        "Non-destructive method",
      ],
    },
    {
      title: "Visual Inspection (VT)",
      description:
        "Comprehensive visual inspection services for industrial equipment and infrastructure.",
      features: [
        "Remote visual inspection",
        "Borescope techniques",
        "Digital documentation",
        "Real-time reporting",
      ],
    },
    {
      title: "Pipeline Welding Inspection & NDT",
      description:
        "Specialized inspection services for land and marine pipeline welding with complete NDT coverage.",
      features: [
        "Land pipeline inspection",
        "Marine pipeline inspection",
        "Weld quality assessment",
        "Compliance verification",
      ],
    },
    {
      title: "On-Stream Wall Thickness Measurement",
      description:
        "Continuous monitoring and measurement of wall thickness in operating systems without shutdown.",
      features: [
        "Non-intrusive measurement",
        "Real-time monitoring",
        "Corrosion assessment",
        "Predictive maintenance",
      ],
    },
    {
      title: "Pipe Mill Surveillance",
      description:
        "Quality control and NDT services for pipe manufacturing facilities ensuring product compliance.",
      features: [
        "Manufacturing surveillance",
        "Quality control",
        "Product certification",
        "Standards compliance",
      ],
    },
    {
      title: "Refinery Equipment Inspection",
      description:
        "Comprehensive inspection services for refinery equipment including vessels, towers, and heat exchangers.",
      features: [
        "Process equipment",
        "Safety compliance",
        "Integrity assessment",
        "Maintenance planning",
      ],
    },
    {
      title: "Pressure Vessels & Drums Inspection",
      description:
        "Thorough inspection of pressure vessels and drums for safety and operational integrity.",
      features: [
        "Internal inspection",
        "External assessment",
        "Safety evaluation",
        "Code compliance",
      ],
    },
    {
      title: "Piping & Headers Inspection",
      description:
        "Detailed inspection services for piping systems and headers in industrial facilities.",
      features: [
        "System integrity",
        "Joint inspection",
        "Corrosion assessment",
        "Flow optimization",
      ],
    },
    {
      title: "Towers & Reactors Inspection",
      description:
        "Specialized inspection services for process towers and reactor vessels in chemical and petrochemical plants.",
      features: [
        "Internal inspection",
        "Catalyst assessment",
        "Structural integrity",
        "Process optimization",
      ],
    },
    {
      title: "Heat Exchangers Inspection",
      description:
        "Complete inspection services for heat exchangers including tube testing and performance evaluation.",
      features: [
        "Tube inspection",
        "Shell assessment",
        "Performance evaluation",
        "Efficiency optimization",
      ],
    },
    {
      title: "Storage Tank Inspection",
      description:
        "Comprehensive storage tank inspection services including floors, walls, and roofs according to API standards.",
      features: [
        "API 653 compliance",
        "Floor inspection",
        "Wall assessment",
        "Roof evaluation",
      ],
    },
  ];

  const standards = [
    "API 510 - Pressure Vessel Inspection Code",
    "API 570 - Piping Inspection Code",
    "API 653 - Tank Inspection, Repair, Alteration, and Reconstruction",
    "ASME Section V - Nondestructive Examination",
    "ASME Section VIII - Pressure Vessels",
    "AWS D1.1 - Structural Welding Code",
    "NACE Standards for Corrosion Control",
    "ISO 9712 - Non-destructive testing",
  ];

  const industries = [
    { name: "Oil & Gas", icon: "🛢️" },
    { name: "Petrochemical", icon: "⚗️" },
    { name: "Power Generation", icon: "⚡" },
    { name: "Marine & Offshore", icon: "🚢" },
    { name: "Chemical Processing", icon: "🧪" },
    { name: "Manufacturing", icon: "🏭" },
  ];

  const equipment = [
    "Portable Ultrasonic Testing Equipment",
    "Magnetic Particle Testing Units",
    "Penetrant Testing Kits",
    "Advanced Borescopes",
    "Thickness Gauges",
    "Corrosion Mapping Systems",
    "Digital Radiography Equipment",
    "Phased Array UT Systems",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 py-20 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container relative z-10 mx-auto px-4">
          <FadeIn>
            <div className="mx-auto max-w-4xl text-center">
              <h1 className="mb-6 text-4xl font-bold md:text-5xl">
                Field/Industrial Inspection Services
              </h1>
              <p className="mb-8 text-xl opacity-90 md:text-2xl">
                Comprehensive on-site inspection and NDT services for industrial
                facilities, ensuring operational safety and equipment integrity
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Badge variant="secondary" className="px-6 py-2 text-lg">
                  <Factory className="mr-2 h-5 w-5" />
                  Industrial Facilities
                </Badge>
                <Badge variant="secondary" className="px-6 py-2 text-lg">
                  <Wrench className="mr-2 h-5 w-5" />
                  Field Services
                </Badge>
                <Badge variant="secondary" className="px-6 py-2 text-lg">
                  <Shield className="mr-2 h-5 w-5" />
                  Safety Compliance
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
              Our Field Inspection Services
            </h2>
          </FadeIn>

          <StaggerChildren className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <Card
                key={index}
                className="h-full border-l-4 border-blue-600 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg"
              >
                <CardHeader>
                  <CardTitle className="text-lg text-blue-900">
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
                      <Award className="h-5 w-5 text-blue-600" />
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
      <section className="bg-blue-50 py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <FadeIn>
              <h2 className="mb-12 text-center text-3xl font-bold">
                Advanced Equipment & Technology
              </h2>
            </FadeIn>

            <FadeIn delay={200}>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                {equipment.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 rounded-lg bg-white p-4 shadow-sm"
                  >
                    <Wrench className="h-5 w-5 text-blue-600" />
                    <span className="font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 py-16 text-white">
        <div className="container mx-auto px-4 text-center">
          <FadeIn>
            <h2 className="mb-6 text-3xl font-bold">
              Ready to Ensure Your Industrial Equipment Integrity?
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-xl opacity-90">
              Contact our field inspection experts today to discuss your
              specific requirements and schedule comprehensive on-site
              inspection services.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-lg bg-white px-8 py-3 font-semibold text-blue-900 transition-colors hover:bg-gray-100"
              >
                <Users className="mr-2 h-5 w-5" />
                Contact Our Experts
              </a>
              <a
                href="tel:+20222879691"
                className="inline-flex items-center justify-center rounded-lg border-2 border-white px-8 py-3 font-semibold text-white transition-colors hover:bg-white hover:text-blue-900"
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
