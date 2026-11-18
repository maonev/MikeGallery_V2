import { CircleLetterC } from "lucide-react";
import { Logo } from "../logo";
import {
  FaSquareFacebook,
  FaSquareInstagram,
  FaSquareXTwitter,
} from "react-icons/fa6";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="p-8 bg-background-secondary text-white">
      <div className="flex flex-col gap-5 md:gap-12 w-full max-w-6xl mx-auto">
        <div className="flex flex-col md:text-center">
          <span className="text-button-primary text-xs">Get in Touch With Us</span>
          <span className="text-2xl underline underline-offset-8 lg:underline-offset-10 decoration-2 md:text-4xl lg:text-5xl">info@aaron.com</span>
        </div>
        <div className="w-full flex flex-col gap-6 md:items-center md:grid md:grid-cols-3 md:py-6">
          <Logo />
          <div className="text-sm flex flex-col md:text-base md:justify-self-center">
            <span>Street Avenue 21, CA</span>
            <span>123456789</span>
          </div>
          <div className="flex flex-col text-sm md:text-base md:justify-self-end">
            <span>+6281234567890</span>
            <div className="flex gap-2 text-xl">
              <FaSquareFacebook />
              <FaSquareXTwitter />
              <FaSquareInstagram />
            </div>
          </div>
        </div>
        <hr className="border-white/20"/>
        <span className="flex gap-1 text-sm items-center md:justify-center my-4">
          <span>
            <CircleLetterC size={10} />
          </span>
          {currentYear}. MikeGallery. All rights reserved.
        </span>
      </div>
    </footer>
  );
};
