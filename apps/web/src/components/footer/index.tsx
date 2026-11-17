import { Logo } from "../logo";
import {
  FaInstagram,
  FaSquareFacebook,
  FaSquareXTwitter,
} from "react-icons/fa6";

export const Footer = () => {
  return (
    <footer>
      <div>
        <div>
          <h2>Get in Touch With Us</h2>
          <span>info@aaron.com</span>
        </div>
        <div>
          <Logo />
          <div>
            <p>Street Avenue 21, CA</p>
            <p>123456789</p>
          </div>
          <div>
            <p>+6281234567890</p>
            <div>
              <FaSquareFacebook />
              <FaSquareXTwitter />
              <FaInstagram />
            </div>
          </div>
        </div>
        <hr />
        <h2></h2>
      </div>
    </footer>
  );
};
