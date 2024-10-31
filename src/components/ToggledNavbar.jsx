import React from "react";
import gift from "../assets/icons/gift.svg";
import frame from "../assets/icons/frame.svg";
import home from "../assets/icons/home.svg";
import { NavLink } from "react-router-dom";

const ToggledNavbar = ({ toggleNavbar, setNavbar, navbar, navRef }) => {
  const handleLinkClick = () => {
    setNavbar(false);
    navRef.current.classList.remove("toggle-navbar");
  };

  return (
    <div
      className="navbar flex flex-col gap-1 right-[.9rem] md:right-[3.5rem] rounded-xl bg-primary border border-borderColor p-2 shadow-xl"
      ref={navRef}
    >
      <NavLink
        to="/"
        onClick={handleLinkClick}
        className="flex items-center gap-2 group hover:bg-secondary transition-all delay-100 rounded-lg p-1 pr-4"
      >
        <div className="w-[30px] h-[30px] rounded-md bg-borderColor flex items-center justify-center">
          <img src={home} alt="" className="w-[24px]" />
        </div>
        <span>HOME</span>
      </NavLink>
      <NavLink
        to="/gift"
        onClick={handleLinkClick}
        className="flex items-center gap-2 group hover:bg-secondary transition-all delay-100 rounded-lg p-1 pr-4"
      >
        <div className="w-[30px] h-[30px] rounded-md bg-borderColor flex items-center justify-center">
          <img src={gift} alt="" className="w-[24px]" />
        </div>
        <span>GIFT</span>
      </NavLink>
      <NavLink
        to="/outdoor"
        onClick={handleLinkClick}
        className="flex items-center gap-2 group hover:bg-secondary transition-all delay-100 rounded-lg p-1 pr-4"
      >
        <div className="w-[30px] h-[30px] rounded-md bg-borderColor flex items-center justify-center">
          <img src={frame} alt="" className="w-[24px]" />
        </div>
        <span>OUTDOOR</span>
      </NavLink>
    </div>
  );
};

export default ToggledNavbar;
