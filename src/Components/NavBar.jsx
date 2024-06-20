import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div className="flex gap-10 lg:gap-20 justify-between bg-gradient-to-r from-sky-500 to-indigo-500 py-4">
      <div className="flex gap-2 items-center flex-shrink-0 ml-4">
        <button className="btn bg-primary text-black border-none">
          <NavLink to="/">Home</NavLink>
        </button>
        <button className="btn bg-primary text-black border-none">
          <NavLink to="/resume">Resume</NavLink>
        </button>
        <button className="btn bg-primary text-black border-none">
          <NavLink to="/projects">Projects</NavLink>
        </button>
      </div>
      <div className="flex flex-shrink-0 md:gap-2 mr-4">
        <button className="btn bg-primary text-black border-none">
          <NavLink to="/contact">Contact</NavLink>
        </button>
      </div>
    </div>
  );
}

export default NavBar;
