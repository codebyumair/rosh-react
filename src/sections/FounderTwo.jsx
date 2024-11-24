import profileDividerGreen from "../assets/divider/profile-divider-green.svg";
import profileDividerRed from "../assets/divider/profile-divider-red.svg";
import { IoLogoInstagram } from "react-icons/io";
import { TiSocialFacebook } from "react-icons/ti";
import { RiTwitterXFill } from "react-icons/ri";
import { IoLogoWhatsapp } from "react-icons/io5";
import logo from "../assets/profile/Rosh-Aabid-Surti-Profile-photos.webp";
import { motion } from "framer-motion";
import { BlurText } from "../components/BlurText";

const FounderTwo = () => {
  return (
    <>
      <img
        src={logo}
        alt="Aabid Surti"
        className="md:w-[350px] w-[260px] mx-auto"
      />
      <div className="flex md:flex-row flex-col items-center justify-center h-fit">
        <h2 className="w-max font-bold md:text-xl text-lg text-center mt-2 md:mt-2 md:mb-2 mb-2 title-font">
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
          className="h-[250px] md:h-[200px] md:flex items-start justify-start flex-col gap-2 profile-desc overflow-y-scroll lg:w-[120ch] text-balance text-center mx-auto bg-primary rounded-2xl px-4 md:px-4 py-4 md:py-4"
        >
          <img
            src={profileDividerGreen}
            alt="divider"
            className="md:w-[140px] w-[100px] mx-auto"
          />
          <p className="my-2 md:my-0 text-[18px] md:text-xl text-font leading-[1.3rem]">
            National Award-winning author Aabid Surti is a versatile artist,
            celebrated for his remarkable contributions across various creative
            disciplines. His brilliance shines not only in literature but also
            in the visual arts, where he has earned widespread acclaim as a
            painter. <br className="hidden md:inline" /> Over the years, he has
            held 16 prestigious exhibitions, both in India and internationally,
            captivating audiences with <br /> his distinctive artistic vision.
          </p>
          <p className="my-2 md:my-0 text-[18px] md:text-xl text-font leading-[1.3rem]">
            Early in his career, Surti pioneered a groundbreaking technique
            known as 'mirror collage,' a form of art that caught the attention
            of global critics, earning particular praise in Japan for its
            originality and depth.
          </p>
          <p className="my-2 md:my-0 text-[18px] md:text-xl text-font leading-[1.3rem]">
            In 1971, the Indian government honoured his contributions by
            commissioning a short film that highlighted his creative genius.
            Surti's talents extend beyond the canvas.{" "}
            <br className="md:hidden" /> As a gifted cartoonist, he brought to
            life 'Dabbuji,' the beloved simpleton whose witty and endearing
            antics resonated with countless readers. Aabid Surti continues to
            make a mark with his boundless creativity and his ability to move
            seamlessly between artistic forms.
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
export default FounderTwo;
