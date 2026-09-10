import svgPaths from "@/lib/svg-paths";

function SectionHeader({ label, title, iconPath, iconWidth, iconHeight, iconViewBox }: {
  label: string;
  title: string;
  iconPath: string;
  iconWidth: number;
  iconHeight: number;
  iconViewBox: string;
}) {
  return (
    <div className="flex flex-col gap-2 items-center w-full">
      <span className="font-['Hanken_Grotesk',sans-serif] font-bold text-[#ff4d00] text-xs text-center tracking-[1.2px] uppercase leading-4">
        {label}
      </span>
      <h2 className="font-['Playfair_Display',sans-serif] font-normal text-[#ff4d00] text-base text-center uppercase leading-6">
        {title}
      </h2>
      <div className="flex flex-col items-center pb-1 pt-4 w-full relative">
        <svg width={iconWidth} height={iconHeight} viewBox={iconViewBox} fill="none" className="shrink-0">
          <path d={iconPath} fill="#FF4D00" />
        </svg>
        {/* Left fading line */}
        <div className="absolute -translate-y-1/2 bg-gradient-to-r from-transparent via-[rgba(255,77,0,0.5)] to-transparent h-px left-0 right-[60%] top-[calc(50%+8.25px)]" />
        {/* Right fading line */}
        <div className="absolute -translate-y-1/2 bg-gradient-to-r from-transparent via-[rgba(255,77,0,0.5)] to-transparent h-px left-[60%] right-0 top-[calc(50%+8.25px)]" />
      </div>
    </div>
  );
}

function DetailCard({ icon, label, value }: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="bg-[#fbf9f5] flex flex-col gap-4 items-center p-[33px] rounded-lg relative shrink-0 w-[362.66px] drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)]">
      <div className="absolute inset-0 border border-[rgba(115,92,0,0.05)] rounded-lg pointer-events-none" />
      {icon}
      <div className="pt-2">
        <span className="font-['Hanken_Grotesk',sans-serif] font-bold text-[#5c4037] text-xs text-center tracking-[1.2px] uppercase leading-4">
          {label}
        </span>
      </div>
      <span className="font-['Playfair_Display',sans-serif] font-normal text-[#ff4d00] text-base text-center leading-6">
        {value}
      </span>
    </div>
  );
}

export default function EventDetails() {
  return (
    <section className="bg-[rgba(245,243,239,0.5)] relative w-full">
      {/* Top and bottom borders */}
      <div className="absolute inset-0 border-t border-b border-[rgba(255,77,0,0.2)] pointer-events-none" />

      <div className="flex flex-col items-start px-16 py-[121px] relative">
        {/* Decorative corners */}
        <div className="absolute left-4 top-[17px] size-16 border-l-2 border-t-2 border-[rgba(255,77,0,0.3)]" />
        <div className="absolute bottom-[16.5px] right-4 size-16 border-r-2 border-b-2 border-[rgba(255,77,0,0.3)]" />

        <div className="max-w-[1280px] w-full">
          <div className="flex flex-col gap-16 items-start max-w-[inherit]">
            <SectionHeader
              label="THE GATHERING"
              title="EVENT DETAILS"
              iconPath={svgPaths.p1e6e3b00}
              iconWidth={11.667}
              iconHeight={10.5}
              iconViewBox="0 0 11.6667 10.5"
            />

            {/* Cards row */}
            <div className="flex gap-8 items-start justify-center w-full">
              <DetailCard
                icon={
                  <svg width="27" height="30" viewBox="0 0 27 30" fill="none">
                    <path d={svgPaths.p37b94080} fill="#FF4D00" />
                  </svg>
                }
                label="DATE"
                value="28 AUGUST"
              />
              <DetailCard
                icon={
                  <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
                    <path d={svgPaths.p3309e300} fill="#FF4D00" />
                  </svg>
                }
                label="TIME"
                value="10:00 AM IST"
              />
              <DetailCard
                icon={
                  <svg width="24" height="30" viewBox="0 0 24 30" fill="none">
                    <path d={svgPaths.p2e497c80} fill="#FF4D00" />
                  </svg>
                }
                label="VENUE"
                value="Main Auditorium"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
