import React, { useRef, useState, useEffect } from "react";
import logoWithText from "../assets/logo-with-text.svg";
import logoWithoutText from "../assets/logo-without-text.svg";
import { useInView } from "react-intersection-observer";
import { BlurText } from "../components/BlurText";
import { motion } from "framer-motion";
import profileDividerGreen from "../assets/divider/profile-divider-green.svg";
import profileDividerRed from "../assets/divider/profile-divider-red.svg";
import { IoLogoInstagram } from "react-icons/io";
import { TiSocialFacebook } from "react-icons/ti";
import { RiTwitterXFill } from "react-icons/ri";
import { IoLogoWhatsapp } from "react-icons/io5";

const HeroSection = () => {
  const [showLogoWithText, setShowWithText] = useState(false);
  const { ref: heroRef, inView: isVisible } = useInView();

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWithText(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <div ref={heroRef}>
      <section className="h-full md:pt-40 pt-36 relative">
        <div className="h-screen">
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
                className={`${
                  isVisible ? "fixed" : "sticky"
                } lg:w-[230px] md:w-[190px] w-[180px] mx-auto translate-x-[-50%] left-[50%] img-with-text`}
                style={{ zIndex: 99 }}
              />
            </>
          )}
        </div>
        <div className="bg-opacity-[.88] bg-primary h-screen md:pt-40 pt-36 px-4 md:px-16">
          <img
            src={logoWithText}
            alt=""
            className={` sticky lg:w-[230px] md:w-[190px] w-[180.5px] mx-auto translate-x-[-50%] left-[50%] border border-red invisible`}
            style={{ zIndex: 9999 }}
          />
          <h2 className="font-bold mx-auto md:text-xl text-lg text-center my-2 font-dmRegular">
            <BlurText text="Rosh. A legacy etched in glass." delay={50} />
          </h2>
          <motion.div
            initial="hidden"
            viewport={{ once: true }}
            variants={{
              visible: { opacity: 1, y: 0 },
              hidden: { opacity: 0, y: 100 },
            }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.1 }}
            whileInView="visible"
            className="h-[280px] md:h-[200px] profile-desc overflow-y-scroll md:w-[130ch] text-pretty mx-auto text-center py-4 px-4 md:px-8 bg-primary rounded-2xl"
          >
            <img
              src={profileDividerGreen}
              alt=""
              className="md:w-[140px] w-[100px] mx-auto"
            />
            <p className="my-2 text-lg md:text-xl font-ebGroundRegular leading-[1.3rem] md:leading-[1.35rem]">
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
      </section>
    </div>
  );
};
export default HeroSection;
