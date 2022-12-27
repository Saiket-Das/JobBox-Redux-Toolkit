import React from "react";

import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const { pathname } = useLocation();

  return (
    <nav
      className={`h-16 py-10 fixed w-full z-[999] ${
        pathname === "/" ? null : "bg-white"
      }`}
    >
      <ul className="max-w-7xl mx-auto flex gap-3 h-full items-center">
        <li className="flex-auto font-semibold text-2xl ">
          <Link to="/" className="hover:text-primary">
            JobBox
          </Link>
        </li>
        <li>
          <Link className="hover:text-primary" to="/jobs">
            Jobs
          </Link>
        </li>

        <li>
          <Link
            className="border border-black px-4 py-2 rounded-full hover:border-primary hover:text-white hover:bg-primary  transition-all "
            to="/login"
          >
            Login
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
