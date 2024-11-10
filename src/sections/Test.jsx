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
import founder1 from "../assets/profile/Rosh-Abdullah-Khandwani-Profile-photos.png";
import founder2 from "../assets/profile/Rosh-Aabid-Surti-Profile-photos.png";
import founder3 from "../assets/profile/Rosh-Roshan-Khan-Profile-photos.png";
import product1 from "../assets/products/In-a-washroom-mirror.png";
import product2 from "../assets/products/Wall-hanging-beautiful-glass-lady.png";
import product3 from "../assets/products/For-wall-Hanging-Krishna.png";
import product4 from "../assets/products/INTERNATIONAL-SCHOOL-OF-ANCIENT-WISDOM.png";
import product5 from "../assets/products/Stained-glass-ceiling-in-conference-room.png";
import product6 from "../assets/products/A-thick-glass-mural.png";
import product7 from "../assets/products/A-kitchen-wall-made-by-fused-glass.png";
import product8 from "../assets/products/Tagged-glass-partition-between-living-room-and-dining.png";
import product9 from "../assets/products/A-glass-partition-panel-in-Reception-area.png";
import product10 from "../assets/products/Fusioned-glass-map-of-Indian.png";
import product11 from "../assets/products/Om-Table-show-piece.png";
import product12 from "../assets/products/A-unique-glass-Ashtray.png";
import product13 from "../assets/products/Double-side-photo-frame-two-in-one.png";
import sunrays from "../assets/icons/sunrays.svg";
import Footer from "../components/Footer";

