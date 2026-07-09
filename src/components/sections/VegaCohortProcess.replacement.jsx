import VegaName from "@/components/ui/VegaName";

function DiagnoseIllustration() {
  return (
    <svg aria-hidden="true" viewBox="0 0 280 280" width="100%" height="100%" fill="none">
      <defs>
        <linearGradient id="diagnose-sheet" x1="78" y1="47" x2="182" y2="219" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FFFFFF" />
          <stop offset="1" stopColor="#EEF4FF" />
        </linearGradient>
        <linearGradient id="diagnose-bar-a" x1="176" y1="174" x2="176" y2="235" gradientUnits="userSpaceOnUse">
          <stop stopColor="#ECF3FF" />
          <stop offset="1" stopColor="#C8D9FF" />
        </linearGradient>
        <linearGradient id="diagnose-bar-b" x1="202" y1="160" x2="202" y2="235" gradientUnits="userSpaceOnUse">
          <stop stopColor="#DDEBFF" />
          <stop offset="1" stopColor="#A7C2FF" />
        </linearGradient>
        <linearGradient id="diagnose-bar-c" x1="228" y1="145" x2="228" y2="235" gradientUnits="userSpaceOnUse">
          <stop stopColor="#C7DCFF" />
          <stop offset="1" stopColor="#7BA7FF" />
        </linearGradient>
        <filter id="diagnose-shadow" x="54" y="45" width="194" height="210" filterUnits="userSpaceOnUse">
          <feDropShadow dx="0" dy="18" stdDeviation="14" floodColor="#9CB6EB" floodOpacity="0.28" />
        </filter>
        <filter id="magnifier-shadow" x="130" y="94" width="114" height="108" filterUnits="userSpaceOnUse">
          <feDropShadow dx="0" dy="10" stdDeviation="8" floodColor="#83A4E8" floodOpacity="0.24" />
        </filter>
      </defs>
      <circle cx="128" cy="148" r="102" fill="#EEF4FF" />
      <circle cx="126" cy="152" r="92" fill="url(#diagnose-sheet)" opacity="0.72" />
      <g filter="url(#diagnose-shadow)">
        <rect x="84" y="54" width="100" height="160" rx="16" fill="url(#diagnose-sheet)" stroke="#D6E4FF" strokeWidth="2" />
        <rect x="111" y="42" width="46" height="26" rx="7" fill="#6E97F4" />
        <rect x="121" y="50" width="26" height="7" rx="3.5" fill="#DCE9FF" />
        <rect x="99" y="87" width="18" height="18" rx="5" fill="#F3F7FF" stroke="#C8DAFF" />
        <rect x="99" y="118" width="18" height="18" rx="5" fill="#F3F7FF" stroke="#C8DAFF" />
        <rect x="99" y="149" width="18" height="18" rx="5" fill="#F3F7FF" stroke="#C8DAFF" />
        <path d="M103 96.5l5 5 9-11" stroke="#5C8EF0" strokeWidth="4.2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M103 127.5l5 5 9-11" stroke="#5C8EF0" strokeWidth="4.2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M103 158.5l5 5 9-11" stroke="#C9D8F8" strokeWidth="4.2" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="126" y="91" width="37" height="6" rx="3" fill="#DCE8FF" />
        <rect x="126" y="122" width="37" height="6" rx="3" fill="#DCE8FF" />
        <rect x="126" y="153" width="37" height="6" rx="3" fill="#E2EBFB" />
      </g>
      <g filter="url(#magnifier-shadow)">
        <circle cx="174" cy="131" r="31" fill="#F5F9FF" stroke="#7AA5F8" strokeWidth="6" />
        <circle cx="174" cy="131" r="23" fill="none" stroke="#C7DBFF" strokeWidth="2" />
        <path d="M195 152l27 27" stroke="#4B83EE" strokeWidth="12" strokeLinecap="round" />
      </g>
      <ellipse cx="206" cy="236" rx="46" ry="12" fill="#E9EFFA" />
      <rect x="166" y="175" width="18" height="58" rx="4" fill="url(#diagnose-bar-a)" stroke="#D9E5FF" />
      <rect x="192" y="160" width="18" height="73" rx="4" fill="url(#diagnose-bar-b)" stroke="#C9DDFF" />
      <rect x="218" y="145" width="18" height="88" rx="4" fill="url(#diagnose-bar-c)" stroke="#B7D2FF" />
      <rect x="156" y="231" width="92" height="10" rx="5" fill="#F2F6FD" stroke="#E2EAF7" />
    </svg>
  );
}

