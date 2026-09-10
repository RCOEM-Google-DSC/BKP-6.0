export default function Collaborators() {
  return (
    <section className="bg-[rgba(245,243,239,0.3)] relative w-full">
      <div className="flex flex-col items-start px-16 py-30 relative">
        <div className="flex flex-col gap-12 items-start max-w-[1280px] w-full">
          {/* Label */}
          <span className="font-['Hanken_Grotesk',sans-serif] font-bold text-[#ff4d00] text-xs text-center tracking-[1.2px] uppercase leading-4 w-full">
            SUPPORTED BY
          </span>

          {/* Collaborator names */}
          <div className="flex gap-24 items-center justify-center opacity-70 w-full relative">
            <div className="absolute inset-0 bg-white mix-blend-saturation pointer-events-none" />

            {/* GDG on Campus */}
            <div className="flex h-16 items-center justify-center px-8 relative">
              <span className="font-['Playfair_Display',sans-serif] font-normal text-[#1b1c1a] text-base text-center leading-6">
                GDG on Campus
              </span>
              <div className="absolute bg-gradient-to-b from-transparent via-[rgba(255,77,0,0.5)] to-transparent left-0 top-0 bottom-0 w-px" />
              <div className="absolute bg-gradient-to-b from-transparent via-[rgba(255,77,0,0.5)] to-transparent right-0 top-0 bottom-0 w-px" />
            </div>

            {/* RCOEM */}
            <div className="flex h-16 items-center justify-center px-8 relative">
              <span className="font-['Playfair_Display',sans-serif] font-normal text-[#1b1c1a] text-base text-center leading-6">
                RCOEM
              </span>
              <div className="absolute bg-gradient-to-b from-transparent via-[rgba(255,77,0,0.5)] to-transparent right-0 top-0 bottom-0 w-px" />
            </div>

            {/* Sponsors */}
            <div className="flex h-16 items-center justify-center px-8">
              <span className="font-['Playfair_Display',sans-serif] font-normal text-[#1b1c1a] text-base text-center leading-6">
                Sponsors
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
