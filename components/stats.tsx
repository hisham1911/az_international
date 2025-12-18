import { Users, Award, Building, Clock } from "lucide-react";
import dynamic from "next/dynamic";
import React from "react";

import { Card, CardContent } from "@/components/ui/card";

// Dynamically import heavy animation components to reduce main-thread blocking
const CountUp = dynamic(
  () =>
    import("@/components/animations/count-up").then((mod) => ({
      default: mod.CountUp,
    })),
  {
    ssr: false, // Count-up animation doesn't need SSR
    loading: () => <span>0</span>, // Show 0 while loading animation
  }
);

import { OptimizedAnimation } from "@/components/ui/optimized-animation";

interface Stat {
  icon: React.ReactElement;
  value: number;
  label: string;
  suffix?: string;
  prefix?: string;
}

export default function Stats() {
  const stats: Stat[] = [
    {
      icon: <Clock className="h-10 w-10 text-blue-600" />,
      value: 12,
      label: "Years of Experience",
      suffix: "+",
    },
    {
      icon: <Building className="h-10 w-10 text-blue-600" />,
      value: 150,
      label: "Projects Completed",
      suffix: "+",
    },
    {
      icon: <Users className="h-10 w-10 text-blue-600" />,
      value: 50,
      label: "Expert Engineers",
      suffix: "+",
    },
    {
      icon: <Award className="h-10 w-10 text-blue-600" />,
      value: 9000,
      label: "Industry Certifications",
      suffix: "+",
    },
  ];

  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <OptimizedAnimation type="fade">
          <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl">
            Our Achievements
          </h2>
        </OptimizedAnimation>

        <OptimizedAnimation
          type="stagger"
          delay={100}
          className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4"
        >
          {stats.map((stat, index) => (
            <Card
              key={index}
              className="border-t-4 border-blue-600 text-center transition-shadow hover:shadow-md"
            >
              <CardContent className="pt-6">
                <div className="mb-4 inline-flex h-20 w-20 items-center justify-center rounded-full bg-blue-100">
                  {stat.icon}
                </div>
                <h3 className="mb-2 text-4xl font-bold text-gray-800">
                  <CountUp
                    end={stat.value}
                    prefix={stat.prefix || ""}
                    suffix={stat.suffix || ""}
                  />
                </h3>
                <p className="text-gray-600">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </OptimizedAnimation>
      </div>
    </section>
  );
}
