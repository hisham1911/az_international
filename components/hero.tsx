import Image from "next/image";

import { WaveAnimation } from "@/components/animations/wave-animation";

export default function Hero() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 text-white">
      <div className="container relative z-10 mx-auto px-4 py-16 md:py-20">
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Left Side - Text Content - No animation for instant display */}
          <div className="order-2 lg:order-1">
            <h1 className="mb-4 bg-gradient-to-r from-blue-300 to-white bg-clip-text text-2xl font-bold text-transparent md:text-3xl lg:text-4xl">
              Engineering Excellence & Technical Expertise
            </h1>
            <p className="mb-6 text-sm leading-relaxed text-gray-300 md:text-base">
              AZ is a third party inspection and capacity building body, aiming
              to increase the capacity building of technicians and engineers
              working in metal construction, oil and gas services. We provide
              NDT and quality inspection services since 2012.
            </p>
          </div>

          {/* Right Side - Image - No animation for instant display */}
          <div className="order-1 lg:order-2">
            <div className="relative h-64 w-full overflow-hidden rounded-2xl shadow-2xl md:h-80 lg:h-96">
              <Image
                src="/images/engineer-industrial.png"
                alt="Engineer at industrial facility"
                fill
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
          </div>
        </div>
      </div>{" "}
      {/* Wave Animation - Positioned at the bottom with proper z-index and height */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 z-[60] h-16 md:h-20 lg:h-24">
        <WaveAnimation className="h-full w-full" data-inverted="true" />
      </div>
    </div>
  );
}
