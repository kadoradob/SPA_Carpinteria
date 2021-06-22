import React, { useContext } from "react";
import { Link, NavLink, useHistory } from "react-router-dom";
import { AuthContext } from "../auth/AuthContext";
import { types } from "../types/types";
import logo from "../../logos/logo.jpg";

export const Navbar = () => {
  const { dispatch } = useContext(AuthContext);

  const history = useHistory();

  const {
    user: { name },
  } = useContext(AuthContext);

  const handleLogout = () => {
    dispatch({
      type: types.logout,
      payload: {
        name: "",
        logged: false,
      },
    });
    history.replace("/login");
  };

  return (
    <nav className="flex flex-wrap items-center p-2 bg-white shadow-md">
      <Link className="inline-flex items-center p-2 mr-4" to="/">
        <img src={logo} alt="logo" className="h-16"/>
      </Link>
      {/* Menu responsive */}
      <button className="inline-flex p-3 ml-auto text-black rounded outline-none hover:bg-red-500 lg:hidden hover:text-white nav-toggler" data-target="#navigation">
        <i className="material-icons">menu</i>
      </button>
      <div
        className="hidden w-full top-navbar lg:inline-flex lg:flex-grow lg:w-auto"
        id="navigation"
      >
        <div className="flex flex-col items-start w-full lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto lg:items-center lg:h-auto">
          <NavLink
            activeclassName="active"
            className="items-center justify-center w-full px-3 py-2 text-black no-underline rounded lg:inline-flex lg:w-auto hover:bg-red-600 hover:text-white"
            exact
            to="/marvel"
          >
            Vertical
          </NavLink>

          <NavLink
            activeclassName="active"
            className="items-center justify-center w-full px-3 py-2 text-black no-underline rounded lg:inline-flex lg:w-auto hover:bg-red-600 hover:text-white"
            exact
            to="/horizontalesLC"
          >
            horizontalesLC
          </NavLink>

          <NavLink
            activeclassName="active"
            className="items-center justify-center w-full px-3 py-2 text-black no-underline rounded lg:inline-flex lg:w-auto hover:bg-red-600 hover:text-white"
            exact
            to="/horizontalesHC"
          >
            horizontalesHC
          </NavLink>
          
          <NavLink
            activeclassName="active"
            class="flex no-underline items-center justify-center w-6 h-6 px-4 py-4 font-bold text-red-600 transition duration-300 ease-in-out transform bg-red-200 rounded-full shadow-lg lg:mx-0 focus:outline-none focus:shadow-outline hover:bg-red-500 hover:text-white hover:scale-105 mx-4"
            exact
            to="/search"
          >
            <i class="fas fa-search"></i>
          </NavLink>
        </div>
      </div>
    </nav>
  );
};
