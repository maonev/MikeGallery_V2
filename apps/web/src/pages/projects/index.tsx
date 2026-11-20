import { Container } from "@/components/Container";
import { PROJECTS } from "@/data/project";
import { useState } from "react";
import { ProjectCard } from "./ProjectCard";

const INITIAL_COUNT = 8; // tampilan awal: 3-2-3, sama seperti figma
const LOAD_STEP = 10; // tiap load more: 2-3-2-3

const getSpanClass = (index: number) =>
  index % 5 < 3 ? "lg:col-span-2" : "lg:col-span-3";

export const ProjectsPage = () => {
  const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT);
  const visibleProjects = PROJECTS.slice(0, visibleCount);
  const hasMore = visibleCount < PROJECTS.length;

  return (
    <Container className="text-white">
      <header className="flex flex-col gap-2">
        <h1 className="text-4xl font-semibold md:text-6xl">My Works</h1>
        <p className="text-sm font-medium text-white/70">
          Showcase About Works
        </p>
      </header>

      <hr className="my-10 border-white/20" />

      <div className="grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-6">
        {visibleProjects.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            className={getSpanClass(index)}
          />
        ))}
      </div>

      {hasMore && (
        <div className="mt-14 flex justify-center">
          <button
            type="button"
            onClick={() => setVisibleCount((count) => count + LOAD_STEP)}
            className="rounded-full border border-white/20 px-8 py-3 text-xs font-bold uppercase tracking-widest text-button-primary cursor-pointer lg:hover:scale-110 duration-200 transition">
            Load more works
          </button>
        </div>
      )}
    </Container>
  );
};
