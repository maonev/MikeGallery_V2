import { Container } from "@/components/Container";
import { ShinyButton } from "@/components/ui/shiny-button";
import { Paths } from "@/routes/paths";
import { motion } from "motion/react";
import { Link } from "react-router";

export const HeroSection = () => {
  return (
    <Container className="flex flex-col gap-20 md:flex-row md:items-center">
      <div className="flex flex-col gap-3 md:gap-5 xl:pr-50">
        <h1 className="text-4xl text-white lg:text-6xl">
          Let's get know about me closer
        </h1>
        <p className="text-[#979797] text-sm">
          Aaronn is a New York-based visual designer focusing on branding and
          visual identity. Her portfolio showcases her wide range of work,
          spanning books, posters and web design.
        </p>
        <Link to={Paths.ABOUT} className="py-8 w-fit">
          <ShinyButton className="bg-button-primary font-bold rounded-2xl text-black text-xs">
            More About Me
          </ShinyButton>
        </Link>
      </div>
      <div className="relative w-full max-w-sm">
        <img
          src="../../../public/img/michaels.jpg"
          alt=""
          className="rounded-3xl object-cover object-top aspect-square md:aspect-3/4"
        />

        <motion.span
          aria-hidden
          className="absolute -top-3 right-4 h-6 w-20 rounded-full border border-button-primary"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />

        <motion.span
          aria-hidden
          className="absolute -left-4 bottom-10 h-24 w-8 rounded-full border border-button-primary"
          animate={{ y: [0, 12, 0], opacity: [0.5, 1, 0.5] }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
      </div>
    </Container>
  );
};
