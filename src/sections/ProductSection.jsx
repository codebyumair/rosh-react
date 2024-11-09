import product1 from "../assets/products/In-a-washroom-mirror.png";
import product2 from "../assets/products/Wall-hanging-beautiful-glass-lady.png";
import product3 from "../assets/products/For-wall-Hanging-Krishna.png";
import product4 from "../assets/products/INTERNATIONAL-SCHOOL-OF-ANCIENT-WISDOM.png";
import product5 from "../assets/products/Stained-glass-ceiling-in-conference-room.png";
import product6 from "../assets/products/A-thick-glass-mural.png";
import product7 from "../assets/products/A-kitchen-wall-made-by-fused-glass.png";
import product8 from "../assets/products/Tagged-glass-partition-between-living-room-and-dining.png";
import product9 from "../assets/products/A-glass-partition-panel-in-Reception-area.png";
import product10 from "../assets/products/Fusioned-glass-map-of-Indian.png";
import product11 from "../assets/products/Om-Table-show-piece.png";
import product12 from "../assets/products/A-unique-glass-Ashtray.png";
import product13 from "../assets/products/Double-side-photo-frame-two-in-one.png";
import sunrays from "../assets/icons/sunrays.svg";
import Footer from "../components/Footer";

const ProductSection = () => {
  return (
    <div className="background-container">
      <div className="pt-36 pb-16 px-4 md:px-8 bg-primary bg-opacity-[.88] product-container">
        <div className="container mx-auto">
          <div className="row">
            <div className="products w-full leading-[1.1rem]">
              <div className="product relative border border-r-0 border-black w-[50%] md:w-fit md:rounded-s-[2rem] rounded-s-3xl md:p-3 p-2 flex items-center justify-start md:gap-5 gap-3">
                <img
                  src={sunrays}
                  alt=""
                  className="absolute size-10 -top-[1.30rem] md:left-[100%]  left-[105%] translate-x-[-50%]"
                />
                <img
                  src={product1}
                  alt="product1"
                  className="w-[140px] md:w-[270px]"
                />
                <span className="font-dmRegular text-nowrap md:text-wrap md:text-2xl">
                  In a washroom mirror
                </span>
              </div>
              <div className="product border border-l-0 border-black ml-auto w-[50%] md:w-fit md:rounded-e-[2rem] rounded-e-3xl md:p-3 p-2 -mt-[1px] flex items-center justify-end md:gap-5 gap-3">
                <span className="font-dmRegular md:text-2xl md:text-wrap text-nowrap text-right">
                  Wall hanging <br /> beautiful glass lady
                </span>
                <img
                  src={product2}
                  alt="product1"
                  className="w-[140px] md:w-[270px]"
                />
              </div>
              <div className="product border border-r-0 border-black w-[50%] md:w-fit md:rounded-s-[2rem] rounded-s-3xl md:p-3 p-2 -mt-[1px] flex items-center justify-start md:gap-5 gap-3">
                <img
                  src={product3}
                  alt="product1"
                  className="w-[140px] md:w-[270px]"
                />
                <span className="font-dmRegular md:text-wrap text-nowrap md:text-2xl">
                  For wall <br className="md:hidden inline-block" /> Hanging
                  Krishna
                </span>
              </div>
              <div className="product border border-l-0 border-black ml-auto w-[50%] md:w-fit md:rounded-e-[2rem] rounded-e-3xl md:p-3 p-2 -mt-[1px] flex items-center justify-end md:gap-5 gap-3">
                <span className="hidden md:inline-flex font-dmRegular md:text-2xl text-right">
                  “INTERNATIONAL <br /> SCHOOL OF ANCIENT <br /> WISDOM” A
                  stained glass <br /> mural in a mediation <br /> hall in
                  Bangalore
                </span>
                <span className="md:hidden font-dmRegular text-sm md:text-2xl text-right text-nowrap md:text-wrap">
                  “INTERNATIONAL <br /> SCHOOL OF ANCIENT <br /> WISDOM” A
                  stained glass <br /> mural in a mediation <br /> hall in
                  Bangalore
                </span>
                <img
                  src={product4}
                  alt="product1"
                  className="w-[140px] md:w-[270px]"
                />
              </div>
              <div className="product border border-r-0 border-black w-[50%] md:w-fit md:rounded-s-[2rem] rounded-s-3xl md:p-3 p-2 -mt-[1px] flex items-center justify-start md:gap-5 gap-3">
                <img
                  src={product5}
                  alt="product1"
                  className="w-[140px] md:w-[270px]"
                />
                <span className="font-dmRegular md:text-2xl text-nowrap md:text-wrap">
                  Stained glass ceiling
                  <br className="md:inline-flex flex" />
                  in conference room
                </span>
              </div>
              <div className="product border border-l-0 border-black ml-auto w-[50%] md:w-fit md:rounded-e-[2rem] rounded-e-3xl md:p-3 p-2 -mt-[1px] flex items-center justify-end md:gap-5 gap-3">
                <span className="font-dmRegular md:text-2xl text-nowrap">
                  A thick glass mural
                </span>
                <img
                  src={product6}
                  alt="product1"
                  className="w-[140px] md:w-[270px]"
                />
              </div>
              <div className="product border border-r-0 border-black w-[50%] md:w-fit md:rounded-s-[2rem] rounded-s-3xl md:p-3 p-2 -mt-[1px] flex items-center justify-start md:gap-5 gap-3">
                <img
                  src={product7}
                  alt="product1"
                  className="w-[140px] md:w-[270px]"
                />
                <span className="font-dmRegular md:text-2xl text-nowrap md:text-wrap">
                  A kitchen wall made <br /> by fused glass
                </span>
              </div>
              <div className="product border border-l-0 border-black ml-auto w-[50%] md:w-fit md:rounded-e-[2rem] rounded-e-3xl md:p-3 p-2 -mt-[1px] flex items-center justify-end md:gap-5 gap-3">
                <span className="font-dmRegular md:text-2xl text-right text-nowrap md:text-wrap">
                  Tagged glass partition{" "}
                  <br className="md:hidden inline-flex" />
                  between <br className="hidden md:inline-flex" /> living room
                  <br className="md:hidden inline-flex" /> and dining
                </span>
                <img
                  src={product8}
                  alt="product1"
                  className="w-[140px] md:w-[270px]"
                />
              </div>
              <div className="product border border-r-0 border-black w-[50%] md:w-fit md:rounded-s-[2rem] rounded-s-3xl md:p-3 p-2 -mt-[1px] flex items-center justify-start md:gap-5 gap-3">
                <img
                  src={product9}
                  alt="product1"
                  className="w-[140px] md:w-[270px]"
                />
                <span className="font-dmRegular md:text-2xl text-nowrap">
                  A glass partition{" "}
                  <br
                    className="
                inline-flex md:hidden"
                  />{" "}
                  panel in <br className="md:inline-flex hidden" />
                  <br
                    className="
                inline-flex md:hidden"
                  />{" "}
                  Reception area
                </span>
              </div>
              <div className="product border border-l-0 border-black ml-auto w-[50%] md:w-fit md:rounded-e-[2rem] rounded-e-3xl md:p-3 p-2 -mt-[1px] flex items-center justify-end md:gap-5 gap-3">
                <span className="font-dmRegular md:text-2xl text-right text-nowrap">
                  Fusioned glass <br className="md:hidden inline-flex" /> map of
                  Indian
                </span>
                <img
                  src={product10}
                  alt="product1"
                  className="w-[140px] md:w-[270px]"
                />
              </div>
              <div className="product border border-r-0 border-black w-[50%] md:w-fit md:rounded-s-[2rem] rounded-s-3xl md:p-3 p-2 -mt-[1px] flex items-center justify-start md:gap-5 gap-3">
                <img
                  src={product11}
                  alt="product1"
                  className="w-[140px] md:w-[270px]"
                />
                <span
                  className="font-dmRegular md:text-2xl text-nowrap
              "
                >
                  Om Table <br className="md:hidden" /> Showpiece
                </span>
              </div>
              <div className="product border border-l-0 border-black ml-auto w-[50%] md:w-fit md:rounded-e-[2rem] rounded-e-3xl md:p-3 p-2 -mt-[1px] flex items-center justify-end md:gap-5 gap-3">
                <span className="font-dmRegular md:text-2xl text-right text-nowrap">
                  A unique <br className="md:hidden" /> glass Ashtray
                </span>
                <img
                  src={product12}
                  alt="product1"
                  className="w-[140px] md:w-[270px]"
                />
              </div>
              <div className="product relative border border-r-0 border-black w-[50%] md:w-fit md:rounded-s-[2rem] rounded-s-3xl md:p-3 p-2 -mt-[1px] flex items-center justify-start md:gap-5 gap-3">
                <img
                  src={product13}
                  alt="product1"
                  className="w-[140px] md:w-[270px]"
                />
                <span className="font-dmRegular md:text-2xl text-nowrap">
                  Double side photo <br /> frame two in one
                </span>
                <img
                  src={sunrays}
                  alt=""
                  className="absolute size-10 -bottom-[1.30rem] md:left-[100%] left-[105%] translate-x-[-50%]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default ProductSection;
