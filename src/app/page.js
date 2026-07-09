import dynamic from "next/dynamic";
import Founder from "@/components/sections/Founder";
import GrowthShift from "@/components/sections/GrowthShift";
import Hero from "@/components/sections/Hero";
import PainPoints from "@/components/sections/PainPoints";
import Process from "@/components/sections/Process";
import VegaCohortProcess from "@/components/sections/VegaCohortProcess";
import Results from "@/components/sections/Results";
import WalkAway from "@/components/sections/WalkAway";
import WhatIsVega from "@/components/sections/WhatIsVega";

const PreviousCohorts = dynamic(() => import("@/components/sections/PreviousCohorts"));
const Cohorts = dynamic(() => import("@/components/sections/Cohorts"));
const JoinForm = dynamic(() => import("@/components/sections/JoinForm"));

export default function HomePage() {
  return (
    <main id="top" className="relative overflow-x-clip">
      <Hero />
      <PainPoints />
      <GrowthShift />
      <WhatIsVega />
      {/* <Process /> */}
      <VegaCohortProcess />
      <WalkAway />
      <Founder />
      <Results />
      <div className="cohorts-testimonials-band">
        <PreviousCohorts />
        <Cohorts />
      </div>
      <JoinForm />
    </main>
  );
}
