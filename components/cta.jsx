import Link from "next/link";

import { FadeIn } from "@/components/animations/fade-in";
import { Button } from "@/components/ui/button";

export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-blue-600 py-16 text-white">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-blue-500 opacity-20" />
        <div className="absolute bottom-10 left-10 h-20 w-20 rounded-full bg-blue-400 opacity-10" />
        <div className="absolute bottom-0 right-1/4 h-32 w-32 rounded-full bg-blue-700 opacity-15" />
      </div>

      <div className="container relative z-10 mx-auto px-4 text-center">
        <FadeIn>
          <h2 className="mb-6 text-3xl font-bold md:text-4xl">
            Ready to Work With Us?
          </h2>
        </FadeIn>

        <FadeIn delay={200}>
          <p className="mx-auto mb-8 max-w-3xl text-xl text-blue-100">
            Contact our team today to discuss how AZ INTERNATIONAL can help with
            your engineering inspection, testing, and training needs.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
