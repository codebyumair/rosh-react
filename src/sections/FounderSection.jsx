import About from "../components/About";
import { founders } from "../data/founder";

const FounderSection = () => {
  return (
    <div className="bg-primary">
      {founders.map((founder, index) => {
        return (
          <About
            key={index}
            img={founder.image}
            description={founder.description}
            isFounder={founder.isFounder}
          />
        );
      })}
    </div>
  );
};
export default FounderSection;
