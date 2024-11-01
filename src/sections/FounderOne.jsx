import profileDividerGreen from "../assets/divider/profile-divider-green.svg";
import profileDividerRed from "../assets/divider/profile-divider-red.svg";
import { IoLogoInstagram } from "react-icons/io";
import { TiSocialFacebook } from "react-icons/ti";
import { RiTwitterXFill } from "react-icons/ri";
import { IoLogoWhatsapp } from "react-icons/io5";
import logo from "../assets/profile/Rosh-Abdullah-Khandwani-Profile-photos.png";
import { motion } from "framer-motion";
import { BlurText } from "../components/BlurText";

const FounderOne = () => {
  return (
    <div className="md:h-screen h-screen hero-section sticky top-0">
      <div className="bg-opacity-[.88] bg-primary h-full md:pt-36 pt-44 md:pb-0  pb-8 px-4 md:px-0">
        <motion.img
          initial="hidden"
          viewport={{ once: true }}
          variants={{
            visible: { opacity: 1 },
            hidden: { opacity: 0 },
          }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.1 }}
          whileInView="visible"
          src={logo}
          alt=""
          className="sticky md:w-[160px] w-[140px] mx-auto translate-x-[-50%] left-[50%]"
        />
        <h2 className="font-bold mx-auto text-center my-4 font-dmRegular">
          <BlurText
            text="Abdullah Khandwani. A pioneer par excellence."
            delay={50}
          />
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
          className="md:w-[78ch] text-pretty mx-auto text-center py-2 px-4 bg-primary rounded-2xl"
        >
          <img
            src={profileDividerGreen}
            alt=""
            className="md:w-[140px] w-[120px] mx-auto"
          />
          <p className="my-2 text-sm md:text-lg font-ebGroundRegular">
            Abdullah Khandwani, a creator at heart, is an eminent and renowned
            stained-glass artist from India. He has been instrumental in
            popularizing the art and craft across India and Canada over the past
            three decades.", "Abdullah Khandwani's innovative approach to glass
            art reflects a deep connection to heritage while pushing the
            boundaries of modern artistic expression, making him a true pioneer
            in the world of stained glass", "With a keen eye for detail and an
            innate understanding of light and colour, his work transcends mere
            decoration, creating ethereal, illuminated spaces that captivate the
            soul.
          </p>
          <img
            src={profileDividerRed}
            alt=""
            className="md:w-[140px] w-[120px] mx-auto"
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
          className="flex items-center justify-center mt-3 gap-2"
        >
          <IoLogoInstagram className="bg-secondary text-white rounded-full size-6 p-1" />
          <TiSocialFacebook className="bg-secondary text-white rounded-full size-6 p-1" />
          <RiTwitterXFill className="bg-secondary text-white rounded-full size-6 p-1" />
          <IoLogoWhatsapp className="bg-secondary text-white rounded-full size-6 p-1" />
        </motion.div>
      </div>
    </div>
  );
};
export default FounderOne;
