import { NavLink } from "react-router-dom";
import { FaLinkedin, FaMedium } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

function NavBar() {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <NavLink to="/">
          <img
            src="./Images/cleanlogo.png"
            alt="David Kerr"
            className="mx-2 w-24"
          />
        </NavLink>
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a
          href="https://www.linkedin.com/in/david-kerr-358b33297/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/Dkerr2061"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
        <a
          href="https://medium.com/@kerrky"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaMedium />
        </a>
        <NavLink to="/resume">Resume</NavLink>
      </div>
    </nav>
  );
}

export default NavBar;
