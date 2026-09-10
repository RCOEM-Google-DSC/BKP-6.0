"use client";

import React, { useState, useEffect } from "react";
import {
  MapPin,
  Clock,
  ArrowRight,
  Mail
} from "lucide-react";
import GanpatiHeroElement from "@/components/GanpatiHeroElement";

// --- COMMUNITY & DEVELOPER PARTNERS ---
const SPONSORS = [
  { name: "GDG Nagpur", category: "Developer Community", role: "Community Partner" },
  { name: "GDG Cloud Nagpur", category: "Cloud & Ecosystem", role: "Community Partner" },
  { name: "DotSlash", category: "Coding Club", role: "Ecosystem Partner" },
  { name: "NexMeet", category: "Tech Platform", role: "Community Partner" },
  { name: "GDG YCCE", category: "Student Network", role: "Campus Partner" },
  { name: "GDG CCOEW", category: "Student Network", role: "Campus Partner" },
];

const REGISTRATION_URL = "https://unstop.com/p/bappa-ka-prashad-60-google-developer-groupgdg-rbu-1752279";

export default function Home() {
  // Countdown Timer target: Sept 20, 2026 at 8:00 PM
  const calculateTimeLeft = () => {
    const target = new Date("2026-09-20T20:00:00+05:30").getTime();
    const now = new Date().getTime();
    const difference = target - now;

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState<{ days: number; hours: number; minutes: number; seconds: number } | null>(null);

  useEffect(() => {
    setTimeLeft(calculateTimeLeft());
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-white text-zinc-900 selection:bg-[#FF941A] selection:text-black font-sans overflow-x-hidden">

      {/* ====== GRADIENT ZONE: header + hero + countdown ====== */}
      <div
        className="text-white relative overflow-hidden min-h-screen flex flex-col"
        style={{
          background: "radial-gradient(circle at 75% 35%, #FF941A 0%, #ED6724 18%, #DA392F 35%, #AB232D 60%, #7C0D2B 100%)",
        }}
      >
        {/* MOTIF - top left decorative */}
        <img
          src="/motifs.svg"
          alt=""
          aria-hidden="true"
          className="hidden sm:block absolute -top-8 -left-8 w-80 sm:w-[420px] opacity-65 pointer-events-none select-none -scale-x-100"
          style={{ mixBlendMode: "screen" }}
        />

      {/* --- MATCHING GRADIENT HEADER --- */}
      <header className="sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between gap-3">
          
          {/* LOGO */}
          <a href="#" className="flex items-center shrink-0 group">
            <img
              src="/gdg-logo.png"
              alt="GDG Logo"
              className="h-6 sm:h-9 max-w-[180px] sm:max-w-none w-auto object-contain group-hover:scale-105 transition-all"
            />
          </a>

          {/* DESK NAV LINKS & ACTIONS */}
          <div className="flex items-center gap-4 sm:gap-6 shrink-0">
            <nav className="hidden md:flex items-center gap-6 text-xs font-medium text-amber-100/80">
              <a href="#about" className="hover:text-white transition-colors">About</a>
              <a href="#prizes" className="hover:text-white transition-colors">Prizes</a>
              {/* <a href="#partners" className="hover:text-white transition-colors">Collaborators</a> */}
              <a href="#partners" className="hover:text-white transition-colors">Partners</a>
            </nav>

            <a
              href={REGISTRATION_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-2 sm:px-5 sm:py-2.5 rounded-full bg-white text-zinc-950 hover:bg-amber-100 text-xs font-bold tracking-wide transition-all shadow-md inline-block whitespace-nowrap shrink-0"
            >
              Register Now
            </a>
          </div>

        </div>
      </header>

      {/* --- MAIN HERO SECTION --- */}
      <main className="relative z-10 flex-1 flex items-center pt-10 pb-4 lg:pt-14 lg:pb-6 text-white">
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-end">
            
            {/* HERO TEXT */}
            <div className="lg:col-span-6 flex flex-col items-start pb-4 z-10">

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-normal font-heading tracking-tight text-white leading-[1.08] mb-5">
                Bappa Ka Prashad <span className="text-gradient-fire font-heading">6.0</span>
              </h1>

              <p className="text-base text-amber-100/90 mb-6 max-w-md leading-relaxed font-light">
                An annual competitive programming contest by GDG On Campus, Ramdeobaba University. Code, compete, and celebrate where algorithmic problem solving meets the festive spirit of Ganesh Chaturthi.
              </p>

              <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
                <a
                  href={REGISTRATION_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-white text-zinc-950 font-bold text-sm shadow-md hover:bg-amber-50 transition-all flex items-center justify-center gap-2"
                >
                  <span>Participate Now</span>
                  <ArrowRight className="w-4 h-4 text-[#DA392F]" />
                </a>

                <a
                  href="#about"
                  className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-black/20 hover:bg-black/30 border border-white/20 text-white text-sm font-medium transition-all text-center backdrop-blur-xs"
                >
                  Explore Details
                </a>
              </div>

            </div>

            {/* HERO GANPATI VECTOR CENTERPIECE SITTING RIGHT ABOVE THE COUNTER */}
            <div className="lg:col-span-6 flex justify-center items-end relative min-h-[340px] sm:min-h-[420px] w-full pb-0 -mb-4 lg:-mb-6">
              
              {/* ADDITIONAL AMBIENT SHINES */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-[300px] h-[300px] sm:w-[420px] sm:h-[420px] bg-amber-400/20 rounded-full blur-3xl opacity-60" />
              </div>

              {/* DIRECT SVG HERO COMPONENT */}
              <div className="relative w-full max-w-[500px] sm:max-w-[580px] flex items-end justify-center z-10">
                <GanpatiHeroElement />
              </div>

            </div>

          </div>

        </div>
      </main>

      {/* --- MINIMAL COUNTDOWN TIMER --- */}
      <section className="bg-black/20 backdrop-blur-md border-y border-white/10 py-10 relative z-10">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          
          <div className="flex items-center gap-3 text-center md:text-left">
            <div className="p-2.5 rounded-full bg-white/10 border border-white/20 text-[#FF941A]">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs uppercase tracking-wider text-amber-200/70">Countdown</div>
              <div className="text-base font-semibold font-heading text-white">Contest Begins In</div>
            </div>
          </div>

          <div className="flex items-center gap-6 sm:gap-10 text-center">
            <div>
              <div className="text-3xl sm:text-4xl font-extrabold text-white">{timeLeft?.days ?? "--"}</div>
              <div className="text-[11px] text-amber-200/60 uppercase mt-0.5">Days</div>
            </div>
            <span className="text-2xl font-light text-white/30">:</span>
            <div>
              <div className="text-3xl sm:text-4xl font-extrabold text-white">{timeLeft?.hours ?? "--"}</div>
              <div className="text-[11px] text-amber-200/60 uppercase mt-0.5">Hours</div>
            </div>
            <span className="text-2xl font-light text-white/30">:</span>
            <div>
              <div className="text-3xl sm:text-4xl font-extrabold text-white">{timeLeft?.minutes ?? "--"}</div>
              <div className="text-[11px] text-amber-200/60 uppercase mt-0.5">Mins</div>
            </div>
            <span className="text-2xl font-light text-white/30">:</span>
            <div>
              <div className="text-3xl sm:text-4xl font-extrabold text-white">{timeLeft?.seconds ?? "--"}</div>
              <div className="text-[11px] text-amber-200/60 uppercase mt-0.5">Secs</div>
            </div>
          </div>

        </div>
      </section>

      {/* ====== END GRADIENT ZONE ====== */}
      </div>

      {/* --- ABOUT SECTION (white) --- */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <span className="text-xs text-[#AB232D] uppercase tracking-widest font-medium">About the Contest</span>
          <h2 className="text-3xl font-normal font-heading text-zinc-900 mt-2 mb-4">What is Bappa Ka Prashad?</h2>
          <p className="text-zinc-600 leading-relaxed font-light text-base">
            Bappa Ka Prashad is an annual competitive programming contest organized by GDG On Campus, Ramdeobaba University. Aimed at spreading the joy of technical problem solving, it features 6 to 7 Ganesh Chaturthi-themed algorithmic problems that challenge coders of all skill levels. The contest blends algorithmic rigor with a festive twist rooted in Indian culture, celebrating logic, learning, and the passion for coding during Ganesh Chaturthi.
          </p>
        </div>
      </section>

      {/* --- PRIZES SECTION --- */}
      <section id="prizes" className="py-20" style={{ background: "#FEF6F0" }}>
        <div className="max-w-3xl mx-auto px-6 text-center">

          <h2 className="text-3xl sm:text-4xl font-normal font-heading text-zinc-700 mb-2">
            Contest Prizes
          </h2>
          <p className="text-xs text-zinc-500 uppercase tracking-widest mb-16 font-medium">
            Compete for cash rewards and prestigious recognition
          </p>

          {/* 2nd · 1st · 3rd - first is elevated */}
          <div className="flex items-end justify-center gap-6 sm:gap-12">

            {/* SECOND */}
            <div className="flex flex-col items-center gap-3 pb-4">
              <div className="text-4xl sm:text-5xl font-bold font-heading" style={{ color: "#9A8C1A" }}>₹5K</div>
              <div className="text-xs font-semibold text-zinc-500 tracking-wide">Second Prize</div>
              <span className="text-6xl sm:text-7xl" style={{ filter: "grayscale(0.3) brightness(1.1)" }}>🥈</span>
            </div>

            {/* FIRST - tallest */}
            <div className="flex flex-col items-center gap-3 -translate-y-6">
              <div className="text-5xl sm:text-6xl font-bold font-heading" style={{ color: "#9A8C1A" }}>₹7K</div>
              <div className="text-xs font-semibold text-zinc-500 tracking-wide">First Prize</div>
              <span className="text-7xl sm:text-8xl">🥇</span>
            </div>

            {/* THIRD */}
            <div className="flex flex-col items-center gap-3 pb-4">
              <div className="text-4xl sm:text-5xl font-bold font-heading" style={{ color: "#9A8C1A" }}>₹3K</div>
              <div className="text-xs font-semibold text-zinc-500 tracking-wide">Third Prize</div>
              <span className="text-6xl sm:text-7xl">🥉</span>
            </div>

          </div>
        </div>
      </section>

      {/* --- PARTNERS SECTION --- */}
      <section id="partners" className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">

          <div className="text-center max-w-xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-normal font-heading text-zinc-900 mt-1">
              COMMUNITY &amp; DEVELOPER <span className="italic text-gradient-fire-dark">PARTNERS</span>
            </h2>
            <p className="text-zinc-600 text-xs sm:text-sm leading-relaxed mt-3 font-light">
              We are grateful to our developer communities, student organizations, and partners whose support powers Bappa Ka Prashad, fostering learning and competitive programming excellence.
            </p>
          </div>

          <div className="flex justify-center">
            <div className="flex flex-col items-center gap-3">
              <img src="/codechef.png" alt="CodeChef" className="w-auto h-[280px] object-contain" />
              <span className="text-xs text-[#AB232D] uppercase tracking-widest font-medium">Platform Partner</span>
            </div>
          </div>

        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer
        className="pt-16 pb-12 text-xs text-white/60 relative overflow-hidden"
        style={{ background: "radial-gradient(circle at 70% 30%, #C0392B 0%, #AB232D 30%, #8A1020 60%, #6B0D1A 100%)" }}
      >
        {/* MOTIF - bottom right decorative */}
        <img
          src="/motifs.svg"
          alt=""
          aria-hidden="true"
          className="hidden sm:block absolute -bottom-8 -right-8 w-80 sm:w-[420px] opacity-75 pointer-events-none select-none -scale-x-100 rotate-180"
        />
        <div className="max-w-6xl mx-auto px-6">
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">

            {/* BRAND COL */}
            <div className="md:col-span-7 flex flex-col items-start pr-0 md:pr-10">
              <a href="#" className="flex items-center mb-4 group">
                <img
                  src="/gdg-logo.png"
                  alt="GDG Logo"
                  className="h-9 sm:h-10 w-auto object-contain"
                />
              </a>
              <p className="text-white/50 leading-relaxed max-w-sm mb-6 font-light">
                An annual competitive programming contest bringing together algorithmic problem solving, student talent, and the festive celebration of Ganesh Chaturthi.
              </p>

              {/* SOCIAL LINKS */}
              <div className="flex items-center gap-3">
                {/* Instagram */}
                <a href="https://www.instagram.com/gdg_rbu/" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                {/* LinkedIn */}
                <a href="https://www.linkedin.com/company/gdg-rbu/" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                {/* Website */}
                <a href="https://gdgrbu.app" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* QUICK LINKS */}
            <div className="md:col-span-5">
              <div className="text-white font-semibold uppercase tracking-wider text-[11px] mb-4">
                Contest Links
              </div>
              <ul className="space-y-2.5 font-light text-white/60">
                <li>
                  <a
                    href={REGISTRATION_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    Contest Registration
                  </a>
                </li>
                <li>
                  <a href="#about" className="hover:text-white transition-colors">
                    About BKP 6.0
                  </a>
                </li>
                <li>
                  <a href="#prizes" className="hover:text-white transition-colors">
                    Prize Pool
                  </a>
                </li>
                <li>
                  <a href="#partners" className="hover:text-white transition-colors">
                    Community Partners
                  </a>
                </li>
              </ul>
            </div>

          </div>

          {/* BOTTOM COPYRIGHT & DESK INFO */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-white/40 font-light">
            <div>
              © 2026 GDG On Campus, Ramdeobaba University. All rights reserved.
            </div>

            <div className="flex items-center gap-4">
              <a href="mailto:gdsc@rknec.edu" className="hover:text-white/70 transition-colors flex items-center gap-1">
                <Mail className="w-3 h-3" />
                <span>gdsc@rknec.edu</span>
              </a>
              <span>•</span>
              <span className="flex items-center gap-1">
                <MapPin className="w-3 h-3" />
                <span>Ramdeobaba University, Nagpur</span>
              </span>
            </div>
          </div>

        </div>
      </footer>

    </div>
  );
}
