import Hero from "@/components/home/Hero";
import TechStackBanner from "@/components/home/TechStackBanner";
import { ProjectsParallaxHome } from "@/components/home/ui/ProjectsParallaxHome";
import Link from "next/link";
import CertAndCourses from "@/components/home/CertAndCourses";

export default function Home() {
  return (
    <main className="relative w-11/12 mx-auto flex flex-col">
      <Hero />
      <div className="relative w-[calc(100vw-1rem)] left-[calc(-50vw+50%)]">
        <ProjectsParallaxHome />
      </div>
      <div className="flex">
        <Link
          href="/projects"
          className="max-w-[50%] px-6 py-3 mx-auto mb-20 mg-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600"
        >
          All my projects
        </Link>
      </div>
      <TechStackBanner />
      <CertAndCourses />
    </main>
  );
}
