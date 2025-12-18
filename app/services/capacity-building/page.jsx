import {
  CheckCircle,
  Award,
  Users,
  GraduationCap,
  BookOpen,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function CapacityBuildingPage() {
  const services = [
    {
      title: "Customized Technical Training Courses",
      description:
        "Tailored training programs designed to meet specific industry requirements and skill development needs.",
      features: [
        "Custom curriculum",
        "Industry-specific content",
        "Flexible scheduling",
        "Expert instructors",
      ],
    },
    {
      title: "NDT Certification Programs",
      description:
        "Comprehensive NDT certification training programs following international standards and best practices.",
      features: [
        "ASNT certification",
        "PCN/CSWIP programs",
        "Hands-on training",
        "International recognition",
      ],
    },
    {
      title: "Quality Control Inspection Training",
      description:
        "Professional training in quality control inspection methodologies and industry best practices.",
      features: [
        "QC methodologies",
        "Inspection techniques",
        "Standards compliance",
        "Practical exercises",
      ],
    },
    {
      title: "Welding Technology Courses",
      description:
        "Comprehensive welding technology training covering procedures, inspection, and certification requirements.",
      features: [
        "Welding procedures",
        "Inspection methods",
        "Code requirements",
        "Safety practices",
      ],
    },
    {
      title: "Case Studies & Practical Exercises",
      description:
        "Real-world case studies and hands-on practical exercises to reinforce learning and application.",
      features: [
        "Real case studies",
        "Hands-on practice",
        "Problem solving",
        "Application focused",
      ],
    },
    {
      title: "Professional Requalification Programs",
      description:
        "Periodic requalification training for professionals to maintain certifications and update skills.",
      features: [
        "Certification renewal",
        "Skills update",
        "Compliance maintenance",
        "Continuous development",
      ],
    },
  ];

  const trainingAreas = [
    {
      title: "Non-Destructive Testing (NDT)",
      topics: [
        "Ultrasonic Testing",
        "Magnetic Particle Testing",
        "Penetrant Testing",
        "Visual Inspection",
        "Radiographic Testing",
      ],
    },
    {
      title: "Quality Control & Assurance",
      topics: [
        "QC Procedures",
        "Inspection Methods",
        "Documentation",
        "Standards Compliance",
        "Audit Techniques",
      ],
    },
    {
      title: "Welding Technology",
      topics: [
        "Welding Procedures",
        "Welder Qualification",
        "Weld Inspection",
        "Code Requirements",
        "Safety Practices",
      ],
    },
    {
      title: "Industrial Inspection",
      topics: [
        "Equipment Inspection",
        "Pipeline Inspection",
        "Tank Inspection",
        "Pressure Vessel",
        "Maintenance Planning",
      ],
    },
  ];

  const methodology = [
    {
      phase: "Assessment",
      description: "Evaluate current skill levels and training needs",
      activities: [
        "Skills assessment",
        "Gap analysis",
        "Learning objectives",
        "Custom curriculum",
      ],
    },
    {
      phase: "Training Delivery",
      description: "Execute comprehensive training programs",
      activities: [
        "Expert instruction",
        "Hands-on practice",
        "Interactive sessions",
        "Progress monitoring",
      ],
    },
    {
      phase: "Evaluation",
      description: "Assess learning outcomes and certification",
      activities: [
        "Knowledge testing",
        "Practical assessment",
        "Certification",
        "Follow-up support",
      ],
    },
  ];

  const certifications = [
    "ASNT Level I, II, III Certification",
    "PCN/CSWIP Certification Programs",
    "AWS Certified Welding Inspector",
    "API 510/570/653 Certification",
    "ISO 9712 NDT Personnel Qualification",
    "NACE Coating Inspector Certification",
    "Company-Specific Certifications",
    "Continuous Professional Development",
  ];

  const industries = [
    { name: "Oil & Gas", icon: "🛢️" },
    { name: "Petrochemical", icon: "⚗️" },
    { name: "Power Generation", icon: "⚡" },
    { name: "Manufacturing", icon: "🏭" },
    { name: "Construction", icon: "🏗️" },
    { name: "Marine", icon: "🚢" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-indigo-900 via-indigo-800 to-purple-800 py-20 text-white">
        <div className="absolute inset-0 bg-black/20" />
        <div className="container relative z-10 mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="mb-6 text-4xl font-bold md:text-5xl">
              Capacity Building Training Services
            </h1>
            <p className="mb-8 text-xl opacity-90 md:text-2xl">
              Professional training and capacity building programs to develop
              technical expertise and enhance organizational capabilities in
              quality control and inspection
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge variant="secondary" className="px-6 py-2 text-lg">
                <GraduationCap className="mr-2 h-5 w-5" />
                Professional Training
              </Badge>
              <Badge variant="secondary" className="px-6 py-2 text-lg">
                <BookOpen className="mr-2 h-5 w-5" />
                Capacity Building
              </Badge>
              <Badge variant="secondary" className="px-6 py-2 text-lg">
                <Award className="mr-2 h-5 w-5" />
                Certification Programs
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold">
            Our Training Services
          </h2>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <Card
                key={index}
                className="h-full border-l-4 border-indigo-600 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg"
              >
                <CardHeader>
                  <CardTitle className="text-lg text-indigo-900">
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
          </div>
        </div>
      </section>

      {/* Training Areas */}
      <section className="bg-indigo-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold">
            Training Areas & Specializations
          </h2>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {trainingAreas.map((area, index) => (
              <Card
                key={index}
                className="transition-all duration-300 hover:shadow-lg"
              >
                <CardHeader>
                  <CardTitle className="text-xl text-indigo-900">
                    {area.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 gap-2">
                    {area.topics.map((topic, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-indigo-600" />
                        <span className="text-sm">{topic}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Training Methodology */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold">
            Our Training Methodology
          </h2>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {methodology.map((phase, index) => (
              <Card
                key={index}
                className="text-center transition-all duration-300 hover:shadow-lg"
              >
                <CardHeader>
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-indigo-600 text-2xl font-bold text-white">
                    {index + 1}
                  </div>
                  <CardTitle className="text-xl text-indigo-900">
                    {phase.phase}
                  </CardTitle>
                  <p className="text-gray-600">{phase.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {phase.activities.map((activity, idx) => (
                      <li
                        key={idx}
                        className="flex items-center justify-center gap-2"
                      >
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <span className="text-sm">{activity}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-6xl">
            <h2 className="mb-12 text-center text-3xl font-bold">
              Certification Programs
            </h2>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
              {certifications.map((cert, index) => (
                <Card
                  key={index}
                  className="p-4 text-center transition-shadow hover:shadow-md"
                >
                  <div className="flex items-center justify-center gap-2">
                    <Award className="h-5 w-5 text-indigo-600" />
                    <span className="text-sm font-medium">{cert}</span>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Industries Served */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold">
            Industries We Train
          </h2>

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
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-indigo-900 to-purple-800 py-16 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-6 text-3xl font-bold">
            Ready to Build Your Team&apos;s Capabilities?
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-xl opacity-90">
            Invest in your team&apos;s professional development with our
            comprehensive training programs. Contact us to discuss customized
            training solutions for your organization.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-lg bg-white px-8 py-3 font-semibold text-indigo-900 transition-colors hover:bg-gray-100"
            >
              <Users className="mr-2 h-5 w-5" />
              Discuss Training Needs
            </a>
            <a
              href="tel:+20222879691"
              className="inline-flex items-center justify-center rounded-lg border-2 border-white px-8 py-3 font-semibold text-white transition-colors hover:bg-white hover:text-indigo-900"
            >
              Call: (02) 22-8-79-691
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
