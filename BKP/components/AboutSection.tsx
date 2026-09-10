export default function AboutSection() {
  return (
    <section className="relative w-full">
      <div className="flex flex-col items-center px-16 py-30 relative">
        {/* Background watermark text */}
        <div className="absolute inset-0 flex items-center justify-center opacity-10 overflow-clip">
          <span className="font-['Hanken_Grotesk',sans-serif] font-normal text-[#1b1c1a] text-base scale-150 whitespace-nowrap">
            बप्पा का प्रसाद
          </span>
        </div>

        {/* Content grid */}
        <div className="grid grid-cols-12 gap-8 max-w-[1280px] w-full mx-auto" style={{ gridTemplateRows: "auto" }}>
          {/* Left heading (col 1-4) */}
          <div className="col-[1/span_4] row-[1] self-start relative">
            <div className="absolute inset-0 border-l border-[rgba(255,77,0,0.4)] pointer-events-none" />
            <div className="pl-[33px]">
              <div className="font-['Playfair_Display',sans-serif] font-normal text-[#ff4d00] uppercase">
                <div className="text-base leading-5 flex flex-col gap-[0.5px]">
                  <span>A FESTIVAL</span>
                  <span>OF CODE</span>
                </div>
                <div className="text-2xl leading-8 mt-[0.5px]">
                  <span>VOLUME VI</span>
                </div>
              </div>
            </div>
            {/* Decorative dots */}
            <div className="absolute left-[-4px] top-0 size-2 bg-[#ff4d00] rounded-full" />
            <div className="absolute left-[-4px] bottom-[-0.5px] size-2 bg-[#ff4d00] rounded-full" />
          </div>

          {/* Right content (col 5-12) */}
          <div className="col-[5/span_8] row-[1] flex flex-col gap-8 items-start self-start">
            {/* Main paragraph */}
            <p className="font-['Hanken_Grotesk',sans-serif] font-normal text-[#5c4037] text-base leading-[26px] w-full">
              Now in its sixth monumental iteration, Bappa Ka Prashad continues to merge the spiritual fervor of
              Ganesh Chaturthi with the rigorous pursuit of technological excellence. This is not merely a competitive
              programming contest—it is a digital offering, a collaborative symphony of logic and creativity where the
              brightest minds congregate.
            </p>

            {/* Blockquote */}
            <div className="bg-[rgba(245,243,239,0.3)] rounded-tr-lg rounded-br-lg w-full relative">
              <div className="absolute inset-0 border-l-2 border-[#ff4d00] rounded-tr-lg rounded-br-lg pointer-events-none" />
              <div className="pl-[26px] pr-4 py-4">
                <p className="font-['Hanken_Grotesk',sans-serif] font-normal italic text-[#1b1c1a] text-base leading-6">
                  &quot;Solve intricate algorithmic puzzles, optimize complex systems, and claim your &apos;Prashad&apos; through
                  sheer logic and unwavering dedication.&quot;
                </p>
              </div>
            </div>

            {/* Secondary paragraph */}
            <p className="font-['Hanken_Grotesk',sans-serif] font-normal text-[rgba(92,64,55,0.8)] text-base leading-6 w-full">
              Over the past five years, we have seen thousands of lines of code transform into impactful solutions.
              Version 6.0 aims higher, bringing more challenging problem statements, deeper mentorship opportunities,
              and a community spirit that echoes the festive joy of the season.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
