import Hero from "@/components/home/HeroSection";
import TechStackBanner from "@/components/home/TechBanner";
import { ProjectsParallaxHome } from "@/components/home/ProjectSection";
import Link from "next/link";
import CertAndCourses from "@/components/home/CertCourseSection";
import { certification } from "@/data/home-page/course-certification";
import { CourseCardItems } from "@/components/home/ui/CourseCard";
import Projects from "@/components/home/ProjectsSection";
 

export default function Home() {
  return (
    <main className="relative w-11/12 mx-auto flex flex-col">
      <Hero />
      <div className="relative w-[calc(100vw-1rem)] left-[calc(-50vw+50%)]">
        <ProjectsParallaxHome />
      </div>
      <div className="relative w-[calc(100vw-1rem)] left-[calc(-50vw+50%)]">
        <Projects />
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
      <CourseCardItems courseList={certification} />
    </main>
  );
}