function BuildIllustration() {
  return (
    <svg aria-hidden="true" viewBox="0 0 280 280" width="100%" height="100%" fill="none">
      <defs>
        <linearGradient id="build-pale" x1="62" y1="74" x2="170" y2="232" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FFF9FA" />
          <stop offset="1" stopColor="#F7E7EB" />
        </linearGradient>
        <linearGradient id="build-red" x1="157" y1="59" x2="221" y2="182" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FF8898" />
          <stop offset="1" stopColor="#E14A63" />
        </linearGradient>
        <filter id="build-shadow" x="42" y="54" width="196" height="204" filterUnits="userSpaceOnUse">
          <feDropShadow dx="0" dy="18" stdDeviation="16" floodColor="#E7B7C0" floodOpacity="0.34" />
        </filter>
      </defs>
      <circle cx="126" cy="150" r="104" fill="#FFF1F4" />
      <circle cx="129" cy="154" r="92" fill="#FFF7F8" opacity="0.76" />
      <g filter="url(#build-shadow)">
        <path
          d="M155 105c0-11.6 9.4-21 21-21h38c12.15 0 22 9.85 22 22v70c0 12.15-9.85 22-22 22h-36c-12.15 0-22-9.85-22-22v-18c0-5.52-4.48-10-10-10s-10 4.48-10 10v6c0 14.36-11.64 26-26 26h-16c-12.15 0-22-9.85-22-22v-64c0-12.15 9.85-22 22-22h14c14.36 0 26 11.64 26 26v7c0 5.52 4.48 10 10 10s10-4.48 10-10v-12z"
          fill="#FFF8F8"
          stroke="#D8B4BC"
          strokeWidth="2"
        />
        <path d="M166 84h48c11.05 0 20 8.95 20 20v72c0 11.05-8.95 20-20 20h-48v-30c0-8.84-7.16-16-16-16 8.84 0 16-7.16 16-16V84z" fill="url(#build-red)" />
        <path d="M79 84h42c11.05 0 20 8.95 20 20v5c0 8.84 7.16 16 16 16-8.84 0-16 7.16-16 16v33c0 11.05-8.95 20-20 20H79c-11.05 0-20-8.95-20-20v-70c0-11.05 8.95-20 20-20z" fill="url(#build-pale)" opacity="0.92" />
      </g>
      <ellipse cx="142" cy="236" rx="52" ry="11" fill="#F7E7EB" />
    </svg>
  );
}

function ExecuteIllustration() {
  return (
    <svg aria-hidden="true" viewBox="0 0 280 280" width="100%" height="100%" fill="none">
      <defs>
        <linearGradient id="rocket-body" x1="140" y1="50" x2="140" y2="198" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FFFFFF" />
          <stop offset="1" stopColor="#E8EBEF" />
        </linearGradient>
        <linearGradient id="rocket-green" x1="93" y1="142" x2="194" y2="205" gradientUnits="userSpaceOnUse">
          <stop stopColor="#7AD067" />
          <stop offset="1" stopColor="#48A63F" />
        </linearGradient>
        <filter id="rocket-shadow" x="66" y="44" width="146" height="182" filterUnits="userSpaceOnUse">
          <feDropShadow dx="0" dy="18" stdDeviation="14" floodColor="#9AB6A3" floodOpacity="0.3" />
        </filter>
      </defs>
      <circle cx="125" cy="149" r="104" fill="#EEF8ED" />
      <circle cx="128" cy="153" r="93" fill="#F7FBF4" opacity="0.78" />
      <g filter="url(#rocket-shadow)">
        <path
          d="M140 50c29 26 33 71 25 112h-50c-8-41-4-86 25-112z"
          fill="url(#rocket-body)"
          stroke="#D4DADE"
          strokeWidth="2"
        />
        <circle cx="140" cy="106" r="17" fill="#CFEFCD" stroke="#5FB952" strokeWidth="5" />
        <path d="M118 171l-28 35 28-8z" fill="url(#rocket-green)" />
        <path d="M162 171l28 35-28-8z" fill="url(#rocket-green)" />
        <path d="M125 166c7 10 23 10 30 0l-8 32h-14z" fill="#66BD5A" />
      </g>
      <ellipse cx="104" cy="226" rx="22" ry="16" fill="#EEF1F4" />
      <ellipse cx="140" cy="233" rx="28" ry="18" fill="#F0F2F5" />
      <ellipse cx="174" cy="225" rx="20" ry="15" fill="#EEF1F4" />
      <rect x="204" y="172" width="14" height="48" rx="4" fill="#D8F0D3" />
      <rect x="224" y="154" width="14" height="66" rx="4" fill="#B5E0AE" />
      <rect x="244" y="136" width="14" height="84" rx="4" fill="#6FC15C" />
      <circle cx="251" cy="132" r="5" fill="#BFEAB5" />
      <path d="M250 118v8M246 122h8" stroke="#B7E6AE" strokeWidth="2.2" strokeLinecap="round" />
    </svg>
  );
}

