import Image from "next/image";

import { FadeIn } from "@/components/animations/fade-in";

export default function Engineers() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-6xl">
          <FadeIn>
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
                Meet Our Leadership Team
              </h2>
              <p className="mx-auto max-w-2xl text-gray-600">
                Our distinguished engineers and industry experts with extensive
                local and international experience
              </p>
              <div className="mx-auto mt-6 h-1 w-24 bg-blue-600" />
            </div>
          </FadeIn>{" "}
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2 lg:gap-12">
            {/* Prof. Dr. Hussein Abdelaziz Said Profile - Now on the left */}
            <FadeIn delay={200} direction="left">
              <div className="transform overflow-hidden rounded-xl bg-white shadow-lg transition duration-300 hover:scale-105 hover:shadow-xl">
                <div className="relative h-80 w-full">
                  <Image
                    src="/images/Prof.Dr. Hussein abdelaziz Said.jpg"
                    alt="Prof. Dr. Hussein Abdelaziz Said"
                    fill
                    className="bg-gray-50 object-contain"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="p-6">
                  <h3 className="mb-2 text-xl font-bold text-gray-900">
                    Prof. Dr. Hussein Abdelaziz Said
                  </h3>
                  <p className="mb-4 font-semibold text-blue-600">Chairman</p>
                  <div className="space-y-2 text-sm text-gray-700">
                    <p className="flex items-start">
                      <span className="mr-2 text-blue-600">•</span>
                      Professor of Welding and Materials Engineering
                    </p>
                    <p className="flex items-start">
                      <span className="mr-2 text-blue-600">•</span>
                      Established welding plants in Egypt & Saudi Arabia
                    </p>
                    <p className="flex items-start">
                      <span className="mr-2 text-blue-600">•</span>
                      Expert in welding technologies & materials science
                    </p>
                    <p className="flex items-start">
                      <span className="mr-2 text-blue-600">•</span>
                      Leading authority in NDT training
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Dr. Waleed A. Mohrez Profile - Now on the right */}
            <FadeIn delay={300} direction="right">
              <div className="transform overflow-hidden rounded-xl bg-white shadow-lg transition duration-300 hover:scale-105 hover:shadow-xl">
                <div className="relative h-80 w-full">
                  <Image
                    src="/images/Dr. Eng. Waleed A. Mohrez.jpg"
                    alt="Dr. Eng. Waleed A. Mohrez"
                    fill
                    className="bg-gray-50 object-contain"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="p-6">
                  {" "}
                  <h3 className="mb-2 text-xl font-bold text-gray-900">
                    Professor/ Dr. Eng. Waleed Mohrez
                  </h3>
                  <p className="mb-4 font-semibold text-blue-600">
                    Chief Executive Officer (CEO)
                  </p>
                  <div className="space-y-2 text-sm text-gray-700">
                    <p className="flex items-start">
                      <span className="mr-2 text-blue-600">•</span>
                      Doctorate Degree In mechanical and material design
                    </p>
                    <p className="flex items-start">
                      <span className="mr-2 text-blue-600">•</span>
                      More than 22 years experience in industrial sector of both
                      process and construction field
                    </p>
                    <p className="flex items-start">
                      <span className="mr-2 text-blue-600">•</span>
                      20+ years of Construction Quality Management
                    </p>
                    <p className="flex items-start">
                      <span className="mr-2 text-blue-600">•</span>
                      Lloyd&apos;s Register Individual Consultant
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