const Test = () => {
  const [showLogoWithText, setShowWithText] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWithText(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="h-screen overflow-y-scroll scroll-smooth snap-y snap-mandatory">
      <div className="h-screen md:pt-40 pt-24 relative snap-start ">
        {!showLogoWithText ? (
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
              className="absolute lg:w-[230px] md:w-[190px] w-[180px] mx-auto translate-x-[-50%] left-[50%] img-with-text"
              style={{ zIndex: 99 }}
            />
          </>
        )}
      </div>
      <div className="h-screen bg-primary bg-opacity-[.88] md:pt-40 pt-24 snap-start">
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
            className="h-[225px] md:h-[180px] md:flex items-start justify-start flex-col gap-2 profile-desc overflow-y-scroll lg:w-[120ch] text-balance text-center mx-auto bg-primary rounded-2xl px-4 md:px-0 py-4 md:py-4"
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
              aesthetic <br /> appeal of any environment.
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
      <div className="h-screen bg-primary bg-opacity-[.88] md:pt-40 pt-24 md:px-16 snap-start">
        <img src={founder1} alt="" className="md:w-[350px] w-[260px] mx-auto" />
        <div className="flex md:flex-row flex-col items-center justify-center h-fit">
          <h2 className="w-max font-bold md:text-xl text-lg text-center mt-2 md:mt-2 md:mb-2 font-dmRegular">
            <BlurText text="Abdullah Khandwani." delay={50} />
          </h2>
          <h2 className="w-max font-bold md:text-xl text-lg text-center -mt-2 md:mt-2 md:mb-2 mb-2 font-dmRegular">
            <BlurText text="A pioneer par excellence." delay={50} />
          </h2>
        </div>
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
            className="h-[225px] md:h-[200px] md:flex items-start justify-start flex-col gap-2 profile-desc overflow-y-scroll lg:w-[120ch] text-balance text-center mx-auto bg-primary rounded-2xl px-4 md:px-0 py-4 md:py-4"
          >
            <img
              src={profileDividerGreen}
              alt=""
              className="md:w-[140px] w-[100px] mx-auto"
            />
            <p className="my-2 md:my-0 text-lg md:text-xl font-ebGroundRegular leading-[1.3rem]">
              Abdullah Khandwani, a creator at heart, is an eminent and renowned
              stained-glass artist from India. He has been instrumental in
              popularizing the art and craft across India and Canada over the
              past three decades.
            </p>
            <p className="my-2 md:my-0 text-lg md:text-xl font-ebGroundRegular leading-[1.3rem]">
              Abdullah Khandwani's innovative approach to glass art reflects a
              deep connection to heritage while pushing the boundaries of modern
              artistic expression, making him a true pioneer in the world of
              stained glass.
            </p>
            <p className="my-2 md:my-0 text-lg md:text-xl font-ebGroundRegular leading-[1.3rem]">
              With a keen eye for detail and an innate understanding of light
              and colour, his work transcends mere decoration, creating
              ethereal, illuminated spaces that captivate the soul.
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
      <div className="h-screen bg-primary bg-opacity-[.88] md:pt-40 pt-24 md:px-16 snap-start">
        <img src={founder2} alt="" className="md:w-[350px] w-[260px] mx-auto" />
        <div className="flex md:flex-row flex-col items-center justify-center h-fit">
          <h2 className="w-max font-bold md:text-xl text-lg text-center mt-2 md:mt-2 md:mb-2 mb-2 font-dmRegular">
            <BlurText text="Aabid Surti. A man of many talents." delay={50} />
          </h2>
        </div>
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
            className="h-[250px] md:h-[200px] md:flex items-start justify-start flex-col gap-2 profile-desc overflow-y-scroll lg:w-[120ch] text-balance text-center mx-auto bg-primary rounded-2xl px-4 md:px-0 py-4 md:py-4"
          >
            <img
              src={profileDividerGreen}
              alt=""
              className="md:w-[140px] w-[100px] mx-auto"
            />
            <p className="my-2 md:my-0 text-lg md:text-xl font-ebGroundRegular leading-[1.3rem]">
              National Award-winning author Aabid Surti is a versatile artist,
              celebrated for his remarkable contributions across various
              creative disciplines. His brilliance shines not only in literature
              but also in the visual arts, where he has earned widespread
              acclaim as a painter. Over the years, he has held 16 prestigious
              exhibitions, both in India and internationally, captivating
              audiences with his distinctive artistic vision.
            </p>
            <p className="my-2 md:my-0 text-lg md:text-xl font-ebGroundRegular leading-[1.3rem]">
              Early in his career, Surti pioneered a groundbreaking technique
              known as 'mirror collage,' a form of art that caught the attention
              of global critics, earning particular praise in Japan for its
              originality and depth.
            </p>
            <p className="my-2 md:my-0 text-lg md:text-xl font-ebGroundRegular leading-[1.3rem]">
              In 1971, the Indian government honoured his contributions by
              commissioning a short film that highlighted his creative genius.
              Surti's talents extend beyond the canvas. As a gifted cartoonist,
              he brought to life 'Dabbuji,' the beloved simpleton whose witty
              and endearing antics resonated with countless readers. Aabid Surti
              continues to make a mark with his boundless creativity and his
              ability to move seamlessly between artistic forms.
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
      <div className="h-screen bg-primary bg-opacity-[.88] md:pt-40 pt-24 md:px-16 snap-start">
        <img src={founder3} alt="" className="md:w-[350px] w-[260px] mx-auto" />
        <div className="flex md:flex-row flex-col items-center justify-center h-fit">
          <h2 className="w-max font-bold md:text-xl text-lg text-center mt-2 md:mt-2 md:mb-2 font-dmRegular">
            <BlurText text="Roshan Ali Khan." delay={50} />
          </h2>
          <h2 className="w-max font-bold md:text-xl text-lg text-center -mt-2 md:mt-2 md:mb-2 mb-2 font-dmRegular">
            <BlurText text="An artist. A shining star." delay={50} />
          </h2>
        </div>
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
            className="h-[225px] md:h-[200px] md:flex items-start justify-start flex-col gap-2 profile-desc overflow-y-scroll lg:w-[120ch] text-balance text-center mx-auto bg-primary rounded-2xl px-4 md:px-0 py-4 md:py-4"
          >
            <img
              src={profileDividerGreen}
              alt=""
              className="md:w-[140px] w-[100px] mx-auto"
            />
            <p className="my-2 md:my-0 text-lg md:text-xl font-ebGroundRegular leading-[1.3rem]">
              Roshan Ali Khan is a celebrated stained-glass artist with over 25
              years of experience in crafting and captivating large-scale
              murals. Her passion for the art form is showcased through her
              Mumbai-based studio, a hub of creativity and craftsmanship, and a
              showcase of her immense talent.
            </p>
            <p className="my-2 md:my-0 text-lg md:text-xl font-ebGroundRegular leading-[1.3rem]">
              Khan's passion for stained glass work was ignited by two
              influential mentors she met after her studies: the renowned artist
              Abdullah Khandwani and the versatile creative genius Aabid Surti,
              an acclaimed painter, writer, and cartoonist.
            </p>
            <p className="my-2 md:my-0 text-lg md:text-xl font-ebGroundRegular leading-[1.3rem]">
              Their guidance has played a pivotal role in shaping her artistic
              journey and illuminating the stained-glass art form scene in the
              country with her unparalleled expertise.
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
      <div className="h-screen overflow-y-scroll pt-28 md:pt-36 bg-primary bg-opacity-[.88] snap-start">
        <div className="container mx-auto px-4 md:px-8">
          <div className="row">
            <div className="products w-full leading-[1.1rem]">
              <div className="product relative border border-r-0 border-black w-[50%] md:w-fit md:rounded-s-[2rem] rounded-s-3xl md:p-3 p-2 flex items-center justify-start md:gap-5 gap-3">
                <img
                  src={sunrays}
                  alt=""
                  className="absolute size-7 md:size-10 -top-[.9rem]  md:-top-[1.30rem] md:left-[100%]  left-[105%] translate-x-[-50%]"
                />
                <img
                  src={product1}
                  alt="product1"
                  className="w-[140px] md:w-[270px]"
                />
                <span className="font-dmRegular  text-sm text-nowrap md:text-wrap md:text-2xl">
                  In a washroom mirror
                </span>
              </div>
              <div className="product border border-l-0 border-black ml-auto w-[50%] md:w-fit md:rounded-e-[2rem] rounded-e-3xl md:p-3 p-2 -mt-[1px] flex items-center justify-end md:gap-5 gap-3">
                <span className="font-dmRegular  text-sm md:text-2xl md:text-wrap text-nowrap text-right">
                  Wall hanging <br /> beautiful glass lady
                </span>
                <img
                  src={product2}
                  alt="product1"
                  className="w-[140px] md:w-[270px]"
                />
              </div>
              <div className="product border border-r-0 border-black w-[50%] md:w-fit md:rounded-s-[2rem] rounded-s-3xl md:p-3 p-2 -mt-[1px] flex items-center justify-start md:gap-5 gap-3">
                <img
                  src={product3}
                  alt="product1"
                  className="w-[140px] md:w-[270px]"
                />
                <span className="font-dmRegular  text-sm md:text-wrap text-nowrap md:text-2xl">
                  For wall <br className="md:hidden inline-block" /> Hanging
                  Krishna
                </span>
              </div>
              <div className="product border border-l-0 border-black ml-auto w-[50%] md:w-fit md:rounded-e-[2rem] rounded-e-3xl md:p-3 p-2 -mt-[1px] flex items-center justify-end md:gap-5 gap-3">
                <span className="hidden md:inline-flex font-dmRegular md:text-2xl text-right">
                  “INTERNATIONAL <br /> SCHOOL OF ANCIENT <br /> WISDOM” A
                  stained glass <br /> mural in a mediation <br /> hall in
                  Bangalore
                </span>
                <span className="md:hidden font-dmRegular text-sm md:text-2xl text-right text-nowrap md:text-wrap">
                  “INTERNATIONAL <br /> SCHOOL OF ANCIENT <br /> WISDOM” A
                  stained glass <br /> mural in a mediation <br /> hall in
                  Bangalore
                </span>
                <img
                  src={product4}
                  alt="product1"
                  className="w-[140px] md:w-[270px]"
                />
              </div>
              <div className="product border border-r-0 border-black w-[50%] md:w-fit md:rounded-s-[2rem] rounded-s-3xl md:p-3 p-2 -mt-[1px] flex items-center justify-start md:gap-5 gap-3">
                <img
                  src={product5}
                  alt="product1"
                  className="w-[140px] md:w-[270px]"
                />
                <span className="font-dmRegular  text-sm md:text-2xl text-nowrap md:text-wrap">
                  Stained glass ceiling
                  <br className="md:inline-flex flex" />
                  in conference room
                </span>
              </div>
              <div className="product border border-l-0 border-black ml-auto w-[50%] md:w-fit md:rounded-e-[2rem] rounded-e-3xl md:p-3 p-2 -mt-[1px] flex items-center justify-end md:gap-5 gap-3">
                <span className="font-dmRegular  text-sm md:text-2xl text-nowrap">
                  A thick glass mural
                </span>
                <img
                  src={product6}
                  alt="product1"
                  className="w-[140px] md:w-[270px]"
                />
              </div>
              <div className="product border border-r-0 border-black w-[50%] md:w-fit md:rounded-s-[2rem] rounded-s-3xl md:p-3 p-2 -mt-[1px] flex items-center justify-start md:gap-5 gap-3">
                <img
                  src={product7}
                  alt="product1"
                  className="w-[140px] md:w-[270px]"
                />
                <span className="font-dmRegular  text-sm md:text-2xl text-nowrap md:text-wrap">
                  A kitchen wall made <br /> by fused glass
                </span>
              </div>
              <div className="product border border-l-0 border-black ml-auto w-[50%] md:w-fit md:rounded-e-[2rem] rounded-e-3xl md:p-3 p-2 -mt-[1px] flex items-center justify-end md:gap-5 gap-3">
                <span className="font-dmRegular text-sm  md:text-2xl text-right text-nowrap md:text-wrap">
                  Tagged glass partition{" "}
                  <br className="md:hidden inline-flex" />
                  between <br className="hidden md:inline-flex" /> living room
                  <br className="md:hidden inline-flex" /> and dining
                </span>
                <img
                  src={product8}
                  alt="product1"
                  className="w-[140px] md:w-[270px]"
                />
              </div>
              <div className="product border border-r-0 border-black w-[50%] md:w-fit md:rounded-s-[2rem] rounded-s-3xl md:p-3 p-2 -mt-[1px] flex items-center justify-start md:gap-5 gap-3">
                <img
                  src={product9}
                  alt="product1"
                  className="w-[140px] md:w-[270px]"
                />
                <span className="font-dmRegular text-sm  md:text-2xl text-nowrap">
                  A glass partition in
                  <br
                    className="
                inline-flex md:hidden"
                  />{" "}
                  <br className="md:inline-flex hidden" />
                  panel Reception area
                </span>
              </div>
              <div className="product border border-l-0 border-black ml-auto w-[50%] md:w-fit md:rounded-e-[2rem] rounded-e-3xl md:p-3 p-2 -mt-[1px] flex items-center justify-end md:gap-5 gap-3">
                <span className="font-dmRegular text-sm  md:text-2xl text-right text-nowrap">
                  Fusioned glass <br className="md:hidden inline-flex" /> map of
                  Indian
                </span>
                <img
                  src={product10}
                  alt="product1"
                  className="w-[140px] md:w-[270px]"
                />
              </div>
              <div className="product border border-r-0 border-black w-[50%] md:w-fit md:rounded-s-[2rem] rounded-s-3xl md:p-3 p-2 -mt-[1px] flex items-center justify-start md:gap-5 gap-3">
                <img
                  src={product11}
                  alt="product1"
                  className="w-[140px] md:w-[270px]"
                />
                <span
                  className="font-dmRegular text-sm  md:text-2xl text-nowrap
              "
                >
                  Om Table <br className="md:hidden" /> Showpiece
                </span>
              </div>
              <div className="product border border-l-0 border-black ml-auto w-[50%] md:w-fit md:rounded-e-[2rem] rounded-e-3xl md:p-3 p-2 -mt-[1px] flex items-center justify-end md:gap-5 gap-3">
                <span className="font-dmRegular text-sm  md:text-2xl text-right text-nowrap">
                  A unique <br className="md:hidden" /> glass Ashtray
                </span>
                <img
                  src={product12}
                  alt="product1"
                  className="w-[140px] md:w-[270px]"
                />
              </div>
              <div className="product relative border border-r-0 border-black w-[50%] md:w-fit md:rounded-s-[2rem] rounded-s-3xl md:p-3 p-2 -mt-[1px] flex items-center justify-start md:gap-5 gap-3">
                <img
                  src={product13}
                  alt="product1"
                  className="w-[140px] md:w-[270px]"
                />
                <span className="font-dmRegular text-sm  md:text-2xl text-nowrap">
                  Double side photo <br /> frame two in one
                </span>
                <img
                  src={sunrays}
                  alt=""
                  className="absolute size-7 md:size-10 -bottom-[.9rem]  md:-bottom-[1.30rem] md:left-[100%] left-[105%] translate-x-[-50%]"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 ">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Test;
