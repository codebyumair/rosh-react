import React, { useState, useEffect } from "react";
import logoWithText from "../assets/logo-with-text.svg";
import logoWithoutText from "../assets/logo-without-text.svg";

const HeroSection = () => {
  const [showLogoWithText, setShowLogoWithText] = useState(false);

  useEffect(() => {
    document.body.style.overflowY = "hidden";

    const timer = setTimeout(() => {
      setShowLogoWithText(true);
    }, 3000); // Show logo-with-text after 3 seconds

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (showLogoWithText) {
      document.body.style.overflowY = "auto"; // Enable scrolling
    }
  }, [showLogoWithText]);

  return (
    <>
      {!showLogoWithText ? (
        <img
          src={logoWithoutText}
          loading="lazy"
          alt="Rosh - Poetry In Glass Logo"
          className="lg:w-[122.9px] md:w-[102px] w-[97.5px] img-without-text mx-auto"
          style={{ zIndex: 999999 }}
        />
      ) : (
        <img
          src={logoWithText}
          loading="lazy"
          alt="Rosh - Poetry In Glass Logo"
          className="absolute lg:w-[230px] md:w-[190px] w-[180px] mx-auto translate-x-[-50%] left-[50%] img-with-text"
          style={{ zIndex: 99 }}
        />
      )}
    </>
  );
};

export default HeroSection;
