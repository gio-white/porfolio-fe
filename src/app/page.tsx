import Hero from "@/components/home/Hero";
import HighlightsGrid from "@/components/home/HighlightsGrid";
import ProjectsCards from "@/components/home/ProjectsCarousel";
import TechStack from "@/components/home/TechStack";
import { HeroParallaxHome } from "@/components/home/ui/HeroParallaxHome";

export default function Home() {
  return (
    <main className="relative w-11/12 mx-auto flex flex-col">
      <Hero />
      <div className="relative w-[calc(100vw-1rem)] left-[calc(-50vw+50%)]">
        <HeroParallaxHome />
      </div>
      <TechStack />
      <ProjectsCards />
      <HighlightsGrid />
    </main>
  );
}
