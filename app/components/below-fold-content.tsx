"use client";

import dynamic from "next/dynamic";

// Dynamic imports with ssr: false are allowed in Client Components
// Below-the-fold components loaded dynamically to reduce main-thread work
const Stats = dynamic(() => import("@/components/stats"), {
  ssr: false, // Stats are below fold, no need for SSR
});

const Engineers = dynamic(() => import("@/components/engineers"), {
  ssr: false, // Engineers section is below fold
});

const Clients = dynamic(() => import("@/components/clients"), {
  ssr: false, // Clients section is below fold
});

// Scroll progress is purely interactive, no SSR needed
const ScrollProgress = dynamic(
  () =>
    import("@/components/animations/scroll-progress").then((mod) => ({
      default: mod.ScrollProgress,
    })),
  { ssr: false }
);

export default function BelowFoldContent() {
  return (
    <>
      <ScrollProgress />
      <Stats />
      <Engineers />
      <Clients />
    </>
  );
}
