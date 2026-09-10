import HeroSection from "@/components/HeroSection";
import SectionDivider from "@/components/SectionDivider";
import AboutSection from "@/components/AboutSection";
import EventDetails from "@/components/EventDetails";
import Timeline from "@/components/Timeline";
import Prizes from "@/components/Prizes";
import FAQ from "@/components/FAQ";
import Collaborators from "@/components/Collaborators";
import FinalCTA from "@/components/FinalCTA";

export default function Home() {
  return (
    <main className="bg-white min-h-full w-full relative">
      <div className="flex flex-col items-center pt-[100px] w-full">
        <HeroSection />
        <SectionDivider />
        <AboutSection />
        <EventDetails />
        <Timeline />
        <Prizes />
        <FAQ />
        <Collaborators />
        <FinalCTA />
      </div>
    </main>
  );
}
