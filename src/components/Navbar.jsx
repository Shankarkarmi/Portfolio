import logo from "../assets/images/ShankarKarmiLogo.png";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { FaSquareTwitter } from "react-icons/fa6";

const Navbar = () => {
  return (
    <nav className="mb-20 w-full flex justify-between items-center py-6 px-10 lg:px-20 ">
      <div className="flex items-center">
        <img className="mx-2" width={60} src={logo} alt="Shankar Karmi Logo"/>
      </div>
      <div className="flex m-8 items-center justify-center gap-4 text-2xl">
        <a href="https://www.linkedin.com/in/shankar-karmi-878914262/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://github.com/Shankarkarmi" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="https://www.instagram.com/shankar_karmi/?utm_source=qr&igsh=cWpxYm5udHlxNmJs#" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
        <a href="https://twitter.com/shankarkarmi" target="_blank" rel="noopener noreferrer">
          <FaSquareTwitter />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
