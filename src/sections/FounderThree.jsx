import profileDividerGreen from "../assets/divider/profile-divider-green.svg";
import profileDividerRed from "../assets/divider/profile-divider-red.svg";
import { IoLogoInstagram } from "react-icons/io";
import { TiSocialFacebook } from "react-icons/ti";
import { RiTwitterXFill } from "react-icons/ri";
import { IoLogoWhatsapp } from "react-icons/io5";
import logo from "../assets/profile/Rosh-Roshan-Khan-Profile-photos.png";
import { motion } from "framer-motion";
import { BlurText } from "../components/BlurText";

const FounderThree = () => {
  return (
    <>
      <img src={logo} alt="" className="md:w-[350px] w-[260px] mx-auto" />
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
            years of experience in crafting and captivating large-scale murals.
            Her passion for the art form is showcased through her Mumbai-based
            studio, a hub of creativity and craftsmanship, and a showcase of her
            immense talent.
          </p>
          <p className="my-2 md:my-0 text-lg md:text-xl font-ebGroundRegular leading-[1.3rem]">
            Khan's passion for stained glass work was ignited by two influential
            mentors she met after her studies: the renowned artist Abdullah
            Khandwani and the versatile creative genius Aabid Surti, an
            acclaimed painter, writer, and cartoonist.
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
    </>
  );
};
export default FounderThree;
