import svgPaths from "@/lib/svg-paths";

interface PrizeData {
  rank: string;
  rankColor: string;
  title: string;
  titleSize: string;
  subtitle: string;
  rewardTitle: string;
  rewardTitleColor: string;
  rewardDescription: string;
  isFirst?: boolean;
}

const prizes: PrizeData[] = [
  {
    rank: "01",
    rankColor: "text-[rgba(255,77,0,0.4)]",
    title: "First Prize",
    titleSize: "text-base",
    subtitle: "THE GRAND OFFERING",
    rewardTitle: "Premium Tech Bundle",
    rewardTitleColor: "text-[#ff4d00]",
    rewardDescription: "Exclusive Mechanical Keyboard, High-Fidelity Headphones, & Gold Tier Certificate",
    isFirst: true,
  },
  {
    rank: "02",
    rankColor: "text-[rgba(115,92,0,0.4)]",
    title: "Second Prize",
    titleSize: "text-2xl",
    subtitle: "",
    rewardTitle: "Developer Essentials",
    rewardTitleColor: "text-[#1b1c1a]",
    rewardDescription: "Pro Mechanical Keyboard & Silver Tier Certificate",
  },
  {
    rank: "03",
    rankColor: "text-[rgba(92,64,55,0.4)]",
    title: "Third Prize",
    titleSize: "text-2xl",
    subtitle: "",
    rewardTitle: "Tech Swag Bag",
    rewardTitleColor: "text-[#1b1c1a]",
    rewardDescription: "Exclusive 6.0 Merchandise & Bronze Tier Certificate",
  },
];

function PrizeCard({ prize }: { prize: PrizeData }) {
  return (
    <div className={`bg-[#fbf9f5] relative rounded-lg w-full ${prize.isFirst ? "" : ""}`}>
      {prize.isFirst ? (
        <div className="absolute inset-0 border border-[rgba(255,77,0,0.2)] rounded-lg pointer-events-none" />
      ) : (
        <div className="absolute inset-0 border border-[rgba(115,92,0,0.1)] rounded-lg pointer-events-none" />
      )}

      {/* Decorative corner for first prize */}
      {prize.isFirst && (
        <div className="absolute h-[107px] right-[-15px] top-[-15px] w-[50px]">
          <svg className="absolute inset-0 size-full" fill="none" viewBox="0 0 50 107">
            <g opacity="0.05">
              <path d={svgPaths.p3b1b6298} fill="#FF4D00" />
            </g>
          </svg>
        </div>
      )}

      <div className="flex items-center justify-between px-[33px] py-[41px] overflow-clip rounded-lg">
        {/* Left: rank + title */}
        <div className="flex gap-8 items-center">
          <span className={`font-['Playfair_Display',sans-serif] font-normal ${prize.rankColor} text-base leading-6`}>
            {prize.rank}
          </span>
          <div className="flex flex-col gap-1">
            <h3 className={`font-['Playfair_Display',sans-serif] font-normal text-[#1b1c1a] ${prize.titleSize} leading-6`}>
              {prize.title}
            </h3>
            {prize.subtitle && (
              <span className="font-['Hanken_Grotesk',sans-serif] font-normal text-[#ff4d00] text-base tracking-[0.8px] uppercase leading-6">
                {prize.subtitle}
              </span>
            )}
          </div>
        </div>

        {/* Right: reward */}
        <div className="max-w-[320px] flex flex-col gap-[3.5px] items-end">
          <span className={`font-['Hanken_Grotesk',sans-serif] font-bold ${prize.rewardTitleColor} text-base text-right leading-6`}>
            {prize.rewardTitle}
          </span>
          <p className="font-['Hanken_Grotesk',sans-serif] font-normal text-[#5c4037] text-base text-right leading-6">
            {prize.rewardDescription}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function Prizes() {
  return (
    <section className="bg-[rgba(245,243,239,0.3)] relative w-full">
      <div className="absolute inset-0 border-t border-b border-[rgba(255,77,0,0.1)] pointer-events-none" />

      <div className="flex flex-col items-start px-16 py-[121px] relative">
        <div className="max-w-[1280px] w-full">
          <div className="flex flex-col gap-16 items-center max-w-[inherit]">
            {/* Section header */}
            <div className="flex flex-col gap-2 items-center w-full">
              <span className="font-['Hanken_Grotesk',sans-serif] font-bold text-[#ff4d00] text-xs text-center tracking-[1.2px] uppercase leading-4">
                THE REWARD
              </span>
              <h2 className="font-['Playfair_Display',sans-serif] font-normal text-[#ff4d00] text-base text-center uppercase leading-6">
                THE PRASHAD 6.0
              </h2>
              <div className="flex flex-col items-center pb-1 pt-4 w-full relative">
                <svg width="10.5" height="10.5" viewBox="0 0 10.5 10.5" fill="none" className="shrink-0">
                  <path d={svgPaths.p3efdf480} fill="#FF4D00" />
                </svg>
                <div className="absolute -translate-y-1/2 bg-gradient-to-r from-transparent via-[rgba(255,77,0,0.5)] to-transparent h-px left-0 right-[60%] top-[calc(50%+8.25px)]" />
                <div className="absolute -translate-y-1/2 bg-gradient-to-r from-transparent via-[rgba(255,77,0,0.5)] to-transparent h-px left-[60%] right-0 top-[calc(50%+8.25px)]" />
              </div>
              {/* Sub description */}
              <div className="max-w-[672px] pt-4">
                <p className="font-['Hanken_Grotesk',sans-serif] font-normal text-[#5c4037] text-base text-center leading-6">
                  Exceptional solutions deserve exceptional recognition. This year, the Prashad has been
                  elevated to match the caliber of our participants, featuring premium hardware, exclusive
                  opportunities, and coveted credentials.
                </p>
              </div>
            </div>

            {/* Prize cards */}
            <div className="flex flex-col gap-4 items-start max-w-[896px] w-[896px]">
              {prizes.map((prize, i) => (
                <PrizeCard key={i} prize={prize} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
