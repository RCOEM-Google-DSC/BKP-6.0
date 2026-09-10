"use client";

import { useState } from "react";
import svgPaths from "@/lib/svg-paths";

interface FaqItem {
  question: string;
  answer: string;
}

const faqItems: FaqItem[] = [
  {
    question: "Who can participate in version 6.0?",
    answer: "Any student currently enrolled in an undergraduate or postgraduate program at any recognized institution can participate. Whether you are a seasoned competitive programmer or a curious beginner, BKP 6.0 welcomes all skill levels.",
  },
  {
    question: "Is it an individual or team event?",
    answer: "BKP 6.0 is primarily an individual competitive programming contest. Each participant competes on their own to solve the problem statements within the allotted time frame.",
  },
  {
    question: "Is there any registration fee?",
    answer: "No, participation in Bappa Ka Prashad 6.0 is completely free. We believe in making quality coding contests accessible to everyone.",
  },
];

function FaqAccordionItem({ item }: { item: FaqItem }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-[rgba(245,243,239,0.5)] flex flex-col items-start p-px rounded-lg w-full relative">
      <div className="absolute inset-0 border border-[rgba(115,92,0,0.1)] rounded-lg pointer-events-none" />
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between p-6 w-full cursor-pointer"
      >
        <span className="font-['Playfair_Display',sans-serif] font-normal text-[#1b1c1a] text-xl leading-7 text-left">
          {item.question}
        </span>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          className={`shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
        >
          <path
            d="M6 9L12 15L18 9"
            stroke="#1B1C1A"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
          />
        </svg>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 w-full ${
          isOpen ? "max-h-[200px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 pb-6">
          <p className="font-['Hanken_Grotesk',sans-serif] font-normal text-[#5c4037] text-base leading-6">
            {item.answer}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function FAQ() {
  return (
    <section className="flex justify-center w-full">
      <div className="flex flex-col gap-16 items-center max-w-[768px] py-30 w-[768px]">
        {/* Section header */}
        <div className="flex flex-col gap-2 items-center w-full">
          <span className="font-['Hanken_Grotesk',sans-serif] font-bold text-[#ff4d00] text-xs text-center tracking-[1.2px] uppercase leading-4">
            QUERIES
          </span>
          <h2 className="font-['Playfair_Display',sans-serif] font-normal text-[#ff4d00] text-base text-center uppercase leading-6">
            FREQUENTLY ASKED
          </h2>
          <div className="flex flex-col items-center pb-1 pt-4 w-full relative">
            <svg width="11.667" height="11.667" viewBox="0 0 11.6667 11.6667" fill="none" className="shrink-0">
              <path d={svgPaths.p19961e60} fill="#FF4D00" />
            </svg>
            <div className="absolute -translate-y-1/2 bg-gradient-to-r from-transparent via-[rgba(255,77,0,0.5)] to-transparent h-px left-0 right-[60%] top-[calc(50%+8.67px)]" />
            <div className="absolute -translate-y-1/2 bg-gradient-to-r from-transparent via-[rgba(255,77,0,0.5)] to-transparent h-px left-[60%] right-0 top-[calc(50%+8.67px)]" />
          </div>
        </div>

        {/* FAQ items */}
        <div className="flex flex-col gap-4 items-start w-full">
          {faqItems.map((item, i) => (
            <FaqAccordionItem key={i} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
