import { Paths } from "@/routes/paths";
import { NavLink, NavLinks } from "./Navlink";
import { useLocation } from "react-router";
import { useState } from "react";

const isActive = (href: string, path: string) =>
  href === Paths.HOME ? path === Paths.HOME : path.startsWith(href);

export const NavMenu = () => {
  const { pathname } = useLocation();
  const [hovered, setHovered] = useState<string | null>(null);
  const activeHref =
    NavLinks.find((l) => isActive(l.href, pathname))?.href ?? null;
  const highlightedHref = hovered ?? activeHref;

  return (
    <div
      onMouseLeave={() => setHovered(null)}
      className="text-white flex gap-3 bg-background-secondary rounded-full">
      {NavLinks.map((link) => (
        <NavLink
          key={link.href}
          {...link}
          active={link.href === activeHref}
          highlighted={link.href === highlightedHref}
          onHover={setHovered}
        />
      ))}
    </div>
  );
};
