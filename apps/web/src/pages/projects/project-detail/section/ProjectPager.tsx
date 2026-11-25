import { Link } from "react-router";
import { Paths } from "@/routes/paths";
import type { Project } from "@/data/project";
import { LeftArrow } from "@/icons/LeftArrow";
import { RightArrow } from "@/icons/RightArrow";

export const ProjectPager = ({
  prev,
  next,
}: {
  prev?: Project;
  next?: Project;
}) => (
  <nav
    aria-label="Project navigation"
    className="flex items-center justify-between py-5 text-[10px] text-white font-bold uppercase">
    {prev ? (
      <Link
        to={Paths.PROJECTS_DETAIL(prev.slug)}
        className="group flex items-end gap-3">
        <LeftArrow
          aria-hidden
          className="transition-transform duration-300 ease-out group-hover:-translate-x-2"
        />
        <span className="transition-transform duration-300 ease-out group-hover:translate-x-2">
          Previous Work
        </span>
      </Link>
    ) : (
      <span />
    )}
    {next ? (
      <Link
        to={Paths.PROJECTS_DETAIL(next.slug)}
        className="group flex items-start gap-3">
        <span className="transition-transform duration-300 ease-out group-hover:-translate-x-2">
          Next work
        </span>
        <RightArrow
          aria-hidden
          className="transition-transform duration-300 ease-out group-hover:translate-x-2"
        />
      </Link>
    ) : (
      <span />
    )}
  </nav>
);
