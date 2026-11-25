import type { SectionProject } from "@/data/project";

export const ProjectSection = ({ section }: { section: SectionProject }) => {
  const hasMultipleImages = section.imageUrls.length > 1;

  return (
    <section className="flex flex-col gap-6 md:gap-8">
      <div
        className={`grid grid-cols-1 gap-4 md:gap-6 ${
          hasMultipleImages ? "md:grid-cols-2" : ""
        }`}
      >
        {section.imageUrls.map((url) => (
          <img
            key={url}
            src={url}
            alt={`${section.title}`}
            loading="lazy"
            className="aspect-4/3 w-full rounded-2xl object-cover"
          />
        ))}
      </div>

      <div className="flex flex-col gap-3 md:px-10">
        <h2 className="text-xl font-semibold md:text-2xl text-white lg:text-4xl">{section.title}</h2>
        <p className="text-sm leading-relaxed text-white/70 text-justify lg:text-base">
          {section.description}
        </p>
      </div>
    </section>
  );
};