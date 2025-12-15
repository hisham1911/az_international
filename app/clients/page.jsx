"use client";

import { lazy, Suspense } from "react";

import { FadeIn } from "@/components/animations/fade-in";
import { LazyImage } from "@/components/lazy-image";
import { Card, CardContent } from "@/components/ui/card";

// Import the clients data and UI components organized by industry sector
const clientsBySector = {
  "Energy & Power Sector": [
    {
      name: "Siemens Energy",
      logo: "/images/clients/siemens.svg",
      description: "Welding, Vibration analysis",
      additional: "BOGE CONSULTANT - Boge Compressor failure analysis",
    },
    {
      name: "Petromaint",
      logo: "/images/clients/petromaint.png",
      description: "Heat Treatment",
    },
    {
      name: "Power House",
      logo: "/images/clients/powerhouse.png",
      description: "NDT services (RT, UT) of super-heated water boilers",
    },
  ],
  "Oil & Gas Sector": [
    {
      name: "Egyptian Chinese Drilling Co",
      logo: "/images/clients/ecdc.png",
      description: "Third party inspection & technical consulting",
    },
    {
      name: "Sindbad Petroleum Service (SPS)",
      logo: "/images/clients/sps.png",
      description:
        "PMI and other NDT services; Phased arrays and pulse echo A scan of production facilities",
    },
    {
      name: "Maradive",
      logo: "/images/clients/maradive.png",
      description:
        "Long term internship (RT inspection) on offshore facilities",
    },
  ],
  "Steel & Metal Industry": [
    {
      name: "Al Ezz Flat Steel",
      logo: "/images/clients/al-ezz.png",
      description: "NDT services (RT, PT, MT, UT)",
    },
    {
      name: "Elkadesia For Engineering Industries",
      logo: "/images/clients/elkadesia.png",
      description:
        "Research and development of shielded metal arc welding electrodes (E6010, E6013, E7018), Fabrication of raw materials upgrading unit using 904L austenitic stainless steel, Welding, releasing and reporting of fabrication and inspection test plans",
    },
    {
      name: "EIPAl Egyptian International Co. for Aluminum Profiles",
      logo: "/images/clients/eipal.png",
      description: "R&D of aluminum extrusion processes",
    },
  ],
  "Construction & Infrastructure": [
    {
      name: "New Administrative Capital Stadium",
      logo: "/images/clients/nac-stadium.png",
      description: "Third party inspection",
    },
    {
      name: "Orascom",
      logo: "/images/clients/orascom.svg",
      description:
        "Third party inspection review and certification of NDT procedures",
    },
    {
      name: "Arab Contractor",
      logo: "/images/clients/arab-contractor.png",
      description: "NDT services (RT)",
    },
    {
      name: "Arab Swiss Engineering Company",
      logo: "/images/clients/arab-swiss.png",
      description: "NDT services (PT, MT, UT)",
    },
    {
      name: "EAST Engineering And Services Technology",
      logo: "/images/clients/east-engineering.png",
      description:
        "Third party inspection review and certification of NDT procedures",
    },
  ],
  "Manufacturing & Industrial": [
    {
      name: "SILO FOODS",
      logo: "/images/clients/silo-foods.jpg",
      description: "Food industry quality assurance",
    },
    {
      name: "Sinoma-CDI",
      logo: "/images/clients/sinoma-cdi.png",
      description:
        "PMI and other NDT services; Phased arrays and pulse echo A scan of production facilities",
    },
    {
      name: "Boysen Egypt",
      logo: "/images/clients/boysen.svg",
      description: "DT & NDT services",
      specialClass: "scale-[2.5]",
    },
    {
      name: "Maria Organization for Trade & Industry",
      logo: "/images/clients/maria-org.png",
      description:
        "Ultrasonic Tests (UT) on shelter lifting pad eyes (ABO MADY PROJECT)",
    },
    {
      name: "Total Solution",
      logo: "/images/clients/total-solution.png",
      description: "NDT services (RT, PT, MT, UT)",
    },
    {
      name: "TETRALIFT",
      logo: "/images/clients/tetralift.png",
      description: "NDT services (RT, PT, MT, UT)",
    },
    {
      name: "Ecco Associate",
      logo: "/images/clients/ecco-associate.png",
      description: "NDT services (RT, PT, MT, UT)",
    },
    {
      name: "Maire Tecnimont",
      logo: "/images/clients/maire-tecnimont.png",
      description: "PMI and other NDT services of production facilities",
    },
    {
      name: "MFE Middle East",
      logo: "/images/clients/mfe-middle-east.png",
      description: "NDT services (RT, PT, MT, UT)",
    },
    {
      name: "BALDWIN Engineering Co",
      logo: "/images/clients/baldwin-engineering.png",
      description:
        "PMI and other NDT services; Phased arrays and pulse echo A scan of production facilities",
    },
  ],
  "Chemical & Fertilizer Industry": [
    {
      name: "Egypt Fertilizer Factory",
      logo: "/images/clients/egypt-fertilizer.png",
      description: "Third party inspection",
    },
    {
      name: "Abou Zaabal",
      logo: "/images/clients/abou-zaabal.png",
      description:
        "NDT services (RT, PT, MT, UT) on storage tanks of phosphoric acid, tilting pan vacuum filter",
    },
  ],
  "Cement Industry": [
    {
      name: "Elsewedy Cement Company",
      logo: "/images/clients/elsewedy.png",
      description:
        "NDT services (RT, PT, MT, UT) on cement manufacturing equipment; gyratory crushers, apron feeders, storage surge bins",
    },
  ],
  "Consumer Goods": [
    {
      name: "Dabur Egypt Limited",
      logo: "/images/clients/dabur.png",
      description:
        "Evaluation of steel trusses design and extension of new trusses",
    },
  ],
  "Educational Institutions": [
    {
      name: "German University in Cairo (GUC)",
      logo: "/images/clients/guc.png",
      description:
        "Cladding of X-ray unit by lead alloy to comply with radiation protection specifications",
    },
    {
      name: "Port Said Engineers Syndicate",
      logo: "/images/clients/port-said-syndicate.png",
      description:
        "Capacity building courses of NDT methods to syndicate members",
    },
    {
      name: "Student Hostel of Al-Azhar University",
      logo: "/images/clients/al-azhar.png",
      description: "Fabrication of stainless steel ancillaries",
    },
    {
      name: "Mining and Metallurgical Center for Research and Development at Cairo University",
      logo: "/images/clients/cairo-university.png",
      description:
        "Collaborative protocol for failure analysis and corrosion protection advice for oil and gas sector production facilities",
    },
  ],
  "Training & Certification Bodies": [
    {
      name: "Egyptian Welding Academy (EWA)",
      logo: "/images/clients/ewa.png",
      description:
        "Collaborative protocol for capacity building training and NDT services (RT, PT, MT, UT)",
    },
    {
      name: "NSF",
      logo: "/images/clients/nsf.png",
      description:
        "Training of inspectors according to ASNT requirements for Visual inspection tests",
    },
    {
      name: "Lloyds Register",
      logo: "/images/clients/lloyds-register.png",
      description: "Preparation of welding procedures",
    },
    {
      name: "DSD",
      logo: "/images/clients/dsd.png",
      description:
        "Training of inspectors according to ASNT requirements (MT, PT, RT, VT, UT)",
    },
  ],
};

