import { Link } from "react-router";
import logoImg from "../../../public/favicon.svg";
import { Paths } from "@/routes/paths";

export const Logo = () => {
  return (
    <Link to={Paths.HOME}>
      <img src={logoImg} alt="logo" className="w-16 md:w-20 h-auto" />
    </Link>
  );
};
