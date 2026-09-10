import svgPaths from "@/lib/svg-paths";

export default function FinalCTA() {
  return (
    <section className="relative w-full">
      <div className="overflow-clip">
        <div className="flex flex-col items-start px-64 py-30 relative">
          {/* Background watermark */}
          <div className="absolute inset-0 flex items-center justify-center opacity-10">
            <span className="font-['Hanken_Grotesk',sans-serif] font-normal text-[#1b1c1a] text-base text-center whitespace-nowrap">
              बप्पा का प्रसाद
            </span>
          </div>

          {/* Glassmorphic CTA card */}
          <div className="backdrop-blur-[2px] bg-[rgba(251,249,245,0.8)] max-w-[768px] rounded-2xl w-full relative">
            <div className="absolute inset-0 border border-[rgba(255,77,0,0.2)] rounded-2xl pointer-events-none" />

            <div className="flex flex-col items-center max-w-[inherit] w-full">
              <div className="flex flex-col gap-8 items-center p-[49px] relative w-full">
                <div className="absolute inset-0 rounded-2xl bg-transparent shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)]" />

                {/* Lotus icon */}
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" className="relative z-10 shrink-0">
                  <path d={svgPaths.p28125980} fill="#FF4D00" />
                </svg>

                {/* Heading */}
                <h2 className="font-['Playfair_Display',sans-serif] font-normal text-[#ff4d00] text-base text-center uppercase leading-5 relative z-10">
                  COME, TAKE BAPPA&apos;S PRASHAD
                </h2>

                {/* Description */}
                <p className="font-['Hanken_Grotesk',sans-serif] font-medium text-[#5c4037] text-base text-center leading-6 relative z-10">
                  Join Edition 6.0 — The largest gathering of logic and devotion.
                </p>

                {/* CTA Button */}
                <div className="pt-4 relative z-10">
                  <button className="bg-[#ff4d00] flex items-center justify-center px-[49px] py-[21px] rounded-[4px] relative cursor-pointer hover:brightness-110 transition-all">
                    <div className="absolute inset-0 border border-transparent rounded-[4px] pointer-events-none" />
                    <div className="absolute inset-0 bg-transparent rounded-[4px] shadow-[0px_10px_15px_-3px_rgba(255,77,0,0.3),0px_4px_6px_-4px_rgba(255,77,0,0.3)]" />
                    <span className="font-['Hanken_Grotesk',sans-serif] font-bold text-white text-xs text-center tracking-[1.2px] leading-4 relative z-10">
                      PARTICIPATE NOW
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
