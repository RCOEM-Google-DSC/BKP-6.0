"use client";

import React, { useState, useEffect } from "react";
import {
  MapPin,
  Clock,
  ArrowRight,
  Mail,
  Calendar
} from "lucide-react";
import { motion } from "framer-motion";
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

// Countdown Timer target: Sept 20, 2026 at 8:00 PM IST (+05:30)
const COUNTDOWN_TARGET = "2026-09-20T20:00:00+05:30";

export default function Home() {
  const calculateTimeLeft = () => {
    const target = new Date(COUNTDOWN_TARGET).getTime();
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

  // Smooth scroll handler with header offset
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      window.history.pushState(null, "", `#${id}`);
    }
  };

  return (
    <div className="min-h-screen bg-white text-zinc-900 selection:bg-[#FF941A] selection:text-black font-sans overflow-x-hidden">

      {/* ====== GRADIENT ZONE: header + hero + countdown ====== */}
      <div
        className="text-white relative overflow-hidden min-h-screen flex flex-col justify-between"
        style={{
          background: "radial-gradient(circle at 75% 35%, #FF941A 0%, #ED6724 18%, #DA392F 35%, #AB232D 60%, #7C0D2B 100%)",
        }}
      >
        {/* MOTIF - top left decorative */}
        <motion.img
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.65, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          src="/motifs.svg"
          alt=""
          aria-hidden="true"
          className="hidden sm:block absolute -top-8 -left-8 w-80 sm:w-[420px] opacity-65 pointer-events-none select-none -scale-x-100"
          style={{ mixBlendMode: "screen" }}
        />

        {/* --- MATCHING GRADIENT HEADER --- */}
        <motion.header
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="sticky top-0 z-40"
        >
          <div className="max-w-6xl xl:max-w-7xl mx-auto px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between gap-3">
            
            {/* LOGO */}
            <motion.a
              href="#"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center shrink-0 group"
            >
              <img
                src="/gdg-logo.png"
                alt="GDG Logo"
                className="h-6 sm:h-9 max-w-[180px] sm:max-w-none w-auto object-contain group-hover:drop-shadow-[0_0_12px_rgba(255,255,255,0.4)] transition-all"
              />
            </motion.a>

            {/* DESK NAV LINKS & ACTIONS */}
            <div className="flex items-center gap-4 sm:gap-6 shrink-0">
              <nav className="hidden md:flex items-center gap-6 text-xs font-medium text-amber-100/80">
                <a
                  href="#about"
                  onClick={(e) => scrollToSection(e, "about")}
                  className="hover:text-white transition-all relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-amber-300 hover:after:w-full after:transition-all after:duration-300 cursor-pointer"
                >
                  About
                </a>
                <a
                  href="#prizes"
                  onClick={(e) => scrollToSection(e, "prizes")}
                  className="hover:text-white transition-all relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-amber-300 hover:after:w-full after:transition-all after:duration-300 cursor-pointer"
                >
                  Prizes
                </a>
                <a
                  href="#partners"
                  onClick={(e) => scrollToSection(e, "partners")}
                  className="hover:text-white transition-all relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-amber-300 hover:after:w-full after:transition-all after:duration-300 cursor-pointer"
                >
                  Partners
                </a>
              </nav>

              <motion.a
                whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(255,255,255,0.3)" }}
                whileTap={{ scale: 0.96 }}
                href={REGISTRATION_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-2 sm:px-5 sm:py-2.5 rounded-full bg-white text-zinc-950 hover:bg-amber-100 text-xs font-bold tracking-wide transition-colors shadow-md inline-block whitespace-nowrap shrink-0"
              >
                Register Now
              </motion.a>
            </div>

          </div>
        </motion.header>

        {/* --- MAIN HERO SECTION --- */}
        <main className="relative z-10 flex-1 flex flex-col justify-end pt-2 sm:pt-4 pb-0 text-white">
          <div className="max-w-6xl xl:max-w-7xl mx-auto px-6 relative z-10 w-full flex-1 flex flex-col justify-end min-h-0">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-end w-full flex-1 min-h-0">
              
              {/* HERO TEXT (VERTICALLY CENTERED, NO ARTIFICIAL PULL DOWN) */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="lg:col-span-5 xl:col-span-5 flex flex-col items-start z-10 self-center py-6 sm:py-10"
              >

                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-normal font-heading tracking-tight text-white leading-[1.08] mb-5">
                  Bappa Ka Prashad{" "}
                  <motion.span
                    className="text-gradient-fire font-heading inline-block"
                    animate={{
                      filter: [
                        "drop-shadow(0 0 10px rgba(255,180,50,0.4))",
                        "drop-shadow(0 0 20px rgba(255,120,30,0.7))",
                        "drop-shadow(0 0 10px rgba(255,180,50,0.4))"
                      ]
                    }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  >
                    6.0
                  </motion.span>
                </h1>

                <motion.p
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="text-base text-amber-100/90 mb-6 max-w-md leading-relaxed font-light"
                >
                  An annual competitive programming contest by GDG On Campus, Ramdeobaba University. Code, compete, and celebrate where algorithmic problem solving meets the festive spirit of Ganesh Chaturthi.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.35 }}
                  className="flex flex-wrap items-center gap-4 w-full sm:w-auto"
                >
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.96 }}
                    href={REGISTRATION_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group w-full sm:w-auto px-8 py-3.5 rounded-full bg-white text-zinc-950 font-bold text-sm shadow-md hover:bg-amber-50 transition-all flex items-center justify-center gap-2"
                  >
                    <span>Participate Now</span>
                    <ArrowRight className="w-4 h-4 text-[#DA392F] group-hover:translate-x-1 transition-transform" />
                  </motion.a>

                  <motion.a
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.96 }}
                    href="#about"
                    onClick={(e) => scrollToSection(e, "about")}
                    className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-black/20 hover:bg-black/30 border border-white/20 text-white text-sm font-medium transition-all text-center cursor-pointer"
                  >
                    Explore Details
                  </motion.a>
                </motion.div>

              </motion.div>

              {/* HERO GANPATI VECTOR CENTERPIECE (LARGE & STICKED TO COUNTER) */}
              <motion.div
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
                className="lg:col-span-7 xl:col-span-7 flex justify-center lg:justify-end items-end relative w-full self-end pb-0 -mb-[1px]"
              >
                
                {/* AMBIENT SHINES */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <motion.div
                    animate={{
                      scale: [1, 1.15, 1],
                      opacity: [0.45, 0.7, 0.45],
                    }}
                    transition={{
                      duration: 4.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="w-[420px] h-[420px] sm:w-[560px] sm:h-[560px] lg:w-[680px] lg:h-[680px] bg-amber-400/20 rounded-full blur-3xl"
                  />
                </div>

                {/* DIRECT SVG HERO COMPONENT */}
                <div className="relative w-full max-w-[520px] sm:max-w-[600px] lg:max-w-[680px] xl:max-w-[760px] flex items-end justify-center lg:justify-end z-10">
                  <GanpatiHeroElement />
                </div>

              </motion.div>

            </div>

          </div>
        </main>

        {/* --- COUNTDOWN TIMER BANNER --- */}
        <motion.section
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="bg-black/25 backdrop-blur-md border-y border-white/10 py-6 sm:py-8 relative z-10 shrink-0"
        >
          <div className="max-w-6xl xl:max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
            
            {/* LABEL & TIME CONFIRMATION */}
            <div className="flex items-center gap-3 text-center md:text-left">
              <motion.div
                animate={{ rotate: [0, 6, -6, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="p-2.5 rounded-full bg-white/10 border border-white/20 text-[#FF941A] shrink-0"
              >
                <Clock className="w-5 h-5" />
              </motion.div>
              <div>
                <div className="text-xs uppercase tracking-wider text-amber-200/70 font-medium">Countdown</div>
                <div className="text-base font-semibold font-heading text-white">Contest Begins In</div>
                <div className="flex items-center gap-1.5 text-[11px] text-amber-200/80 mt-0.5 font-light">
                  <Calendar className="w-3 h-3 text-[#FF941A]" />
                  <span>20 Sep 2026 • 8:00 PM IST</span>
                </div>
              </div>
            </div>

            {/* DIGITS DISPLAY (RIGHT ALIGNED) */}
            <div className="flex items-center gap-6 sm:gap-10 text-center">
              
              {/* DAYS */}
              <div className="flex flex-col items-center">
                <div className="text-3xl sm:text-4xl font-extrabold text-white font-mono tracking-wider">
                  {timeLeft !== null ? String(timeLeft.days).padStart(2, "0") : "--"}
                </div>
                <div className="text-[11px] text-amber-200/70 uppercase mt-0.5 font-medium tracking-wide">Days</div>
              </div>

              <span className="text-2xl font-light text-white/30 -translate-y-2">:</span>

              {/* HOURS */}
              <div className="flex flex-col items-center">
                <div className="text-3xl sm:text-4xl font-extrabold text-white font-mono tracking-wider">
                  {timeLeft !== null ? String(timeLeft.hours).padStart(2, "0") : "--"}
                </div>
                <div className="text-[11px] text-amber-200/70 uppercase mt-0.5 font-medium tracking-wide">Hours</div>
              </div>

              <span className="text-2xl font-light text-white/30 -translate-y-2">:</span>

              {/* MINS */}
              <div className="flex flex-col items-center">
                <div className="text-3xl sm:text-4xl font-extrabold text-white font-mono tracking-wider">
                  {timeLeft !== null ? String(timeLeft.minutes).padStart(2, "0") : "--"}
                </div>
                <div className="text-[11px] text-amber-200/70 uppercase mt-0.5 font-medium tracking-wide">Mins</div>
              </div>

              <span className="text-2xl font-light text-white/30 -translate-y-2">:</span>

              {/* SECS */}
              <div className="flex flex-col items-center">
                <motion.div
                  key={timeLeft?.seconds ?? 0}
                  initial={{ scale: 1.15, opacity: 0.8 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="text-3xl sm:text-4xl font-extrabold text-[#FFE896] font-mono tracking-wider"
                >
                  {timeLeft !== null ? String(timeLeft.seconds).padStart(2, "0") : "--"}
                </motion.div>
                <div className="text-[11px] text-amber-200/70 uppercase mt-0.5 font-medium tracking-wide">Secs</div>
              </div>

            </div>

          </div>
        </motion.section>

      {/* ====== END GRADIENT ZONE ====== */}
      </div>

      {/* --- ABOUT SECTION (white) --- */}
      <section id="about" className="py-24 bg-white scroll-mt-20">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl mx-auto px-6 text-center"
        >
          <span className="text-xs text-[#AB232D] uppercase tracking-widest font-semibold px-3 py-1 rounded-full bg-red-50 border border-red-100 inline-block mb-3">
            About the Contest
          </span>
          <h2 className="text-3xl sm:text-4xl font-normal font-heading text-zinc-900 mt-2 mb-5">
            What is Bappa Ka Prashad?
          </h2>
          <p className="text-zinc-600 leading-relaxed font-light text-base sm:text-lg">
            Bappa Ka Prashad is an annual competitive programming contest organized by GDG On Campus, Ramdeobaba University. Aimed at spreading the joy of technical problem solving, it features 6 to 7 Ganesh Chaturthi-themed algorithmic problems that challenge coders of all skill levels. The contest blends algorithmic rigor with a festive twist rooted in Indian culture, celebrating logic, learning, and the passion for coding during Ganesh Chaturthi.
          </p>
        </motion.div>
      </section>

      {/* --- PRIZES SECTION --- */}
      <section id="prizes" className="py-24 scroll-mt-20 relative overflow-hidden" style={{ background: "#FEF6F0" }}>
        <div className="max-w-4xl mx-auto px-6 text-center">

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-normal font-heading text-zinc-800 mb-2">
              Contest Prizes
            </h2>
            <p className="text-xs text-zinc-500 uppercase tracking-widest mb-16 font-medium">
              Compete for cash rewards and prestigious recognition
            </p>
          </motion.div>

          {/* 2nd · 1st · 3rd - podium with animations */}
          <div className="flex flex-col sm:flex-row items-center sm:items-end justify-center gap-8 sm:gap-10 md:gap-14">

            {/* SECOND PRIZE */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ y: -8, scale: 1.03 }}
              className="flex flex-col items-center gap-3 p-6 rounded-2xl bg-white border border-amber-200/50 shadow-sm hover:shadow-md transition-shadow w-48 sm:w-44"
            >
              <span className="text-6xl sm:text-7xl filter drop-shadow-sm">🥈</span>
              <div className="text-3xl sm:text-4xl font-bold font-heading" style={{ color: "#9A8C1A" }}>₹5K</div>
              <div className="text-xs font-semibold text-zinc-500 tracking-wide uppercase">Second Prize</div>
            </motion.div>

            {/* FIRST PRIZE - tallest & prominent */}
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1, type: "spring", bounce: 0.25 }}
              whileHover={{ y: -12, scale: 1.05 }}
              className="flex flex-col items-center gap-3 p-8 rounded-3xl bg-gradient-to-b from-amber-50/90 to-white border-2 border-amber-300/80 shadow-lg hover:shadow-amber-300/30 transition-shadow sm:-translate-y-6 w-56 sm:w-52 relative"
            >
              {/* Grand prize ribbon */}
              <div className="absolute -top-3 px-3 py-0.5 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 text-white text-[10px] font-bold uppercase tracking-wider shadow-sm">
                Winner
              </div>
              <motion.span
                animate={{
                  rotate: [-2, 2, -2],
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="text-7xl sm:text-8xl filter drop-shadow-md"
              >
                🥇
              </motion.span>
              <div className="text-5xl sm:text-6xl font-bold font-heading" style={{ color: "#B8860B" }}>₹7K</div>
              <div className="text-xs font-bold text-amber-700 tracking-wide uppercase">First Prize</div>
            </motion.div>

            {/* THIRD PRIZE */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ y: -8, scale: 1.03 }}
              className="flex flex-col items-center gap-3 p-6 rounded-2xl bg-white border border-amber-200/50 shadow-sm hover:shadow-md transition-shadow w-48 sm:w-44"
            >
              <span className="text-6xl sm:text-7xl filter drop-shadow-sm">🥉</span>
              <div className="text-3xl sm:text-4xl font-bold font-heading" style={{ color: "#9A8C1A" }}>₹3K</div>
              <div className="text-xs font-semibold text-zinc-500 tracking-wide uppercase">Third Prize</div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* --- PARTNERS SECTION --- */}
      <section id="partners" className="py-20 bg-white scroll-mt-20">
        <div className="max-w-6xl mx-auto px-6">

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-xl mx-auto mb-12"
          >
            <h2 className="text-2xl sm:text-3xl font-normal font-heading text-zinc-900 mt-1">
              COMMUNITY &amp; DEVELOPER <span className="italic text-gradient-fire-dark">PARTNERS</span>
            </h2>
            <p className="text-zinc-600 text-xs sm:text-sm leading-relaxed mt-3 font-light">
              We are grateful to our developer communities, student organizations, and partners whose support powers Bappa Ka Prashad, fostering learning and competitive programming excellence.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex justify-center"
          >
            <motion.div
              whileHover={{ scale: 1.05, y: -4 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="flex flex-col items-center gap-3 p-6 rounded-2xl border border-zinc-100 hover:border-zinc-200 shadow-sm hover:shadow-md transition-all bg-white cursor-default"
            >
              <img src="/codechef.png" alt="CodeChef" className="w-auto h-[240px] sm:h-[280px] object-contain" />
              <span className="text-xs text-[#AB232D] uppercase tracking-widest font-semibold">Platform Partner</span>
            </motion.div>
          </motion.div>

        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer
        className="pt-16 pb-12 text-xs text-white/60 relative overflow-hidden"
        style={{ background: "radial-gradient(circle at 70% 30%, #C0392B 0%, #AB232D 30%, #8A1020 60%, #6B0D1A 100%)" }}
      >
        {/* MOTIF - bottom right decorative */}
        <motion.img
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.75 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
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
                <motion.a
                  whileHover={{ scale: 1.15, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  href="https://www.instagram.com/gdg_rbu/"
                  target="_blank"
                  rel="noreferrer"
                  className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </motion.a>
                {/* LinkedIn */}
                <motion.a
                  whileHover={{ scale: 1.15, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  href="https://www.linkedin.com/company/gdg-rbu/"
                  target="_blank"
                  rel="noreferrer"
                  className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </motion.a>
                {/* Website */}
                <motion.a
                  whileHover={{ scale: 1.15, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  href="https://gdgrbu.app"
                  target="_blank"
                  rel="noreferrer"
                  className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                  </svg>
                </motion.a>
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
                  <a
                    href="#about"
                    onClick={(e) => scrollToSection(e, "about")}
                    className="hover:text-white transition-colors cursor-pointer"
                  >
                    About BKP 6.0
                  </a>
                </li>
                <li>
                  <a
                    href="#prizes"
                    onClick={(e) => scrollToSection(e, "prizes")}
                    className="hover:text-white transition-colors cursor-pointer"
                  >
                    Prize Pool
                  </a>
                </li>
                <li>
                  <a
                    href="#partners"
                    onClick={(e) => scrollToSection(e, "partners")}
                    className="hover:text-white transition-colors cursor-pointer"
                  >
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
