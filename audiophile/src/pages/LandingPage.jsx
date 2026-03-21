import markII from "../assets/landing-page/XX99 MARK II.svg";
import BrownButton from "../components/BrownButton";
import headphones from "../assets/landing-page/headphones.svg";
import shadow from "../assets/landing-page/shadow.png";
import { ChevronRight } from "lucide-react";
import ProductCard from "../components/ProductCard";
import speaker from "../assets/landing-page/speaker.svg";
import earphones from "../assets/landing-page/earphones.svg";
import zx9 from "../assets/landing-page/zx9.svg";
import BlackButton from "../components/BlackButton";
import zx7 from "../assets/landing-page/zx7.svg";
import TransparentButton from "../components/TransparentButton";
import yx1 from "../assets/landing-page/yx1.svg";
import EndStatement from "../components/EndStatement";

export default function LandingPage() {
  return (
    <div className="w-full pb-16">
      <div className="bg-[#000000] flex flex-col lg:flex-row lg:gap-20 items-center w-full h-140 relative text-white lg:px-71 lg:h-182 ">
        <div className="absolute top-26 z-2 flex flex-col items-center lg:static lg:justify-start lg:flex lg:flex-col lg:items-start  ">
          <span className=" opacity-50 tracking-[0.6em] font-light ml-3 ">
            NEW PRODUCT
          </span>
          <h1 className="text-[36px] mt-4 text-center leading-10 font-bold tracking-[0.05em] lg:text-[56px] lg:text-start lg:w-105 lg:leading-15 ">
            XX99 MARK II HEADPHONES
          </h1>
          <p className="text-center mt-6 leading-7 tracking-wide font-light opacity-75 w-82 lg:text-[15px] lg:text-start lg:w-87">
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>

          <BrownButton text="SEE PRODUCT" linkto="/headphones/xx99-mark-two" />
        </div>

        <div className=" opacity-40  overflow-hidden h-120 flex mt- justify-center lg:mask-[radial-gradient(circle,_black_45%,_transparent_70%)] lg:flex lg:h-180 lg:justify-center lg:items-center lg:opacity-90  ">
          <img
            className="-mt-18 scale-150 lg:h-221 lg:scale-100 "
            src={markII}
            alt=""
          />
        </div>
      </div>

      <div className="flex flex-col items-center mt-10 px-6  lg:mt-30 ">
        <div className="flex flex-col items-center gap-4 w-full max-w-82 lg:flex lg:flex-row lg:justify-center lg:gap-30 ">
          <ProductCard
            image={headphones}
            shadow={shadow}
            ChevronRight={ChevronRight}
            category="HEADPHONES"
            linkto="/headphones"
          />

          <ProductCard
            image={speaker}
            shadow={shadow}
            ChevronRight={ChevronRight}
            category="SPEAKERS"
            linkto="/speakers"
          />

          <ProductCard
            image={earphones}
            shadow={shadow}
            ChevronRight={ChevronRight}
            category="EARPHONES"
            linkto="/earphones"
          />
        </div>

        <div className="bg-[#d87d4a] relative flex lg:gap-55 justify-center w-full  h-150 mt-35 text-white rounded-xl lg:w-7xl lg:mt-42 overflow-hidden">
          <div className="border absolute bottom-42 lg:-bottom-30 lg:-left-20 border-white w-139.5 h-139.5 rounded-full opacity-20 lg:w-200 lg:h-200 "></div>
          <div className="border absolute border-white w-80 h-80  lg:left-0 rounded-full opacity-20 lg:w-150 lg:h-150 "></div>
          <div className="border absolute border-white w-70 h-70  lg:left-15 lg:top-20 rounded-full opacity-20 top-5 lg:w-120 lg:h-120 "></div>

          <div className="absolute top-13 lg:static lg:mt-40 z-2 ">
            <img className="w-45 lg:w-100 " src={zx9} alt="" />
          </div>

          <div className="flex flex-col justify-center items-center mt-60 lg:flex lg:flex-col lg:items-start lg:justify-start">
            <h2 className="text-4xl lg:text-[56px] text-center font-semibold tracking-wider mb-6 mt-2 w-40 lg:w-60 lg:text-start lg:-mt-13  ">
              ZX9 SPEAKER
            </h2>
            <p className="text-center font-light opacity-75 w-70 lg:w-87 lg:text-start ">
              Upgrade to premium speakers that are phenomenally built to deliver
              truly remarkable sound.
            </p>

            <BlackButton text="SEE PRODUCT" linkto="/speakers/zx9" />
          </div>
        </div>

        <div className="  relative h-80 rounded-xl overflow-clip mt-6 flex justify-center w-full  lg:w-7xl lg:mt-12 ">
          <div className="absolute top-25 left-4 lg:top-25 lg:left-24 z-2">
            <h2 className=" z-2 font-semibold text-[28px] tracking-widest lg:text-[28px]">
              ZX7 SPEAKER
            </h2>
            <TransparentButton text="SEE PRODUCT" linkto="/speakers/zx7" />
          </div>
          <img
            className=" scale-170 mb-10 ml-35  lg:w-7xl lg:-mt-140 "
            src={zx7}
            alt=""
          />
        </div>

        <div className="w-full  lg:flex lg:justify-center lg:gap-20 lg:mt-12 ">
          <div className=" border lg:w-150 rounded-xl overflow-hidden mt-6  ">
            <img className="lg:w-150" src={yx1} alt="yx1 earphones image" />
          </div>
          <div className="bg-[#f1f1f1] flex items-center h-50 mt-6 rounded-xl lg:w-150 lg:h-89">
            <div className="pl-6 lg:pl-25 ">
              <h2 className=" font-semibold text-[28px] tracking-widest">
                YX1 EARPHONES
              </h2>
              <TransparentButton text="SEE PRODUCT" linkto="/earphones/yx1" />
            </div>
          </div>
        </div>
      </div>
      <EndStatement />
    </div>
  );
  0;
}
