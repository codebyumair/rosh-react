import profileDividerGreen from "../assets/divider/profile-divider-green.svg";
import profileDividerRed from "../assets/divider/profile-divider-red.svg";
import { IoLogoInstagram } from "react-icons/io";
import { TiSocialFacebook } from "react-icons/ti";
import { RiTwitterXFill } from "react-icons/ri";
import { IoLogoWhatsapp } from "react-icons/io5";
import logo from "../assets/profile/Rosh-Aabid-Surti-Profile-photos.png";
import { motion } from "framer-motion";
import { BlurText } from "../components/BlurText";

const FounderTwo = () => {
  return (
    <div className="md:h-screen h-screen hero-section sticky top-0">
      <div className="bg-opacity-[.88] bg-primary h-full md:pt-36 pt-44 pb-8 px-4 md:px-0">
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
          <BlurText text="Aabid Surti. A man of many talents." delay={50} />
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
          className="profile-desc md:w-[78ch] text-pretty mx-auto text-center py-2 px-4 bg-primary rounded-2xl md:h-[300px] overflow-y-scroll h-[320px]"
        >
          <img
            src={profileDividerGreen}
            alt=""
            className="md:w-[140px] w-[120px] mx-auto"
          />
          <p className="my-2 text-sm md:text-lg font-ebGroundRegular">
            National Award-winning author Aabid Surti is a versatile artist,
            celebrated for his remarkable contributions across various creative
            disciplines. His brilliance shines not only in literature but also
            in the visual arts, where he has earned widespread acclaim as a
            painter. Over the years, he has held 16 prestigious exhibitions,
            both in India and internationally, captivating audiences with his
            distinctive artistic vision.
          </p>
          <p className="my-2 text-sm md:text-lg font-ebGroundRegular">
            Early in his career, Surti pioneered a groundbreaking technique
            known as 'mirror collage,' a form of art that caught the attention
            of global critics, earning particular praise in Japan for its
            originality and depth.
          </p>
          <p className="my-2 text-sm md:text-lg font-ebGroundRegular">
            In 1971, the Indian government honoured his contributions by
            commissioning a short film that highlighted his creative genius.
            Surti's talents extend beyond the canvas. As a gifted cartoonist, he
            brought to life 'Dabbuji,' the beloved simpleton whose witty and
            endearing antics resonated with countless readers. Aabid Surti
            continues to make a mark with his boundless creativity and his
            ability to move seamlessly between artistic forms.
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
export default FounderTwo;
