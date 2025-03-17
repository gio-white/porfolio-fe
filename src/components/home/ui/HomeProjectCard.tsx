import React from 'react';
import Link from 'next/link';

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  projectUrl: string;
  bgColor?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  technologies,
  projectUrl,
  bgColor = 'bg-white'
}) => {
  return (
    <Link href={projectUrl}>
      <div
        className={`${bgColor} rounded-xl p-6 shadow-lg transition-all duration-300 transform hover:scale-[1.02] hover:shadow-xl relative overflow-hidden group`}
      >
        {/* Card Content Container */}
        <div className="flex flex-col h-full">
          {/* Title */}
          <h3 className="text-xl font-semibold mb-3 text-gray-900">{title}</h3>
          
          {/* Technology Tags */}
          <div className="flex flex-wrap gap-2 mt-auto">
            {technologies.map((tech, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-gray-100 text-gray-800 text-xs font-medium rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
          
          {/* Overlay with description - hidden by default, shown on hover */}
          <div className="absolute inset-0 bg-black bg-opacity-0 flex items-center justify-center transition-all duration-300 p-6 group-hover:bg-opacity-80">
            <p className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">
              {description}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;