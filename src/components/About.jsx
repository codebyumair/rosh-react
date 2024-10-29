import profileDividerGreen from "../assets/divider/profile-divider-green.svg";
import profileDividerRed from "../assets/divider/profile-divider-red.svg";

const About = ({ img, title = "", description = [], isFounder = false }) => {
  return (
    <section className="mx-auto md:max-w-[1000px] flex flex-col items-center justify-center md:h-screen px-4 py-24">
      <img
        src={img}
        alt=""
        className={
          isFounder ? "md:w-[300px] w-[250px]" : "md:w-[200px] w-[100px]"
        }
      />
      <h2 className="mt-3 font-bold text-xl">{title}</h2>
      <div className="bg-primary rounded-2xl py-4 px-6 text-center">
        <img
          src={profileDividerGreen}
          alt=""
          className="md:w-[200px] w-[120px] mx-auto"
        />
        {description.map((desc, index) => {
          return (
            <p key={index} className="my-2">
              {desc}
            </p>
          );
        })}
        <img
          src={profileDividerRed}
          alt=""
          className="md:w-[200px] w-[120px] mx-auto"
        />
      </div>
    </section>
  );
};
export default About;
