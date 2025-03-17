"use client";
import { ProjectParallax } from "@/components/home/ui/ProjectParallax";
import { projects } from "@/data/home-page/projects-data";
import React from "react";


export function ProjectsParallaxHome() {
  return <ProjectParallax products={projects} />;
}

