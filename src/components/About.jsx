import profileDividerGreen from "../assets/divider/profile-divider-green.svg";
import profileDividerRed from "../assets/divider/profile-divider-red.svg";

const About = ({ img, title = "", description = [], isFounder = false }) => {
  return (
    <section className="md:h-screen h-screen w-full bg-primary bg-opacity-[.88]">
      <div className="md:pt-32 pt-36 pb-3 px-4 md:px-48">
        {!isFounder ? (
          <img
            src={img}
            alt=""
            className="sticky md:w-[189px] w-[140px] mx-auto translate-x-[-50%] left-[50%]"
          />
        ) : (
          <img src={img} alt="" className="md:w-[300px] w-[250px] mx-auto " />
        )}
        <h2 className="my-4 font-bold text-xl mx-auto text-center">{title}</h2>
        <div className="bg-primary rounded-2xl p-2 md:w-[800px] w-full mx-auto">
          <img
            src={profileDividerGreen}
            alt=""
            className="md:w-[140px] w-[120px] mx-auto"
          />
          {description.map((desc, index) => {
            return (
              <p key={index} className="my-2 text-center">
                {desc}
              </p>
            );
          })}
          <img
            src={profileDividerRed}
            alt=""
            className="md:w-[140px] w-[120px] mx-auto"
          />
        </div>
      </div>
      {/* <div className="md:max-w-[1000px] h-full mx-auto md:px-24 px-4 md:py-32 py-16 flex flex-col items-center justify-center">
        <img
          src={img}
          alt=""
          className={
            isFounder ? "md:w-[300px] w-[250px]" : "md:w-[180px] w-[100px] "
          }
        />
        <h2 className="my-4 font-bold text-xl">{title}</h2>
        <div className="bg-primary rounded-2xl py-4 px-6 text-center max-w-full">
          <img
            src={profileDividerGreen}
            alt=""
            className="md:w-[140px] w-[120px] mx-auto"
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
            className="md:w-[140px] w-[120px] mx-auto"
          />
        </div>
      </div> */}
    </section>
  );
};
export default About;
