import React from "react";
import markII from "../assets/landing page/XX99 MARK II.png";
import BrownButton from "../components/BrownButton";
import headphones from "../assets/landing page/headphones.png";
import shadow from "../assets/landing page/shadow.png";
import { ChevronRight } from "lucide-react";
import ProductCard from "../components/ProductCard";
import speaker from "../assets/landing page/speaker.png";
import earphones from "../assets/landing page/earphones.png";
import zx9 from "../assets/landing page/ZX9.png";
import BlackButton from "../components/BlackButton";
import zx7 from "../assets/landing page/zx7.png";
import TransparentButton from "../components/TransparentButton";
import yx1 from "../assets/landing page/yx1.png";
import model from "../assets/landing page/model.png";
import EndStatement from "../components/EndStatement";

export default function LandingPage() {
  return (
    <div className="w-full ">
      <div className="bg-[#000000] flex flex-col items-center w-full h-140 relative text-white">
        <div className=" overflow-hidden ">
          <img className="-mt-18 " src={markII} alt="" />
        </div>
        <div className="absolute top-26 flex flex-col items-center ">
          <span className=" opacity-50 tracking-[0.6em] font-light ml-3 ">
            NEW PRODUCT
          </span>
          <h1 className="text-[36px] mt-4 text-center leading-10 font-bold tracking-[0.05em] ">
            XX99 MARK II HEADPHONES
          </h1>
          <p className="text-center mt-6 leading-7 tracking-wide font-light opacity-75">
            Experience natural, lifelike audio and <br /> exceptional build
            quality made for the <br /> passionate music enthusiast.
          </p>

          <BrownButton text="SEE PRODUCT" />
        </div>
      </div>

      <div className="flex flex-col items-center mt-10 px-6 ">
        <div className="flex flex-col items-center gap-4 w-full max-w-82">
          <ProductCard
            image={headphones}
            shadow={shadow}
            ChevronRight={ChevronRight}
          />
          <ProductCard
            image={speaker}
            shadow={shadow}
            ChevronRight={ChevronRight}
          />
          <ProductCard
            image={earphones}
            shadow={shadow}
            ChevronRight={ChevronRight}
          />
        </div>

        <div className="bg-[#d87d4a] relative flex justify-center w-full max-w-82 h-150 mt-35 text-white rounded-xl">
          <div className="border absolute bottom-42 border-white w-139.5 h-139.5 rounded-full opacity-20 "></div>
          <div className="border absolute border-white w-80 h-80 rounded-full opacity-20 "></div>
          <div className="border absolute border-white w-70 h-70 rounded-full opacity-20 top-5 "></div>

          <div className="absolute top-13 ">
            <img src={zx9} alt="" />
          </div>

          <div className="flex flex-col justify-center items-center mt-60">
            <h2 className="text-4xl text-center font-semibold tracking-wider mb-6 mt-2  ">
              ZX9 <br /> SPEAKER
            </h2>
            <p className="text-center font-light opacity-75 ">
              Upgrade to premium speakers that are <br /> phenomenally built to
              deliver truly <br /> remarkable sound.
            </p>

            <BlackButton text="SEE PRODUCT" />
          </div>
        </div>

        <div className="relative h-80 rounded-xl overflow-hidden mt-6 flex justify-center w-full max-w-82">
          <img src={zx7} alt="" />
          <div className="absolute top-25 right-22">
            <h2 className=" font-semibold text-[28px] tracking-widest">
              ZX7 SPEAKER
            </h2>
            <TransparentButton text="SEE PRODUCT" />
          </div>
        </div>

        <div className="w-full max-w-82">
          <div className="w-82 rounded-xl overflow-hidden mt-6 ">
            <img src={yx1} alt="yx1 earphones image" />
          </div>
          <div className="bg-[#f1f1f1] flex items-center h-50 mt-6 rounded-xl">
            <div className="pl-6 ">
              <h2 className=" font-semibold text-[28px] tracking-widest">
                YX1 EARPHONES
              </h2>
              <TransparentButton text="SEE PRODUCT" />
            </div>
          </div>
        </div>

        <EndStatement />
      </div>
    </div>
  );
  0;
}
