import { Card, CardContent } from "@/components/ui/card";
import { Users, Award, Building, Clock } from "lucide-react";
import { CountUp } from "@/components/animations/count-up";
import { FadeIn } from "@/components/animations/fade-in";

export default function Stats() {
  const stats = [
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
        <FadeIn>
          <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl">
            Our Achievements
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <FadeIn key={index} delay={index * 100} direction="up">
              <Card className="border-t-4 border-blue-600 text-center transition-shadow hover:shadow-md">
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
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
