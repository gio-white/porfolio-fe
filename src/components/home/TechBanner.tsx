import React from "react";
import { technologies } from "@/data/home-page/technology-data";

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
