import React, { useRef, useState, useEffect } from "react";
import logoWithText from "../assets/logo-with-text.svg";
import logoWithoutText from "../assets/logo-without-text.svg";

const Hero = () => {
  const [showLogoWithText, setShowWithText] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWithText(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="background-container h-screen overflow-y-scroll">
      <div className="h-screen md:pt-40 pt-20">
        {!showLogoWithText ? (
          <img
            src={logoWithoutText}
            alt=""
            className="lg:w-[122.9px] md:w-[102px] w-[97.5px] img-without-text mx-auto"
            style={{ zIndex: 99999 }}
          />
        ) : (
          <>
            <img
              src={logoWithText}
              alt=""
              className="fixed lg:w-[230px] md:w-[190px] w-[180px] mx-auto translate-x-[-50%] left-[50%] img-with-text"
              style={{ zIndex: 99 }}
            />
          </>
        )}
      </div>
      <div className="h-screen bg-primary bg-opacity-[.88]">sdsda</div>
    </div>
  );
};
export default Hero;
