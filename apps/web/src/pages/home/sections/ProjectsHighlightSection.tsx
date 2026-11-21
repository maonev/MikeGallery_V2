import { Container } from "@/components/Container";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import { PROJECTS } from "@/data/project";
import { Paths } from "@/routes/paths";
import { Link } from "react-router";

const FEATURED_LIMIT = 4;

export const ProjectsHighlightSection = () => {
  const featuredProjects = PROJECTS.filter((p) => p.isFeatured).slice(
    0,
    FEATURED_LIMIT,
  );
  if (featuredProjects.length === 0) return null;

  return (
    <Container>
      <div className="my-30 flex flex-col items-center justify-center gap-6">
        <h2 className="text-white text-3xl md:text-5xl lg:text-6xl">
          My Projects Highlight
        </h2>
        <Link to={Paths.PROJECTS} className="w-fit">
          <InteractiveHoverButton className="uppercase bg-button-primary text-[10px] md:text-sm hover:border-button-primary">
            explore more
          </InteractiveHoverButton>
        </Link>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
          {/* background color setting */}
          {/* only take mockup png */}
          {/* later setting bg gradient */}
          {featuredProjects.map((p) => (
            <div key={p.id} className="flex flex-col gap-3">
              <Link to={`projects/${p.slug}`}>
                <img
                  src={p.imageUrl}
                  className="rounded-3xl object-cover object-top aspect-square xl:max-w-lg"
                />
              </Link>
              <div className="flex flex-col gap-1 text-white">
                <p className="text-sm">{p.title}</p>
                <p className="text-xs">{p.category}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};
