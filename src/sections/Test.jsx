import React from "react";
import logoWithoutText from "../assets/logo-without-text.svg";
const Test = () => {
  return (
    <div className="background-container h-full overflow-y-scroll">
      <div className="h-[200vh] border-4 border-red relative pt-36">
        <div className="size-40 mx-auto bg-red flex items-center justify-center text-white text-9xl sticky left-[50%] translate-x-[-50%] top-[10rem] ">
          <img
            src={logoWithoutText}
            className="w-full h-full object-contain"
            alt=""
          />
        </div>
        <div className="bg-primary h-full">
          <div className="size-40 mt-[100vh] mx-auto bg-green flex items-center justify-center text-white text-9xl">
            1
          </div>
        </div>
      </div>
      <div className="h-screen flex items-center justify-center border-4 border-green"></div>
    </div>
  );
};

export default Test;
