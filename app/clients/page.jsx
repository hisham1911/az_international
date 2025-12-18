"use client";

import { LazyImage } from "@/components/lazy-image";
import {
  NoAnimation,
  SimpleAnimation,
} from "@/components/ui/animation-helpers";
import { Card, CardContent } from "@/components/ui/card";
import { OptimizedAnimation } from "@/components/ui/optimized-animation";

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
  ],
};

// Create a flat array of all clients for the grid view
const allClients = Object.values(clientsBySector).flat();

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

        <div className="container relative z-10 mx-auto px-4 text-center">
          <NoAnimation>
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
                <span
                  key={sector.name}
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium backdrop-blur-sm transition-all duration-300 hover:border-white/40 hover:bg-white/20"
                >
                  <span className="text-lg">{sector.icon}</span>
                  {sector.name}
                </span>
              ))}
            </div>

            {/* Stats Preview */}
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
          </NoAnimation>
        </div>
      </section>

      {/* Clients by Sector Section */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <NoAnimation>
            <div className="mb-12 text-center">
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
            </div>
          </NoAnimation>

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
                <OptimizedAnimation
                  key={sector}
                  type="fade"
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
                    <SimpleAnimation delay={50}>
                      {clients.map((client, index) => (
                        <Card
                          key={index}
                          className="group relative h-[400px] overflow-hidden border-0 bg-white shadow-lg transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl md:h-[450px]"
                        >
                          <CardContent className="relative z-10 flex h-full flex-col items-center justify-between p-6 md:p-8">
                            {/* Logo Container */}
                            <div className="relative mb-4 flex flex-shrink-0 justify-center transition-transform duration-300 group-hover:scale-105">
                              <div className="relative flex h-20 w-full max-w-[180px] items-center justify-center rounded-xl border border-gray-100 bg-gray-50 p-3 md:h-24">
                                <LazyImage
                                  src={client.logo}
                                  alt={`${client.name} logo`}
                                  width={180}
                                  height={96}
                                  className="h-full w-full object-contain grayscale filter transition-all duration-500 group-hover:grayscale-0"
                                  fallback="/placeholder.svg"
                                />
                              </div>
                            </div>

                            {/* Client Name */}
                            <h4 className="mb-3 flex min-h-[3rem] flex-shrink-0 items-center justify-center text-center text-lg font-bold leading-tight text-gray-900 transition-colors duration-300 group-hover:text-blue-600">
                              {client.name}
                            </h4>

                            {/* Services Description */}
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
                      ))}
                    </SimpleAnimation>
                  </div>
                </OptimizedAnimation>
              );
            }
          )}

          {/* Enhanced Industry Overview Stats */}
          <NoAnimation>
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 p-8 shadow-2xl md:p-12">
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
                    <div
                      key={index}
                      className="group text-center transition-transform duration-300 hover:scale-105"
                    >
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
                  ))}
                </div>
              </div>
            </div>
          </NoAnimation>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-b from-white to-gray-50 py-16">
        <div className="container mx-auto px-4">
          <NoAnimation>
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
          </NoAnimation>
        </div>
      </section>
    </main>
  );
}
