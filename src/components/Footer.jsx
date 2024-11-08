import dividerGreen from "../assets/divider/footer-divider-green.svg";
import dividerRed from "../assets/divider/footer-divider-red.svg";
import profileDividerGreen from "../assets/divider/profile-divider-green.svg";
import profileDividerRed from "../assets/divider/profile-divider-red.svg";
import { IoLogoInstagram } from "react-icons/io";
import { TiSocialFacebook } from "react-icons/ti";
import { RiTwitterXFill } from "react-icons/ri";
import { IoLogoWhatsapp } from "react-icons/io5";

const Footer = () => {
  return (
    <footer className="bg-primary bg-opacity-[.88] w-full md:px-24 px-6 flex items-center justify-center py-6">
      <div className="md:w-[1000px] font-ebGroundRegular ">
        <img
          src={dividerGreen}
          alt=""
          className="w-[500px] md:w-full mx-auto"
        />
        <div className="text-center py-2">
          <h2 className="text-xl md:text-2xl font-bold font-dmRegular">
            Roshan Khan
          </h2>
          <p className="font-semibold md:text-lg text-nowrap">
            Fusion & Stained Glass Artist (Customised Designs)
          </p>
          <p className="font-semibold md:text-lg">
            +91 9769556070, +91 7977043269
          </p>
          <p className="font-semibold md:text-lg">
            roshpoetryinglass@gmail.com
          </p>
          <p className="font-semibold md:text-lg">
            Studio: 191/1530, Motilal Nagar No.1 <br className="md:hidden" />{" "}
            Goregaon (West), Mumbai: 400062
          </p>
          <p className="font-semibold md:text-lg">www.roshpoetryinglass.com</p>
        </div>
        <div className="flex items-center justify-center my-1 gap-2 pb-2">
          <IoLogoInstagram className="bg-black text-white rounded-full size-6 p-1" />
          <TiSocialFacebook className="bg-black text-white rounded-full size-6 p-1" />
          <RiTwitterXFill className="bg-black text-white rounded-full size-6 p-1" />
          <IoLogoWhatsapp className="bg-black text-white rounded-full size-6 p-1" />
        </div>
        <img src={dividerRed} alt="" className="w-[500px] md:w-full mx-auto" />
      </div>
    </footer>
  );
};
export default Footer;
