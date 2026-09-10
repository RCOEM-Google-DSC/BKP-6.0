import Image from "next/image";
import GanpatiIllustration from "./GanpatiIllustration";
import svgPaths from "@/lib/svg-paths";

export default function HeroSection() {
  return (
    <section className="min-h-[640px] relative w-full">
      {/* Paisley motif background */}
      <Image
        src="/paisley-motif.png"
        alt=""
        width={799}
        height={986}
        aria-hidden="true"
        className="absolute left-0 top-0 h-[760px] w-auto select-none pointer-events-none z-0"
        priority
      />

      <div className="flex items-center justify-center min-h-[inherit] overflow-clip w-full">
        <div className="flex items-center justify-center min-h-[inherit] px-16 py-30 relative w-full">
          <div className="flex items-center justify-center max-w-[1280px] w-full mx-auto">
            {/* Two-column layout */}
            <div className="flex items-center justify-between w-full gap-8">
              {/* Left: Text content */}
              <div className="flex flex-col gap-6 max-w-[480px] relative z-10">
                {/* Volume badge */}
                <div className="flex gap-2 items-center">
                  <div className="bg-[#ff4d00] h-px w-8 shrink-0" />
                  <span className="font-['Hanken_Grotesk',sans-serif] font-normal text-[#ff4d00] text-base tracking-[1.6px] uppercase leading-6">
                    VOLUME 6.0
                  </span>
                </div>

                {/* Title */}
                <h1 className="font-['Playfair_Display',sans-serif] font-normal text-[#ff4d00] text-base tracking-[-0.8px] uppercase leading-[14.4px]">
                  <span className="block mb-0">BAPPA</span>
                  <span className="block mb-0">KA</span>
                  <span className="block">PRASHAD</span>
                </h1>

                {/* Description */}
                <p className="font-['Hanken_Grotesk',sans-serif] font-normal text-[#5c4037] text-base leading-6">
                  The annual competitive programming contest hosted on
                  CodeChef by GDG on Campus, Ramdeobaba University. A
                  rigorous celebration of logic, community, and devotion. Join us
                  for our most expansive edition yet.
                </p>

                {/* CTA Buttons */}
                <div className="flex gap-4 items-start pt-4">
                  <button className="bg-[#ff4d00] flex items-center justify-center px-8 py-[19px] rounded-[4px] relative cursor-pointer hover:brightness-110 transition-all">
                    <div className="absolute inset-0 rounded-[4px] shadow-[0px_10px_15px_-3px_rgba(255,77,0,0.2),0px_4px_6px_-4px_rgba(255,77,0,0.2)]" />
                    <span className="font-['Hanken_Grotesk',sans-serif] font-bold text-white text-xs tracking-[1.2px] leading-4 relative z-10">
                      PARTICIPATE NOW
                    </span>
                  </button>

                  <button className="flex gap-2 items-center px-[33px] py-[17px] rounded-[4px] relative border border-[#ff4d00] cursor-pointer hover:bg-[#ff4d00]/5 transition-all">
                    <span className="font-['Hanken_Grotesk',sans-serif] font-bold text-[#ff4d00] text-xs tracking-[1.2px] leading-4">
                      EXPLORE EVENT
                    </span>
                    <svg width="9.333" height="9.333" viewBox="0 0 9.33333 9.33333" fill="none">
                      <path d={svgPaths.pce77c00} fill="#FF4D00" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Right: Ganpati illustration */}
              <GanpatiIllustration />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
