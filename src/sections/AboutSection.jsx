import About from "../components/About";
import profileDividerGreen from "../assets/divider/profile-divider-green.svg";
import profileDividerRed from "../assets/divider/profile-divider-red.svg";
import logo from "../assets/logo-with-text.svg";

const AboutSection = () => {
  return (
    <div className="md:h-full h-screen hero-section">
      <div className="bg-opacity-[.88] bg-primary h-full md:pt-40 lg:pt-48 pt-44 pb-8 px-4 md:px-0">
        <img
          src={logo}
          alt=""
          className="sticky md:w-[189px] w-[140px] mx-auto translate-x-[-50%] left-[50%]"
        />
        <h2 className="font-bold mx-auto text-center my-4 font-dmRegular">
          Rosh. A legacy etched in glass.
        </h2>
        <div className="md:w-[73ch] text-pretty mx-auto text-center py-2 px-4 bg-primary rounded-2xl">
          <img
            src={profileDividerGreen}
            alt=""
            className="md:w-[140px] w-[120px] mx-auto"
          />
          <p className="my-2 text-sm md:text-lg font-ebGroundRegular">
            We make you look at glass in a different light. As one of the
            pioneers of fusion and stained-glass art in India, each of our
            creation is a symphony of tradition and innovation. Our bespoke
            designs, from radiant murals to intricate glass structures, are not
            just art—they are poetries frozen in glass, capturing the essence of
            beauty and individuality. With every curve, hue, and shimmer, we
            breathe life into spaces, transforming ideas into timeless works of
            art. Our meticulously hand-crafted designs transform the ordinary
            into the extraordinary, elevating the aesthetic appeal of any
            environment.
          </p>
          <img
            src={profileDividerRed}
            alt=""
            className="md:w-[140px] w-[120px] mx-auto"
          />
        </div>
      </div>
    </div>
  );
};
export default AboutSection;