function BadgeIcon({ variant }) {
  if (variant === "diagnose") {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24" width="24" height="24" fill="none">
        <rect x="5" y="3.5" width="14" height="17" rx="2.5" fill="#4B87F4" />
        <rect x="8.25" y="2" width="7.5" height="4" rx="1.8" fill="#E9F1FF" />
        <path d="M9 10h6M9 14h6M9 18h4" stroke="#F9FBFF" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M7.7 10.6l.95.95 1.6-1.85M7.7 14.6l.95.95 1.6-1.85" stroke="#F9FBFF" strokeWidth="1.35" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  if (variant === "build") {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24" width="24" height="24" fill="none">
        <path
          d="M9.3 3.2c1.1 0 2 .9 2 2 0 .3-.06.58-.18.84h2.65c.56-1.08 1.69-1.82 2.98-1.82 1.85 0 3.35 1.5 3.35 3.35 0 1.14-.57 2.15-1.43 2.75h.83c1.3 0 2.35 1.05 2.35 2.35v5.86c0 1.3-1.05 2.35-2.35 2.35H5.45c-1.3 0-2.35-1.05-2.35-2.35v-5.86c0-1.3 1.05-2.35 2.35-2.35h.82A3.34 3.34 0 0 1 5.1 7.59c0-1.85 1.5-3.35 3.35-3.35h.85z"
          fill="#E34D65"
        />
      </svg>
    );
  }

  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" width="24" height="24" fill="none">
      <path d="M12 2.4c3.18 2.57 3.84 6.98 2.9 10.38H9.1C8.16 9.38 8.82 4.97 12 2.4z" fill="#58B34A" />
      <path d="M9.15 12.9L5 17.8l4.15-1.12zM14.85 12.9L19 17.8l-4.15-1.12z" fill="#58B34A" />
      <circle cx="12" cy="8.1" r="1.7" fill="#F4FFF2" />
    </svg>
  );
}

const STEPS = [
  {
    step: "01",
    variant: "diagnose",
    accent: "#3F84F6",
    badgeBackground: "linear-gradient(180deg, #FFFFFF 0%, #F5F9FF 100%)",
    halo: "radial-gradient(circle, rgba(81, 138, 251, 0.18) 0%, rgba(81, 138, 251, 0) 72%)",
    illustration: <DiagnoseIllustration />,
    title: "Diagnose. Find the Problem.",
    intro:
      "Every participant begins with three assessments designed to uncover where your business is today and what's preventing it from reaching the next stage.",
    bullets: [
      {
        lead: "7 Stages of Growth Assessment",
        text: "Identify your business's current growth stage and the challenges limiting progress.",
      },
      {
        lead: "TriMetrix® Assessment",
        text: "Understand your leadership style, communication preferences, and core motivators.",
      },
      {
        lead: "EQ Assessment",
        text: "Measure your emotional intelligence and learn how it impacts leadership, decision-making, and relationships.",
      },
    ],
    footer:
      "You'll then review your results with a VEGA advisor and identify the highest-priority opportunities for growth.",
  },
  {
    step: "02",
    variant: "build",
    accent: "#E65067",
    badgeBackground: "linear-gradient(180deg, #FFFFFF 0%, #FFF6F8 100%)",
    halo: "radial-gradient(circle, rgba(235, 102, 128, 0.18) 0%, rgba(235, 102, 128, 0) 72%)",
    illustration: <BuildIllustration />,
    title: "Build. Create the Blueprint.",
    intro:
      "Using your assessment results, you'll work through practical workshops to build a customized growth strategy for your business. Together you'll develop:",
    bullets: [
      { lead: "", text: "Strategic priorities" },
      { lead: "", text: "Leadership alignment" },
      { lead: "", text: "Clear and actionable execution plans" },
      { lead: "", text: "Accountability systems" },
      { lead: "", text: "Operational and revenue growth strategies" },
    ],
    footer: "Every framework is designed around your business—not a generic template.",
  },
  {
    step: "03",
    variant: "execute",
    accent: "#5AB64C",
    badgeBackground: "linear-gradient(180deg, #FFFFFF 0%, #F5FCF3 100%)",
    halo: "radial-gradient(circle, rgba(103, 191, 88, 0.18) 0%, rgba(103, 191, 88, 0) 72%)",
    illustration: <ExecuteIllustration />,
    title: "Execute. Turn Strategy Into Results.",
    intro: "Leave VEGA with everything you need to confidently implement your strategy.",
    bullets: [
      { lead: "", text: "Practical tools and resources" },
      { lead: "", text: "Clear growth roadmap" },
      { lead: "", text: "Implementation plan" },
      { lead: "", text: "Ongoing guidance and accountability" },
      { lead: "", text: "Continued support from Raj throughout the year" },
    ],
    footer: "Turn your plans into results with clarity, confidence, and continuous support.",
  },
];

