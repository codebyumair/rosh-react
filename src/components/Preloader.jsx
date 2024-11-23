import React from "react";

const Preloader = ({ title }) => {
  return (
    <div className="preloader h-screen w-full flex items-center justify-center bg-primary">
      <div className="loader">
        {/* You can use an animation or spinner here */}
        <div className="spinner mx-auto"></div>
        <p className="text-secondary uppercase text-center md:text-[2rem] text-lg mt-4 title-font">
          {title}
        </p>
      </div>
    </div>
  );
};

export default Preloader;
