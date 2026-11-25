// src/pages/projects/detail/ProjectPager.tsx
import { Link } from "react-router";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import { Paths } from "@/routes/paths";
import type { Project } from "@/data/project";

export const ProjectPager = ({
  prev,
  next,
}: {
  prev?: Project;
  next?: Project;
}) => (
  <nav
    aria-label="Project navigation"
    className="flex items-center justify-between border-y border-white/20 py-5 text-[10px] text-white font-bold uppercase tracking-widest md:text-xs">
    {prev ? (
      <Link
        to={Paths.PROJECTS_DETAIL(prev.slug)}
        className="flex items-center gap-3">
        <FaArrowLeftLong aria-hidden /> Previous work
      </Link>
    ) : (
      <span />
    )}
    {next ? (
      <Link
        to={Paths.PROJECTS_DETAIL(next.slug)}
        className="flex items-center gap-3">
        Next work <FaArrowRightLong aria-hidden />
      </Link>
    ) : (
      <span />
    )}
  </nav>
);