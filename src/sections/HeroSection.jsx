import React, { useState, useEffect } from "react";
import logoWithText from "../assets/logo-with-text.svg";
import logoWithoutText from "../assets/logo-without-text.svg";

const HeroSection = () => {
  const [showLogoWithText, setShowWithText] = useState(false);

  useEffect(() => {
    document.body.style.overflowY = "hidden";

    const timer = setTimeout(() => {
      setShowWithText(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Enable scrolling once logo with text is shown
    if (showLogoWithText) {
      document.body.style.overflowY = "auto";
    }
  }, [showLogoWithText]);

  return (
    <>
      {showLogoWithText ? (
        <img
          src={logoWithText}
          alt=""
          className=" lg:w-[230px] md:w-[190px] w-[180px] mx-auto  img-with-text"
          style={{ zIndex: 99 }}
        />
      ) : (
        <img
          src={logoWithoutText}
          alt=""
          className="lg:w-[122.9px] md:w-[102px] w-[97.5px] img-without-text mx-auto"
          style={{ zIndex: 999999 }}
        />
      )}
      {/* {!showLogoWithText ? (
        <img
          src={logoWithoutText}
          alt=""
          className="lg:w-[122.9px] md:w-[102px] w-[97.5px] img-without-text mx-auto"
          style={{ zIndex: 999999 }}
        />
      ) : (
        <>
          <img
            src={logoWithText}
            alt=""
            className=" lg:w-[230px] md:w-[190px] w-[180px] mx-auto  img-with-text"
            style={{ zIndex: 99 }}
          />
        </>
      )} */}
    </>
  );
};
export default HeroSection;
