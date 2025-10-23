import React from "react";
import userIcon from "../assets/user.png";
import { Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { use } from "react";
// import { Link } from "react-router-dom";

const Navbar = () => {
  const { user } = use(AuthContext);

  return (
    <div className="w-11/12 mx-auto py-5 border-b-1 border-gray-300">
      <div className="navbar ">
        {/* Navbar Start */}
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li className="text-accent">
                <a>Home</a>
              </li>
            </ul>
          </div>
          <a className="text-3xl font-bold text-gray-950">
            Toy <span className="text-red-500">Topia</span>
          </a>
        </div>

        {/* Navbar Center */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li className="text-2xl text-accent font-medium">
              <Link to="/">Home</Link>
            </li>
          </ul>
        </div>

        {/* Navbar End */}
        <div className="navbar-end flex items-center gap-4">
          <img
            src={userIcon}
            alt="user"
            className="w-10 h-10 rounded-full border border-gray-300 object-cover"
          />
          <Link
            to="/auth/login"
            className="btn bg-secondary text-white text-xl px-4"
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