// Create a flat array of all clients for the grid view
const allClients = Object.values(clientsBySector).flat();

// Simple loading component
const SimpleLoading = () => (
  <div className="flex justify-center py-16">
    <div className="h-8 w-8 animate-spin rounded-full border-2 border-blue-600 border-t-transparent" />
  </div>
);

export default function ClientsPage() {
  return (
    <main className="min-h-screen">
      {/* Clients Page Header */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 py-16 text-white md:py-24">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="bg-grid-white/[0.05] absolute inset-0 bg-[size:50px_50px]" />
          <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent" />
        </div>

        {/* Floating Elements */}
        <div className="absolute left-10 top-20 h-20 w-20 animate-pulse rounded-full bg-blue-400/20 blur-xl" />
        <div className="absolute bottom-32 right-16 h-32 w-32 animate-pulse rounded-full bg-indigo-400/20 blur-xl delay-1000" />
        <div className="absolute left-1/4 top-1/2 h-16 w-16 animate-bounce rounded-full bg-white/10 blur-lg delay-500" />

        <div className="container relative z-10 mx-auto px-4">
          <FadeIn className="text-center">
            <div className="mb-6 inline-flex items-center rounded-full border border-blue-400/30 bg-blue-700/30 px-4 py-2">
              <span className="text-sm font-medium text-blue-200">
                🌍 Global Partnerships
              </span>
            </div>
            <h1 className="mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-4xl font-bold text-transparent md:text-6xl">
              Our International Clients
            </h1>
            <p className="mx-auto mb-8 max-w-4xl text-lg leading-relaxed text-blue-100 md:text-xl">
              We&apos;ve built lasting partnerships with leading organizations
              across{" "}
              <span className="font-semibold text-white">
                8+ industry sectors
              </span>
              , providing them with world-class engineering, inspection, and
              technical consulting services.
            </p>

            {/* Enhanced Industry Tags */}
            <div className="mb-8 flex flex-wrap justify-center gap-3">
              {[
                { name: "Energy & Power", icon: "⚡" },
                { name: "Oil & Gas", icon: "🛢️" },
                { name: "Steel & Metal", icon: "🔩" },
                { name: "Construction", icon: "🏗️" },
                { name: "Manufacturing", icon: "⚙️" },
                { name: "Chemical", icon: "🧪" },
                { name: "Education", icon: "🎓" },
                { name: "Training", icon: "📚" },
              ].map((sector, index) => (
                <FadeIn key={sector.name} delay={100 + index * 50}>
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium backdrop-blur-sm transition-all duration-300 hover:border-white/40 hover:bg-white/20">
                    <span className="text-lg">{sector.icon}</span>
                    {sector.name}
                  </span>
                </FadeIn>
              ))}
            </div>

            {/* Stats Preview */}
            <FadeIn delay={400}>
              <div className="mx-auto grid max-w-2xl grid-cols-2 gap-6 md:grid-cols-4">
                <div className="text-center">
                  <div className="mb-1 text-2xl font-bold text-white md:text-3xl">
                    {Object.keys(clientsBySector).length}+
                  </div>
                  <div className="text-sm text-blue-200">Industries</div>
                </div>
                <div className="text-center">
                  <div className="mb-1 text-2xl font-bold text-white md:text-3xl">
                    {allClients.length}+
                  </div>
                  <div className="text-sm text-blue-200">Clients</div>
                </div>
                <div className="text-center">
                  <div className="mb-1 text-2xl font-bold text-white md:text-3xl">
                    15+
                  </div>
                  <div className="text-sm text-blue-200">Years</div>
                </div>
                <div className="text-center">
                  <div className="mb-1 text-2xl font-bold text-white md:text-3xl">
                    100%
                  </div>
                  <div className="text-sm text-blue-200">Quality</div>
                </div>
              </div>
            </FadeIn>
          </FadeIn>
        </div>
      </section>

      {/* Clients by Sector Section */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <FadeIn className="mb-12 text-center md:mb-16">
            <div className="mb-4 inline-flex items-center rounded-full bg-blue-100 px-4 py-2">
              <span className="text-sm font-medium text-blue-800">
                🤝 Trusted Partnerships
              </span>
            </div>
            <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
              Industry Leaders <span className="text-blue-600">Trust Us</span>
            </h2>
            <p className="mx-auto max-w-3xl text-lg text-gray-600">
              Our work spans across multiple industries, providing specialized
              engineering and inspection services to leading organizations
              worldwide.
            </p>
          </FadeIn>

          {Object.entries(clientsBySector).map(
            ([sector, clients], sectorIndex) => {
              const sectorIcons = {
                "Energy & Power Sector": "⚡",
                "Oil & Gas Sector": "🛢️",
                "Steel & Metal Industry": "🔩",
                "Construction & Infrastructure": "🏗️",
                "Manufacturing & Industrial": "⚙️",
                "Chemical & Fertilizer Industry": "🧪",
                "Cement Industry": "🏭",
                "Consumer Goods": "📦",
                "Educational Institutions": "🎓",
                "Training & Certification Bodies": "📚",
              };

              return (
                <FadeIn
                  key={sector}
                  delay={200 + sectorIndex * 100}
                  className="mb-16"
                >
                  <div className="relative">
                    {/* Sector Header with Enhanced Design */}
                    <div className="mb-8 flex items-center justify-center">
                      <div className="h-px flex-1 bg-gradient-to-r from-transparent to-gray-300" />
                      <div className="mx-4 flex items-center gap-3 rounded-full border border-gray-200 bg-white px-6 py-3 shadow-lg">
                        <span className="text-2xl">
                          {sectorIcons[sector] || "🏢"}
                        </span>
                        <h3 className="text-xl font-bold text-gray-900 md:text-2xl">
                          {sector}
                        </h3>
                        <div className="rounded-full bg-blue-100 px-2 py-1 text-xs font-semibold text-blue-800">
                          {clients.length}{" "}
                          {clients.length === 1 ? "client" : "clients"}
                        </div>
                      </div>
                      <div className="h-px flex-1 bg-gradient-to-l from-transparent to-gray-300" />
                    </div>

                    {/* Enhanced Client Cards Grid */}
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
                      {clients.map((client, index) => (
                        <FadeIn key={index} delay={300 + index * 50}>
                          <Card className="group relative h-[400px] overflow-hidden border-0 bg-white shadow-lg transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl md:h-[450px]">
                            {/* Gradient Border Effect */}
                            <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 p-[1px] opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                              <div className="h-full w-full rounded-lg bg-white" />
                            </div>

                            <CardContent className="relative z-10 flex h-full flex-col items-center justify-between p-6 md:p-8">
                              {/* Logo Container with Enhanced Styling */}
                              <div className="relative mb-4 flex flex-shrink-0 justify-center transition-transform duration-300 group-hover:scale-105">
                                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-100 to-indigo-100 opacity-0 blur-lg transition-opacity duration-300 group-hover:opacity-60" />
                                <div className="relative flex h-20 w-full max-w-[180px] items-center justify-center rounded-xl border border-gray-100 bg-gray-50 p-3 md:h-24">
                                  <LazyImage
                                    src={client.logo}
                                    alt={`${client.name} logo`}
                                    width={180}
                                    height={96}
                                    className={`h-full w-full object-contain grayscale filter transition-all duration-500 group-hover:grayscale-0 ${
                                      client.specialClass || ""
                                    }`}
                                    fallback="/placeholder.svg"
                                  />
                                </div>
                              </div>

                              {/* Client Name with Better Typography */}
                              <h4 className="mb-3 flex min-h-[3rem] flex-shrink-0 items-center justify-center text-center text-lg font-bold leading-tight text-gray-900 transition-colors duration-300 group-hover:text-blue-600">
                                {client.name}
                              </h4>

                              {/* Services Description with Enhanced Styling */}
                              <div className="flex flex-1 flex-col justify-center space-y-3 text-center">
                                <div className="flex flex-1 flex-col justify-center rounded-lg border border-gray-100 bg-gray-50 p-3">
                                  <div className="mb-2 flex items-center justify-center gap-2">
                                    <div className="h-2 w-2 rounded-full bg-blue-500" />
                                    <span className="text-xs font-semibold uppercase tracking-wide text-blue-800">
                                      Services
                                    </span>
                                    <div className="h-2 w-2 rounded-full bg-blue-500" />
                                  </div>
                                  <p className="line-clamp-4 text-sm leading-relaxed text-gray-700">
                                    {client.description}
                                  </p>
                                </div>

                                {client.additional && (
                                  <div className="rounded-lg border border-blue-100 bg-blue-50 p-2">
                                    <p className="line-clamp-2 text-xs font-medium italic text-blue-700">
                                      💡 {client.additional}
                                    </p>
                                  </div>
                                )}
                              </div>

                              {/* Partnership Badge */}
                              <div className="mt-3 w-full flex-shrink-0 border-t border-gray-100 pt-3">
                                <div className="flex items-center justify-center gap-2 text-xs text-gray-500">
                                  <span className="h-2 w-2 animate-pulse rounded-full bg-green-400" />
                                  <span>Active Partnership</span>
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                        </FadeIn>
                      ))}
                    </div>
                  </div>
                </FadeIn>
              );
            }
          )}

          {/* Enhanced Industry Overview Stats */}
          <FadeIn delay={800} className="mt-20">
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 p-8 shadow-2xl md:p-12">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="bg-grid-white/[0.05] absolute inset-0 bg-[size:30px_30px]" />
              </div>

              {/* Floating Elements */}
              <div className="absolute right-4 top-4 h-20 w-20 animate-pulse rounded-full bg-white/10 blur-xl" />
              <div className="absolute bottom-4 left-4 h-16 w-16 animate-bounce rounded-full bg-blue-400/20 blur-lg delay-1000" />

              <div className="relative z-10">
                <div className="mb-10 text-center">
                  <h3 className="mb-3 text-2xl font-bold text-white md:text-3xl">
                    Our Global Impact 🌍
                  </h3>
                  <p className="text-lg text-blue-200">
                    Delivering excellence across industries worldwide
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-8">
                  {[
                    {
                      value: `${Object.keys(clientsBySector).length}+`,
                      label: "Industry Sectors",
                      icon: "🏭",
                      description: "Diverse expertise",
                    },
                    {
                      value: `${allClients.length}+`,
                      label: "Satisfied Clients",
                      icon: "🤝",
                      description: "Global partnerships",
                    },
                    {
                      value: "15+",
                      label: "Years Experience",
                      icon: "📅",
                      description: "Proven track record",
                    },
                    {
                      value: "100%",
                      label: "Quality Assurance",
                      icon: "✅",
                      description: "Excellence guaranteed",
                    },
                  ].map((stat, index) => (
                    <FadeIn key={index} delay={900 + index * 100}>
                      <div className="group text-center transition-transform duration-300 hover:scale-105">
                        <div className="rounded-xl border border-white/20 bg-white/10 p-6 backdrop-blur-sm transition-colors duration-300 hover:border-white/40">
                          <div className="mb-2 text-3xl">{stat.icon}</div>
                          <div className="mb-2 text-3xl font-bold text-white transition-colors duration-300 group-hover:text-blue-300 md:text-4xl">
                            {stat.value}
                          </div>
                          <div className="mb-1 text-sm font-medium text-blue-200">
                            {stat.label}
                          </div>
                          <div className="text-xs text-blue-300 opacity-80">
                            {stat.description}
                          </div>
                        </div>
                      </div>
                    </FadeIn>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Enhanced Testimonials Section */}
      <section className="bg-gradient-to-b from-white to-gray-50 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <FadeIn className="mb-12 text-center md:mb-16">
            <div className="mb-4 inline-flex items-center rounded-full bg-green-100 px-4 py-2">
              <span className="text-sm font-medium text-green-800">
                💬 Client Testimonials
              </span>
            </div>
            <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
              What Our <span className="text-blue-600">Clients Say</span>
            </h2>
            <p className="mx-auto max-w-3xl text-lg text-gray-600">
              Our clients&apos; satisfaction is our greatest achievement.
              Here&apos;s what industry leaders say about our services.
            </p>
          </FadeIn>

          <FadeIn delay={200}>
            <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {/* Testimonial 1 - Siemens Energy */}
              <Card className="group relative overflow-hidden border-0 bg-white shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
                <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-blue-500 to-indigo-500" />
                <CardContent className="p-8">
                  {/* Quote Icon */}
                  <div className="mb-6 flex items-center justify-between">
                    <svg
                      className="h-8 w-8 text-blue-500"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" />
                    </svg>
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className="h-4 w-4 fill-current"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                        </svg>
                      ))}
                    </div>
                  </div>

                  <blockquote className="mb-6 italic leading-relaxed text-gray-700">
                    &quot;The team at AZ Engineering has provided exceptional
                    inspection services for our critical equipment. Their
                    attention to detail and technical expertise has helped us
                    maintain the highest standards of quality.&quot;
                  </blockquote>

                  <div className="flex items-center">
                    <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-indigo-500">
                      <span className="text-sm font-bold text-white">SE</span>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">
                        Project Manager
                      </p>
                      <p className="text-sm text-gray-600">Siemens Energy</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Testimonial 2 - Orascom */}
              <Card className="group relative overflow-hidden border-0 bg-white shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
                <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-green-500 to-emerald-500" />
                <CardContent className="p-8">
                  <div className="mb-6 flex items-center justify-between">
                    <svg
                      className="h-8 w-8 text-green-500"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" />
                    </svg>
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className="h-4 w-4 fill-current"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                        </svg>
                      ))}
                    </div>
                  </div>

                  <blockquote className="mb-6 italic leading-relaxed text-gray-700">
                    &quot;We&apos;ve been working with AZ Engineering for over
                    three years now, and their third-party inspection services
                    have consistently exceeded our expectations. Their team is
                    responsive, professional, and thorough.&quot;
                  </blockquote>

                  <div className="flex items-center">
                    <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-green-500 to-emerald-500">
                      <span className="text-sm font-bold text-white">OC</span>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">
                        Quality Control Director
                      </p>
                      <p className="text-sm text-gray-600">Orascom</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Testimonial 3 - Al Ezz Flat Steel */}
              <Card className="group relative overflow-hidden border-0 bg-white shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl md:col-span-2 lg:col-span-1">
                <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-purple-500 to-pink-500" />
                <CardContent className="p-8">
                  <div className="mb-6 flex items-center justify-between">
                    <svg
                      className="h-8 w-8 text-purple-500"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" />
                    </svg>
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className="h-4 w-4 fill-current"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                        </svg>
                      ))}
                    </div>
                  </div>

                  <blockquote className="mb-6 italic leading-relaxed text-gray-700">
                    &quot;AZ Engineering&apos;s expertise in NDT services and
                    their comprehensive approach to quality control has been
                    instrumental in our manufacturing operations. Highly
                    recommended for their professionalism.&quot;
                  </blockquote>

                  <div className="flex items-center">
                    <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-purple-500 to-pink-500">
                      <span className="text-sm font-bold text-white">AE</span>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">
                        Operations Manager
                      </p>
                      <p className="text-sm text-gray-600">Al Ezz Flat Steel</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </FadeIn>

          {/* CTA Section */}
          <FadeIn delay={400} className="mt-16 text-center">
            <div className="rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 p-8 text-white md:p-12">
              <h3 className="mb-4 text-2xl font-bold md:text-3xl">
                Ready to Join Our Success Stories?
              </h3>
              <p className="mx-auto mb-8 max-w-2xl text-lg text-blue-100">
                Experience the same level of excellence that has made us the
                trusted partner for industry leaders worldwide.
              </p>
              <div className="flex flex-col justify-center gap-4 sm:flex-row">
                <button className="rounded-full bg-white px-8 py-3 font-semibold text-blue-600 transition-colors duration-300 hover:bg-gray-100">
                  Get Started Today
                </button>
                <button className="rounded-full border-2 border-white px-8 py-3 font-semibold text-white transition-colors duration-300 hover:bg-white hover:text-blue-600">
                  View Our Services
                </button>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
