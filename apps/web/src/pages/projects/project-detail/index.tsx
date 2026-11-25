import { Container } from "@/components/Container";
import { PROJECTS } from "@/data/project";
import { ProjectDescription } from "@/features/project-detail/ProjectDescription";
import { MoveUpRight } from "lucide-react";
import { useParams } from "react-router";
import { ProjectSection } from "./section/ProjectSection";
import { ProjectPager } from "./section/ProjectPager";
import { ProjectCard } from "../ProjectCard";

export const ProjectsDetailPage = () => {
  const { slug } = useParams();

  const index = PROJECTS.findIndex((item) => item.slug === slug);
  const project = PROJECTS[index];

  if (!project) return null;

  const prev = PROJECTS[index - 1];
  const next = PROJECTS[index + 1];
  const otherProjects = PROJECTS.filter((p) => p.slug !== slug).slice(0, 3);

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
      <div className="flex flex-col my-20 gap-10 lg:gap-20">
        <div className="flex flex-col items-center justify-center py-6 gap-4 border-b border-white/50">
          <h2 className="text-white text-4xl font-bold md:text-5xl">Project Detail</h2>
          <p className="text-gray-500 text-[10px] font-semibold md:text-xs">Detail About The Project</p>
        </div>
        {project.sections.map((section) => (
          <ProjectSection key={section.id} section={section} />
        ))}

        <ProjectPager prev={prev} next={next} />

        <section className="flex flex-col gap-10">
          <h2 className="text-center text-3xl font-semibold md:text-5xl text-white">
            Other Projects
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {otherProjects.map((p) => (
              <ProjectCard key={p.id} project={p} />
            ))}
          </div>
        </section>
      </div>
    </Container>
  );
};
