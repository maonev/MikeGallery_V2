import { useEffect, useState } from "react";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { UserMenu } from "./UserMenu";
import { NavMenu } from "./NavMenu";
import { NavLinks } from "./Navlink";
import { Link } from "react-router";
import { Paths } from "@/routes/paths";
import { Logo } from "../logo";
import { AnimatePresence, motion } from "motion/react";
import { Menu, X } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

export const Navbar = () => {
  const flexBetween = "flex items-center justify-between";

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const isAboveLargeScreen = useMediaQuery("(min-width: 1024px)");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav>
      <motion.div
        animate={{
          backgroundColor: scrolled ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0)",
          backdropFilter: scrolled ? "blur(14px)" : "blur(0px)",
          boxShadow: scrolled
            ? "0 2px 24px 0 rgba(0,0,0,0.08)"
            : "0 0px 0px 0 rgba(0,0,0,0)",
        }}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className={`${flexBetween} py-5 top-0 fixed z-20 w-full`}
        style={{ WebkitBackdropFilter: scrolled ? "blur(14px)" : "blur(0px)" }}>
        <div className={`${flexBetween} mx-auto w-7/8`}>
          {/* left logo */}
          <Logo />

          {/* center navlink (desktop) */}
          {isAboveLargeScreen && <NavMenu />}

          {/* register button (desktop) || ham-menu (mobile) */}
          {isAboveLargeScreen ? (
            <UserMenu />
          ) : (
            <DropdownMenu open={isMenuOpen} onOpenChange={setIsMenuOpen}>
              <DropdownMenuTrigger
                className="outline-none focus-visible:outline-none"
                aria-label="Toggle menu">
                <AnimatePresence mode="wait" initial={false}>
                  {isMenuOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}>
                      <X className="h-8 w-8 text-white" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="bars"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}>
                      <Menu className="h-8 w-8 text-white" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </DropdownMenuTrigger>

              <DropdownMenuContent
                align="end"
                className="bg-background-secondary mt-2 text-gray-300 md:w-70">
                <DropdownMenuGroup>
                  {NavLinks.map((link, i) => (
                    <div key={link.href}>
                      <DropdownMenuItem
                        render={
                          <Link
                            to={link.href}
                            className="w-full cursor-pointer"
                          />
                        }>
                        {link.label}
                      </DropdownMenuItem>
                      {i < NavLinks.length - 1}
                    </div>
                  ))}
                </DropdownMenuGroup>

                <DropdownMenuSeparator />

                <DropdownMenuGroup>
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  {/* change path later */}
                  <DropdownMenuItem render={<Link to={Paths.LOGIN} />}>
                    Profile
                  </DropdownMenuItem>
                </DropdownMenuGroup>

                <DropdownMenuSeparator />
                {/* for un-auth user later */}
                <div className="p-2">
                  <UserMenu />
                </div>
              </DropdownMenuContent>
            </DropdownMenu>
          )}
        </div>
      </motion.div>
    </nav>
  );
};
