import svgPaths from "@/lib/svg-paths";

interface MilestoneData {
  day: string;
  month: string;
  title: string;
  description: string;
  side: "left" | "right";
  isHighlighted?: boolean;
}

const milestones: MilestoneData[] = [
  {
    day: "15",
    month: "AUG",
    title: "Registrations Open",
    description: "Secure your spot in the most anticipated coding event of the year.",
    side: "left",
  },
  {
    day: "25",
    month: "AUG",
    title: "Pre-Event Workshop",
    description: "Brush up your skills with industry experts before the main event begins.",
    side: "right",
  },
  {
    day: "28",
    month: "AUG",
    title: "Hackathon Starts",
    description: "The problem statements are revealed. 24 hours of uninterrupted coding commence.",
    side: "left",
    isHighlighted: true,
  },
  {
    day: "29",
    month: "AUG",
    title: "Grand Finale",
    description: "Presentations, judging, and the final distribution of the Prashad.",
    side: "right",
  },
];

function DateBadge({ day, month, isHighlighted }: { day: string; month: string; isHighlighted?: boolean }) {
  if (isHighlighted) {
    return (
      <div className="absolute -translate-x-1/2 left-1/2 top-[9.2px]">
        <div className="scale-110">
          <div className="bg-[#ff4d00] flex gap-[0.364px] items-center justify-center p-[2px] rounded-full size-14 relative">
            <div className="absolute inset-0 border-2 border-[#fbf9f5] rounded-full pointer-events-none" />
            <div className="absolute -translate-x-1/2 left-[calc(50%+2.8px)] bg-transparent rounded-full shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] size-[61.6px] top-0" />
            <span className="font-['JetBrains_Mono',sans-serif] font-medium text-white text-base leading-6 relative z-10">{day}</span>
            <span className="font-['Hanken_Grotesk',sans-serif] font-normal text-white text-[10px] leading-[15px] pl-1 relative z-10">{month}</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="absolute -translate-x-1/2 left-1/2 bg-[#fbf9f5] flex items-center justify-center p-[2px] rounded-full size-14 top-3">
      <div className="absolute inset-0 border-2 border-[#ff4d00] rounded-full pointer-events-none" />
      <div className="absolute -translate-x-1/2 left-1/2 bg-transparent rounded-full shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)] size-14 top-0" />
      <span className="font-['JetBrains_Mono',sans-serif] font-medium text-[#ff4d00] text-base leading-6 relative z-10">{day}</span>
      <span className="font-['Hanken_Grotesk',sans-serif] font-normal text-[#ff4d00] text-[10px] leading-[15px] pl-1 relative z-10">{month}</span>
    </div>
  );
}

function MilestoneItem({ milestone }: { milestone: MilestoneData }) {
  if (milestone.side === "left") {
    return (
      <div className="flex items-center relative w-full">
        {/* Content on left */}
        <div className="flex flex-col gap-2 items-end pr-8 w-[373.33px] shrink-0">
          <h3 className="font-['Playfair_Display',sans-serif] font-normal text-[#ff4d00] text-base text-right leading-6 w-full">
            {milestone.title}
          </h3>
          <p className="font-['Hanken_Grotesk',sans-serif] font-normal text-[#5c4037] text-base text-right leading-6 w-full">
            {milestone.description}
          </p>
        </div>
        {/* Date badge */}
        <DateBadge day={milestone.day} month={milestone.month} isHighlighted={milestone.isHighlighted} />
      </div>
    );
  }

  return (
    <div className="w-full">
      <div className="flex items-center pl-[522.67px] relative w-full">
        {/* Content on right */}
        <div className="flex-1 min-w-px">
          <div className="flex flex-col gap-2 items-start pl-8">
            <h3 className="font-['Playfair_Display',sans-serif] font-normal text-[#ff4d00] text-base leading-6 w-full">
              {milestone.title}
            </h3>
            <p className="font-['Hanken_Grotesk',sans-serif] font-normal text-[#5c4037] text-base leading-6 w-full">
              {milestone.description}
            </p>
          </div>
        </div>
        {/* Date badge */}
        <DateBadge day={milestone.day} month={milestone.month} isHighlighted={milestone.isHighlighted} />
      </div>
    </div>
  );
}

export default function Timeline() {
  return (
    <section className="relative w-full">
      <div className="flex flex-col items-start px-16 py-30">
        <div className="flex flex-col gap-16 items-center max-w-[1280px] w-full">
          {/* Section header */}
          <div className="flex flex-col gap-2 items-center w-full">
            <span className="font-['Hanken_Grotesk',sans-serif] font-bold text-[#ff4d00] text-xs text-center tracking-[1.2px] uppercase leading-4">
              THE JOURNEY
            </span>
            <h2 className="font-['Playfair_Display',sans-serif] font-normal text-[#ff4d00] text-base text-center uppercase leading-6">
              EVENT TIMELINE
            </h2>
            <div className="flex flex-col items-center pb-1 pt-4 w-full relative">
              <svg width="12.833" height="7" viewBox="0 0 12.8333 7" fill="none" className="shrink-0">
                <path d={svgPaths.p61ade00} fill="#FF4D00" />
              </svg>
              <div className="absolute -translate-y-1/2 bg-gradient-to-r from-transparent via-[rgba(255,77,0,0.5)] to-transparent h-px left-0 right-[60%] top-[calc(50%+9px)]" />
              <div className="absolute -translate-y-1/2 bg-gradient-to-r from-transparent via-[rgba(255,77,0,0.5)] to-transparent h-px left-[60%] right-0 top-[calc(50%+9px)]" />
            </div>
          </div>

          {/* Timeline */}
          <div className="flex flex-col items-start max-w-[896px] w-[896px] relative">
            {/* Central vertical line */}
            <div className="absolute -translate-x-1/2 bg-[rgba(255,77,0,0.3)] bottom-0 left-1/2 top-0 w-px" />

            <div className="flex flex-col gap-12 items-start w-full">
              {milestones.map((milestone, i) => (
                <MilestoneItem key={i} milestone={milestone} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
