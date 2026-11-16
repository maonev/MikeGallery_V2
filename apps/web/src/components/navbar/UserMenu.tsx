import { RainbowButton } from "@/components/ui/rainbow-button";
import { Paths } from "@/routes/paths";
import { Link } from "react-router";

export const UserMenu = () => {
  return (
    <div className="flex items-center justify-between">
      <Link
        to={Paths.REGISTER}
        className="hover:scale-110 hover:transition-all hover:duration-200">
        <RainbowButton>Register</RainbowButton>
      </Link>
    </div>
  );
};