function StepConnector() {
  return (
    <div className="flex h-10 justify-center">
      <div className="relative w-px bg-[#D9E0EB]">
        <span className="absolute left-1/2 top-1/2 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#D3DBE8] bg-white" />
      </div>
    </div>
  );
}

function StepCard({ step }) {
  return (
    <article className="overflow-hidden rounded-[34px] border border-[rgba(223,229,239,0.95)] bg-[rgba(255,255,255,0.96)] px-6 py-7 shadow-[0_18px_50px_rgba(20,32,58,0.08)] backdrop-blur-[14px] sm:px-8 sm:py-9 lg:px-10 lg:py-10">
      <div className="grid gap-8 lg:grid-cols-[280px_minmax(0,1fr)] lg:gap-10">
        <div className="relative">
          <div
            className="relative z-10 flex h-[74px] w-[74px] items-center justify-center rounded-full border border-white bg-white shadow-[0_14px_34px_rgba(28,43,75,0.1)]"
            style={{ background: step.badgeBackground }}
          >
            <BadgeIcon variant={step.variant} />
          </div>
          <div className="relative ml-1 pt-5">
            <div
              aria-hidden="true"
              className="absolute left-[22px] top-[36px] h-[238px] w-[238px] rounded-full"
              style={{ background: step.halo }}
            />
            <div className="relative mx-auto max-w-[260px]">{step.illustration}</div>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-[72px_1px_minmax(0,1fr)] lg:gap-6">
          <div className="flex items-end gap-4 lg:flex-col lg:items-start lg:gap-1">
            <span className="text-[14px] font-semibold tracking-[-0.02em] text-[#8D96A8]">Step</span>
            <span
              className="text-[clamp(3rem,4vw,4rem)] font-extrabold leading-none tracking-[-0.08em]"
              style={{ color: step.accent }}
            >
              {step.step}
            </span>
          </div>

          <div className="hidden w-px bg-[#E2E8F1] lg:block" />

          <div className="min-w-0">
            <h3 className="text-[clamp(2rem,2.7vw,2.45rem)] font-extrabold leading-[1.08] tracking-[-0.045em] text-[#131C2D]">
              {step.title}
            </h3>

            <p className="mt-4 text-[16px] leading-[1.85] text-[#566176] sm:text-[17px]">
              {step.intro}
            </p>

            <ul className="mt-6 space-y-3.5">
              {step.bullets.map((bullet) => (
                <li key={`${step.step}-${bullet.text}`} className="flex items-start gap-3.5 text-[16px] leading-[1.85] text-[#566176] sm:text-[17px]">
                  <span
                    className="mt-[13px] h-[7px] w-[7px] shrink-0 rounded-full"
                    style={{ backgroundColor: step.accent }}
                  />
                  <span>
                    {bullet.lead ? <span className="font-bold text-[#273246]">{bullet.lead}</span> : null}
                    {bullet.lead ? " - " : ""}
                    {bullet.text}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-6 border-t border-[#E5EAF1] pt-5">
              <p className="text-[16px] leading-[1.85] text-[#566176] sm:text-[17px]">{step.footer}</p>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

export function VegaCohortProcess() {
  return (
    <section
      id="how-it-works"
      className="w-full px-4 py-20 sm:py-24"
      style={{ fontFamily: 'var(--font-jakarta), "Manrope", system-ui, sans-serif' }}
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 text-center sm:mb-16">
          <span className="section-eyebrow section-eyebrow--large mx-auto">Process</span>
          <h2 className="mx-auto mt-5 max-w-[980px] text-[clamp(2.75rem,5vw,4.55rem)] font-extrabold leading-[1.02] tracking-[-0.05em] text-[#10192A]">
            How the <VegaName className="text-[#10192A]" />{" "}
            <span className="bg-[linear-gradient(96deg,#37131D_0%,#742134_52%,#B8484F_100%)] bg-clip-text text-transparent">
              Cohort Works
            </span>
          </h2>
          <p className="mx-auto mt-5 max-w-[880px] text-[16px] leading-[1.9] text-[#5F687B] sm:text-[17px] md:text-[18px]">
            A structured sequence of assessment, coaching, workshops, and implementation support designed to help leaders move from diagnosis to execution.
          </p>
        </div>

        <div className="relative">
          {STEPS.map((step, index) => (
            <div key={step.step}>
              {index > 0 ? <StepConnector /> : null}
              <StepCard step={step} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default VegaCohortProcess;
