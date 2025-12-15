import { Suspense } from "react";

// Below-the-fold components wrapped in client boundary for dynamic loading
import BelowFoldContent from "@/app/components/below-fold-content";
// Critical above-the-fold components loaded immediately as Server Components
import Hero from "@/components/hero";
import Services from "@/components/services";

export default function Home() {
  return (
    <div>
      {/* Above-the-fold content rendered on server for optimal performance */}
      <Hero />
      <Services />

      {/* Below-the-fold content with client-side optimizations */}
      <Suspense fallback={<div className="min-h-[200px]" />}>
        <BelowFoldContent />
      </Suspense>
    </div>
  );
}
