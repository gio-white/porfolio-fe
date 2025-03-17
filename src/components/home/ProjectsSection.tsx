// In your page or component file
import ProjectCard from '@/components/home/ui/HomeProjectCard';

export default function Projects() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      <ProjectCard
        title="Portfolio Website"
        description="A personal portfolio website built with modern web technologies to showcase my projects and skills."
        technologies={["Next.js", "TypeScript", "Tailwind CSS"]}
        projectUrl="/projects/portfolio"
        bgColor="bg-gray-50"
      />
      
      <ProjectCard
        title="E-commerce Platform"
        description="A full-featured online store with product catalog, cart functionality, and secure checkout process."
        technologies={["React", "Node.js", "MongoDB"]}
        projectUrl="/projects/ecommerce"
      />
      
      {/* Add more project cards as needed */}
    </div>
  );
}