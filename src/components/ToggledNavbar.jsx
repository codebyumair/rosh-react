import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { NavLink } from "react-router-dom";
import sunrays from "../assets/sunrays.svg";

const ToggledNavbar = ({ toggleNavbar, setNavbar, navbar, navRef }) => {
  const handleLinkClick = () => {
    setNavbar(false);
    navRef.current.classList.remove("toggle-navbar");
  };

  return (
    <div
      className="navbar flex flex-col right-[.9rem] md:right-[3.5rem] rounded-xl bg-primary border border-borderColor"
      ref={navRef}
    >
      <div className="p-2 flex flex-col gap-1">
        <p className="uppercase text-borderColor font-bold text-sm my-2">
          Our products
        </p>
        <NavLink
          to="/outdoor"
          onClick={handleLinkClick}
          className="py-1 bg-secondary rounded-lg px-2"
        >
          Outdoor
        </NavLink>
        <NavLink
          to="/gift"
          onClick={handleLinkClick}
          className="py-1 bg-secondary rounded-lg px-2"
        >
          Gifts
        </NavLink>
      </div>
    </div>
  );
};

export default ToggledNavbar;
