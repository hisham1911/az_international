import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { FadeIn } from "@/components/animations/fade-in";
import { LazyImage } from "@/components/lazy-image";
import { useState } from "react";

export default function Clients() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [api, setApi] = useState(null);
  const clients = [
    {
      name: "Siemens Energy",
      logo: "/images/clients/siemens.svg",
      description: "Welding & vibration analysis",
    },
    {
      name: "Orascom",
      logo: "/images/clients/orascom.svg",
      description: "Third-party inspection",
    },
    {
      name: "Sinoma-CDI",
      logo: "/images/clients/sinoma-cdi.png",
      description: "PMI & phased array services",
    },
    {
      name: "Al Ezz Flat Steel",
      logo: "/images/clients/al-ezz.png",
      description: "RT, PT, MT, UT",
    },
    {
      name: "Boysen Egypt",
      logo: "/images/clients/boysen.svg",
      description: "DT & NDT services",
      specialClass: "scale-[2.5]",
    },
    {
      name: "Egyptian Chinese Drilling Co",
      logo: "/images/clients/ecdc.png",
      description: "Technical consulting",
    },
    {
      name: "Elsewedy Cement Company",
      logo: "/images/clients/elsewedy.png",
      description: "Inspection of manufacturing equipment",
    },
    {
      name: "German University in Cairo",
      logo: "/images/clients/guc.png",
      description: "Radiation protection cladding",
    },
    {
      name: "SILO FOODS",
      logo: "/images/clients/silo-foods.jpg",
      description: "Food industry quality assurance",
    },
  ];

  const handleDotClick = (index) => {
    if (api) {
      api.scrollTo(index);
      setCurrentSlide(index);
    }
  };

  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <FadeIn className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">Our Clients</h2>
          <p className="mx-auto max-w-3xl text-lg text-gray-600">
            We're proud to work with leading organizations across various
            industries, providing them with reliable engineering and inspection
            services.
          </p>
        </FadeIn>

        <FadeIn delay={200}>
          <div className="relative">
            <Carousel
              className="mx-auto max-w-6xl"
              setApi={(api) => {
                setApi(api);
                api?.on("select", () => {
                  setCurrentSlide(api.selectedScrollSnap());
                });
              }}
              opts={{
                align: "start",
                loop: true,
              }}
            >
              <CarouselContent>
                {clients.map((client, index) => (
                  <CarouselItem
                    key={index}
                    className="md:basis-1/2 lg:basis-1/3"
                  >
                    <Card className="h-full border-none bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                      <CardContent className="flex flex-col items-center justify-center p-6">
                        <div className="relative mb-4 flex h-32 w-56 items-center justify-center">
                          <LazyImage
                            src={client.logo}
                            alt={`${client.name} logo`}
                            width={224}
                            height={128}
                            className={`max-h-full max-w-full object-contain transition-all duration-300 ${
                              client.specialClass || ""
                            }`}
                            fallback="/placeholder.svg"
                          />
                        </div>
                        <h3 className="mb-2 text-lg font-semibold">
                          {client.name}
                        </h3>
                        <p className="text-center text-sm text-gray-600">
                          {client.description}
                        </p>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden md:flex" />
              <CarouselNext className="hidden md:flex" />
            </Carousel>

            {/* Navigation Dots */}
            <div className="mt-6 flex justify-center gap-2">
              {Array.from({ length: 9 }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleDotClick(index)}
                  className={`h-2.5 w-2.5 rounded-full transition-all duration-300 ${
                    currentSlide === index
                      ? "scale-125 bg-blue-600"
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
