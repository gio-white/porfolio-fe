import React from 'react';

interface Technology {
  name: string;
  imageUrl: string;
}

export const technologies: Technology[] = [
  { name: 'React', imageUrl: '/images/react.svg' },
  { name: 'TypeScript', imageUrl: '/images/typescript.svg' },
  { name: 'Tailwind CSS', imageUrl: '/tailwind.svg' },
  { name: 'Python', imageUrl: '/python.svg' },
  { name: 'SQL', imageUrl: '/images/sql.svg' },
  { name: 'Node.js', imageUrl: '/images/nodejs.svg' },
  { name: 'Docker', imageUrl: '/images/docker.svg' },
  { name: 'AWS', imageUrl: '/images/aws.svg' },
];

const SlidingBanner: React.FC = () => {
  return (
    <div className="overflow-hidden bg-transparent py-6">
      <div className="flex items-center space-x-8 animate-custom-scroll">
        {technologies.map((tech) => (
          <div key={tech.name} className="flex-shrink-0">
            <img
              src={tech.imageUrl}
              alt={tech.name}
              className="w-[160px] h-[160px] object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SlidingBanner;
