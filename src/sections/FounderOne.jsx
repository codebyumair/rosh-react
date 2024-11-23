import profileDividerGreen from "../assets/divider/profile-divider-green.svg";
import profileDividerRed from "../assets/divider/profile-divider-red.svg";
import { IoLogoInstagram } from "react-icons/io";
import { TiSocialFacebook } from "react-icons/ti";
import { RiTwitterXFill } from "react-icons/ri";
import { IoLogoWhatsapp } from "react-icons/io5";
import logo from "../assets/profile/Rosh-Abdullah-Khandwani-Profile-photos.webp";
import { motion } from "framer-motion";
import { BlurText } from "../components/BlurText";

const FounderOne = () => {
  return (
    <>
      <img
        src={logo}
        alt="Abdullah Khandwani"
        className="md:w-[350px] w-[260px] mx-auto"
      />
      <div className="flex md:flex-row flex-col items-center justify-center h-fit">
        <h2 className="w-max font-bold md:text-xl text-lg text-center mt-2 md:mt-2 md:mb-2 title-font">
          <BlurText text="Abdullah Khandwani." delay={50} />
        </h2>
        <h2 className="w-max font-bold md:text-xl text-lg text-center -mt-2 md:mt-2 md:mb-2 mb-2 title-font">
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
            alt="divider"
            className="md:w-[140px] w-[100px] mx-auto"
          />
          <p className="my-2 md:my-0 text-lg md:text-xl text-font leading-[1.3rem] text-center mx-auto">
            Abdullah Khandwani, a creator at heart, is an eminent and renowned
            stained-glass artist from India. <br className="hidden md:inline" />
            He has been instrumental in popularizing the art and craft across
            India and Canada over the past three decades.
          </p>
          <p className="my-2 md:my-0 text-lg md:text-xl text-font leading-[1.3rem]">
            Abdullah Khandwani's innovative approach to glass art reflects a
            deep connection to heritage while pushing the boundaries of modern
            artistic expression, making him a true pioneer in the world of
            stained glass.
          </p>
          <p className="my-2 md:my-0 text-lg md:text-xl text-font leading-[1.3rem]">
            With a keen eye for detail and an innate understanding of light and
            colour, his work transcends mere decoration, creating ethereal,
            illuminated spaces that captivate the soul.
          </p>

          <img
            src={profileDividerRed}
            alt="divider"
            className="md:w-[140px] w-[100px] mx-auto"
          />
        </motion.div>
        {/* <motion.div
          initial="hidden"
          viewport={{ once: true }}
          variants={{
            visible: { opacity: 1, x: 0 },
            hidden: { opacity: 0, x: -100 },
          }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          whileInView="visible"
          className="flex items-center justify-center mt-4 gap-2 hidden"
        >
          <IoLogoInstagram className="bg-secondary text-white rounded-full size-7 p-1" />
          <TiSocialFacebook className="bg-secondary text-white rounded-full size-7 p-1" />
          <RiTwitterXFill className="bg-secondary text-white rounded-full size-7 p-1" />
          <IoLogoWhatsapp className="bg-secondary text-white rounded-full size-7 p-1" />
        </motion.div> */}
      </div>
    </>
  );
};
export default FounderOne;
