import React from "react";
import markII from "../assets/XX99 MARK II.png";
import BrownButton from "../components/BrownButton";
import headphones from "../assets/headphones.png";
import shadow from "../assets/shadow.png";
import { ChevronRight } from "lucide-react";
import ProductCard from "../components/ProductCard";
import speaker from "../assets/speaker.png";
import earphones from "../assets/earphones.png";

export default function LandingPage() {
  return (
    <>
      <div className="bg-[#000000] max-w-7xl h-140 relative text-white">
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

      <div className="flex flex-col items-center h-170.75 mt-10 gap-4 ">
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

      <div className="bg-[#d87d4a] relative flex justify-center  h-150 mt-35">
        <div className="border absolute bottom-35 border-white w-139.5 h-139.5 rounded-full opacity-20 "></div>
        <div className="border absolute border-white w-90 h-90 rounded-full opacity-20 "></div>
        <div className="border absolute border-white w-77 h-77 rounded-full opacity-20 top-6 "></div>
      </div>
    </>
  );
}
