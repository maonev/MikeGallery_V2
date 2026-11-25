import type { Project } from "@/data/project";
import { Link } from "react-router";

type ProjectCardProps = {
  project: Project;
  className?: string;
};

export const ProjectCard = ({ project, className = "" }: ProjectCardProps) => (
  <Link
    to={`/projects/${project.slug}`}
    className={`flex flex-col gap-4 ${className}`}>
    <img
      src={project.imageUrl}
      alt={project.title}
      loading="lazy"
      className="h-64 w-full rounded-2xl object-cover md:h-72 lg:hover:scale-110 transition duration-500"
    />
    <div className="flex flex-col items-center gap-1 text-center">
      <p className="text-[10px] font-bold uppercase tracking-widest text-gray-500">
        {project.category}  
      </p>
      <h2 className="text-lg font-semibold text-white">{project.title}</h2>
    </div>
  </Link>
);
