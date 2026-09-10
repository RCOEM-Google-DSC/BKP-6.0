import svgPaths from "@/lib/svg-paths";

export default function SectionDivider() {
  return (
    <div className="flex items-start justify-center opacity-30 py-8 w-full">
      <div className="w-[33px] h-[33px] relative">
        <svg className="absolute inset-0 size-full" fill="none" viewBox="0 0 33 33">
          <path d={svgPaths.pbd1c680} fill="#FF4D00" />
        </svg>
      </div>
    </div>
  );
}
