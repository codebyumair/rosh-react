import About from "../components/About";
import logo from "../assets/logo-with-text.svg";

const AboutSection = () => {
  return (
    <div className="">
      <About
        img={logo}
        title="Rosh. A legacy etched in glass."
        description={[
          "We make you look at glass in a different light. As one of the pioneers of fusion and stained-glass art in India, each of our creation is a symphony of tradition and innovation. Our bespoke designs, from radiant murals to intricate glass structures, are not just art—they are poetries frozen in glass, capturing the essence of beauty and individuality. With every curve, hue, and shimmer, we breathe life into spaces, transforming ideas into timeless works of art. Our meticulously hand-crafted designs transform the ordinary into the extraordinary, elevating the aesthetic appeal of any environment. ",
        ]}
      />
    </div>
  );
};
export default AboutSection;
