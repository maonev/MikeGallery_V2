import { Paths } from "@/routes/paths";
import { Link } from "react-router";
import { motion } from "motion/react";

type NavItem = {
  label: string;
  href: string;
  badge?: number;
};

export const NavLinks: NavItem[] = [
  { label: "Home", href: Paths.HOME },
  { label: "Projects", href: Paths.PROJECTS, badge: 10 },
  { label: "About", href: Paths.ABOUT },
  { label: "Contact", href: Paths.CONTACT },
];

type Props = NavItem & {
  active: boolean;
  highlighted: boolean;
  onHover: (href: string) => void;
};

export const NavLink = ({
  label,
  href,
  badge,
  active,
  highlighted,
  onHover,
}: Props) => (
  <Link
    to={href}
    aria-current={active ? "page" : undefined}
    onMouseEnter={() => onHover(href)}
    className={`relative flex items-center rounded-full py-2 text-sm font-medium transition-colors duration-300 sm:px-5 ${
      highlighted ? "text-black" : "text-zinc-400"
    }`}>
    {highlighted && (
      <motion.span
        layoutId="nav-pill"
        className="absolute inset-0 rounded-full bg-white shadow-md"
        transition={{ type: "spring", stiffness: 400, damping: 30 }}
      />
    )}

    {badge != null && (
      <span className="relative z-10 grid size-5 place-items-center rounded-full bg-zinc-600 text-[10px] text-white mr-1">
        {badge}
      </span>
    )}
    <span className="relative z-10">{label}</span>
  </Link>
);
