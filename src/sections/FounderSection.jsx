import About from "../components/About";
import { founders } from "../data/founder";

const FounderSection = () => {
  return (
    <div className="bg-primary bg-opacity-[.88] hero-section">
      {founders.map((founder, index) => {
        return (
          <About
            key={index}
            img={founder.image}
            title={founder.title}
            description={founder.description}
            isFounder={founder.isFounder}
          />
        );
      })}
    </div>
  );
};
export default FounderSection;
