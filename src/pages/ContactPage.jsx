import Footer from "../components/Footer";
import green from "../assets/icons/green.svg";
import red from "../assets/icons/red.svg";
import { CiMobile3 } from "react-icons/ci";
import { TfiEmail } from "react-icons/tfi";
import React, { useState, useEffect } from "react";
import Preloader from "../components/Preloader";

const ContactPage = () => {
  const [isLoaded, setIsLoaded] = useState(false); // State to control preloader

  useEffect(() => {
    // Simulate loading time for preloader
    const timer = setTimeout(() => {
      setIsLoaded(true); // Set `isLoaded` to true after preloader finishes
    }, 1500); // Adjust the delay as needed

    return () => clearTimeout(timer); // Clear the timer on unmount
  });
  return (
    <>
      {!isLoaded ? (
        <Preloader title="Contact" />
      ) : (
        <div className="background-container h-screen overflow-y-scroll scroll-smooth snap-y snap-mandatory">
          <div className="bg-primary md:pt-24 pt-24 bg-opacity-[.88] h-screen flex items-center justify-center">
            <div className="container mx-auto px-4 md:px-8 flex flex-col gap-4">
              <h2 className="font-dmRegular md:text-4xl text-2xl text-center border border-l-0 border-r-0 w-fit mx-auto border-black md:py-2 py-2 relative">
                <img
                  src={green}
                  alt=""
                  className="md:w-[12px] w-[10px] mx-auto absolute left-[50%] top-[-5px] md:top-[-6px]"
                />
                Contact US
                <img
                  src={red}
                  alt=""
                  className="md:w-[12px] w-[10px] mx-auto absolute left-[50%] bottom-[-5px] md:bottom-[-6px]"
                />
              </h2>
              <div className="font-ebGroundRegular text-center">
                <p className="md:text-7xl text-3xl md:mb-[2rem]">
                  Let's start a project together
                </p>
                <div className="flex justify-center items-center md:flex-row flex-col">
                  <a
                    href="mailto:roshpoetryinglass@gmail.com?subject=Query - Rosh"
                    className="flex items-center justify-center gap-3 font-ebGroundRegular font-bold px-4 hover:bg-secondary active:bg-secondary  bg-secondary py-3 rounded-[80px] md:mt-4 w-fit mx-auto my-6 transition-all delay-100"
                  >
                    <TfiEmail className="text-3xl" />
                    roshpoetryinglass@gmail.com
                  </a>
                  <a
                    href="tel:+91 9769556070"
                    className="flex items-center justify-center gap-2 font-ebGroundRegular font-bold px-4 hover:bg-secondary active:bg-secondary  bg-secondary py-3 rounded-[80px] md:mt-4 md:w-fit mx-auto my-6 transition-all delay-100"
                  >
                    <CiMobile3 className="text-3xl" />
                    +91 9769556070
                  </a>
                  <a
                    href="tel:+91 7977043269"
                    className="flex items-center justify-center gap-2 font-ebGroundRegular font-bold px-4 hover:bg-secondary active:bg-secondary  bg-secondary py-3 rounded-[80px] md:mt-4 md:w-fit mx-auto my-6 transition-all delay-100"
                  >
                    <CiMobile3 className="text-3xl" />
                    +91 7977043269
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-primary bg-opacity-[.88]">
            <Footer />
          </div>
        </div>
      )}
    </>
  );
};
export default ContactPage;
