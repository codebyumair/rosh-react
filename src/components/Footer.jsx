import dividerGreen from "../assets/divider/footer-divider-green.svg";
import dividerRed from "../assets/divider/footer-divider-red.svg";
import profileDividerGreen from "../assets/divider/profile-divider-green.svg";
import profileDividerRed from "../assets/divider/profile-divider-red.svg";

const Footer = () => {
  return (
    <footer className="bg-primary w-full md:px-24 flex items-center justify-center">
      <div className="md:w-[1000px]">
        <img src={dividerGreen} alt="" className="w-[500px]" />
        <div className="text-center">
          <h2 className="text-2xl font-bold">Roshan Khan</h2>
          <p className="font-semibold">
            Fusion & Stained Glass Artist (Customised Designs)
          </p>
          <p className="font-semibold">+91 9769556070, +91 7977043269</p>
          <p className="font-semibold">roshpoetryinglass@gmail.com</p>
          <p className="font-semibold">
            Studio: 191/1530, Motilal Nagar No.1 Goregaon (West), Mumbai: 400062
          </p>
          <p className="font-semibold">www.roshpoetryinglass.com</p>
        </div>
        <img src={dividerRed} alt="" className="w-[500px]" />
      </div>
    </footer>
  );
};
export default Footer;
