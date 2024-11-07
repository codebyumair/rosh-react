import React, { useRef, useState, useEffect } from "react";
import logoWithText from "../assets/logo-with-text.svg";
import logoWithoutText from "../assets/logo-without-text.svg";
import { BlurText } from "../components/BlurText";
import { motion } from "framer-motion";
import profileDividerGreen from "../assets/divider/profile-divider-green.svg";
import profileDividerRed from "../assets/divider/profile-divider-red.svg";
import { IoLogoInstagram } from "react-icons/io";
import { TiSocialFacebook } from "react-icons/ti";
import { RiTwitterXFill } from "react-icons/ri";
import { IoLogoWhatsapp } from "react-icons/io5";

const Hero = () => {
  const [showLogoWithText, setShowWithText] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWithText(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="background-container h-full overflow-y-scroll hero">
      <div className="h-screen md:pt-40 pt-24 relative top-0 left-0 right-0 bottom-0 w-full hero-section ">
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
              className="absolute lg:w-[230px] md:w-[190px] w-[180px] mx-auto translate-x-[-50%] left-[50%] img-with-text"
              style={{ zIndex: 99 }}
            />
          </>
        )}
      </div>
      <div className="h-screen bg-primary bg-opacity-[.88] md:pt-40 pt-24 w-full about-section md:px-16">
        <img
          src={logoWithText}
          alt=""
          className="sticky lg:w-[230px] md:w-[190px] w-[180px] mx-auto translate-x-[-50%] left-[50%]"
        />
        <h2 className="font-bold mx-auto md:text-xl text-lg text-center my-2 font-dmRegular">
          <BlurText text="Rosh. A legacy etched in glass." delay={50} />
        </h2>
        <div className="px-3">
          <motion.div
            initial="hidden"
            viewport={{ once: true }}
            variants={{
              visible: { opacity: 1, y: 0 },
              hidden: { opacity: 0, y: 100 },
            }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.1 }}
            whileInView="visible"
            className="h-[250px] md:h-[200px] md:flex items-center justify-center flex-col gap-2 profile-desc overflow-y-scroll lg:w-[120ch] text-pretty mx-auto text-center bg-primary rounded-2xl px-4 md:px-8 py-4 md:py-0"
          >
            <img
              src={profileDividerGreen}
              alt=""
              className="md:w-[140px] w-[100px] mx-auto"
            />
            <p className="my-2 md:my-0 text-lg md:text-xl font-ebGroundRegular leading-[1.3rem]">
              We make you look at glass in a different light. As one of the
              pioneers of fusion and stained-glass art in India, each of our
              creation is a symphony of tradition and innovation. Our bespoke
              designs, from radiant murals to intricate glass structures, are
              not just art—they are poetries frozen in glass, capturing the
              essence of beauty and individuality. With every curve, hue, and
              shimmer, we breathe life into spaces, transforming ideas into
              timeless works of art. Our meticulously hand-crafted designs
              transform the ordinary into the extraordinary, elevating the
              aesthetic appeal of any environment.
            </p>
            <img
              src={profileDividerRed}
              alt=""
              className="md:w-[140px] w-[100px] mx-auto"
            />
          </motion.div>
          <motion.div
            initial="hidden"
            viewport={{ once: true }}
            variants={{
              visible: { opacity: 1, x: 0 },
              hidden: { opacity: 0, x: -100 },
            }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            whileInView="visible"
            className="flex items-center justify-center mt-4 gap-2"
          >
            <IoLogoInstagram className="bg-secondary text-white rounded-full size-7 p-1" />
            <TiSocialFacebook className="bg-secondary text-white rounded-full size-7 p-1" />
            <RiTwitterXFill className="bg-secondary text-white rounded-full size-7 p-1" />
            <IoLogoWhatsapp className="bg-secondary text-white rounded-full size-7 p-1" />
          </motion.div>
        </div>
      </div>
      {/* {isScroll ? (
        <div className=" bg-primary bg-opacity-[.88] md:pt-40 pt-24 relative top-0 left-0 right-0 bottom-0 w-full about-section">
          <img
            src={logoWithText}
            alt=""
            className="sticky lg:w-[230px] md:w-[190px] w-[180px] mx-auto translate-x-[-50%] left-[50%]"
            style={{ zIndex: 99 }}
          />
          <h2 className="font-bold mx-auto md:text-xl text-lg text-center my-2 font-dmRegular">
            <BlurText text="Rosh. A legacy etched in glass." delay={50} />
          </h2>
          <div className="px-3">
            <motion.div
              initial="hidden"
              viewport={{ once: true }}
              variants={{
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: 100 },
              }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.1 }}
              whileInView="visible"
              className="h-[250px] md:h-[200px] grid place-items-center profile-desc overflow-y-scroll md:w-[130ch] text-pretty mx-auto text-center bg-primary rounded-2xl px-4 md:px-8 py-4"
            >
              <img
                src={profileDividerGreen}
                alt=""
                className="md:w-[140px] w-[100px] mx-auto"
              />
              <p className="mb-2 mt-[.35rem] md:mt-1 text-lg md:text-xl font-ebGroundRegular leading-[1.3rem] md:leading-[1.35rem]">
                We make you look at glass in a different light. As one of the
                pioneers of fusion and stained-glass art in India, each of our
                creation is a symphony of tradition and innovation. Our bespoke
                designs, from radiant murals to intricate glass structures, are
                not just art—they are poetries frozen in glass, capturing the
                essence of beauty and individuality. With every curve, hue, and
                shimmer, we breathe life into spaces, transforming ideas into
                timeless works of art. Our meticulously hand-crafted designs
                transform the ordinary into the extraordinary, elevating the
                aesthetic appeal of any environment.
              </p>
              <img
                src={profileDividerRed}
                alt=""
                className="md:w-[140px] w-[100px] mx-auto"
              />
            </motion.div>
            <motion.div
              initial="hidden"
              viewport={{ once: true }}
              variants={{
                visible: { opacity: 1, x: 0 },
                hidden: { opacity: 0, x: -100 },
              }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
              whileInView="visible"
              className="flex items-center justify-center mt-4 gap-2"
            >
              <IoLogoInstagram className="bg-secondary text-white rounded-full size-7 p-1" />
              <TiSocialFacebook className="bg-secondary text-white rounded-full size-7 p-1" />
              <RiTwitterXFill className="bg-secondary text-white rounded-full size-7 p-1" />
              <IoLogoWhatsapp className="bg-secondary text-white rounded-full size-7 p-1" />
            </motion.div>
          </div>
        </div>
      ) : (
        <div className="h-screen md:pt-40 pt-24 absolute top-0 left-0 right-0 bottom-0 w-full hero-section">
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
                className="absolute lg:w-[230px] md:w-[190px] w-[180px] mx-auto translate-x-[-50%] left-[50%] img-with-text"
                style={{ zIndex: 99 }}
              />
            </>
          )}
        </div>
      )} */}
    </div>
  );
};

export default Hero;
