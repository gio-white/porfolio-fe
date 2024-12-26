import { ExpandableCardDemo } from "@/components/projects/ProjectsList";
import FilterBar from "@/components/projects/FilterBar";

const Projects = () => {
  return (
    <section className="w-full flex flex-col">
      <FilterBar />
      <ExpandableCardDemo />
    </section>
  );
};
export default Projects;
