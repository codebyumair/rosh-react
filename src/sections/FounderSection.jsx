import profileDividerGreen from "../assets/divider/profile-divider-green.svg";
import profileDividerRed from "../assets/divider/profile-divider-red.svg";
import { founders } from "../data/founder";
import FounderOne from "./FounderOne";
import FounderThree from "./FounderThree";
import FounderTwo from "./FounderTwo";

const FounderSection = () => {
  return (
    <>
      <FounderOne />
      {/* <FounderTwo /> */}
      {/* <FounderThree /> */}
      {/* <div className="founder-section sticky top-0 h-max"></div>
      {founders.map((founder, index) => {
        return (
          <div className="bg-opacity-[.88] bg-primary h-full md:pt-40 lg:pt-48 px-4 md:px-0 border border-borderColor">
            <div className="">
              <img
                src={founder.image}
                alt=""
                className="sticky md:w-[189px] w-[160px] mx-auto mt-36 translate-x-[-50%] left-[50%]"
              />
              <h2 className="font-bold mx-auto text-center my-4 font-dmRegular">
                {founder.title}
              </h2>
              <div className="md:w-[73ch] text-pretty mx-auto text-center py-2 px-4 bg-primary rounded-2xl">
                <img
                  src={profileDividerGreen}
                  alt=""
                  className="md:w-[140px] w-[120px] mx-auto"
                />
                {founder?.description.map((desc, index) => {
                  return (
                    <p
                      key={index}
                      className="my-2 text-sm md:text-lg font-ebGroundRegular"
                    >
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
          </div>
        );
      })} */}
    </>
  );
};
export default FounderSection;
