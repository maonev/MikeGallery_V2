import { Container } from "@/components/Container";
import { PROJECTS } from "@/data/project";
import { ProjectDescription } from "@/features/project-detail/ProjectDescription";
import { MoveUpRight } from "lucide-react";
import { useParams } from "react-router";

export const ProjectsDetailPage = () => {
  const { slug } = useParams();

  const project = PROJECTS.find((item) => item.slug === slug);
  if (!project) return null;

  return (
    <Container>
      <div className="flex flex-col gap-10 md:flex-row md:items-center lg:gap-16">
        <div className="flex flex-col gap-6 md:gap-10 md:w-3/4">
          <div className="flex items-center gap-3">
            <h1 className="text-white text-2xl font-medium md:text-3xl lg:text-4xl">
              {project.title}
            </h1>
            <img
              src={project.imageUrl}
              alt=""
              className="size-6 rounded-sm md:size-8"
            />
          </div>
          <ProjectDescription desc={project.desc} />
          <div className="flex flex-wrap gap-2">
            {Object.entries(project.links).map(([label, url], index) => (
              <a
                key={label}
                href={url}
                target="_blank"
                rel="noreferrer"
                className={`group inline-flex items-center gap-1 rounded-md border border-gray-600 px-4 py-2 text-sm font-medium transition-colors ${
                  index === 0
                    ? "text-black bg-button-primary hover:bg-button-primary/90"
                    : "text-white hover:bg-white hover:text-black"
                }`}>
                <span>{label}</span>
                <MoveUpRight
                  size={10}
                  strokeWidth={3}
                  className="transition-transform group-hover:animate-bounce"
                />
              </a>
            ))}
          </div>
        </div>
        <div className="relative flex items-center justify-center md:w-1/2">
          <img
            src="/img/mockup.png"
            alt=""
            className="w-full max-w-xs lg:max-w-sm object-contain"
          />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-linear-to-t from-black via-black/80 to-transparent" />
        </div>
      </div>
    </Container>
  );
};
