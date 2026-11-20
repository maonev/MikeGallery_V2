import { Container } from "@/components/Container";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import { Paths } from "@/routes/paths";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router";

type Project = {
  id: number;
  src: string;
  name: string;
  type: string;
  alt: string;
};

const projects: Project[] = [
  {
    id: 1,
    src: "/projects/projects.png",
    name: "Crtly",
    type: "Mobile App",
    alt: "",
  },
  {
    id: 2,
    src: "/projects/projects.png",
    name: "Crtly",
    type: "Mobile App",
    alt: "",
  },
  {
    id: 3,
    src: "/projects/projects.png",
    name: "Crtly",
    type: "Mobile App",
    alt: "",
  },
  {
    id: 4,
    src: "/projects/projects.png",
    name: "Crtly",
    type: "Mobile App",
    alt: "",
  },
];

export const ProjectsHighlightSection = () => {
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
          {projects.map((p) => (
            <div key={p.id} className="flex flex-col gap-3">
              <Link to={Paths.PROJECTS}>
                <img
                  src={p.src}
                  alt={p.alt}
                  className="rounded-3xl object-cover object-top aspect-square xl:max-w-lg"
                />
              </Link>
              <div className="flex flex-col gap-1 text-white">
                <p className="text-sm">{p.name}</p>
                <p className="text-xs">{p.type}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};
