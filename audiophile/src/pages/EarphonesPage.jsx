import React from "react";
import yx1 from "../assets/earphones-page/yx1.svg";
import BrownButton from "../components/BrownButton";
import { ChevronRight } from "lucide-react";
import headphones from "../assets/landing-page/headphones.svg";
import shadow from "../assets/landing-page/shadow.png";
import speaker from "../assets/landing-page/speaker.svg";
import earphones from "../assets/landing-page/earphones.svg";
import ProductCard from "../components/ProductCard";
import EndStatement from "../components/EndStatement";

export default function EarphonesPage() {
  return (
    <div className="flex flex-col items-center">
      <div className="bg-[#000000] flex flex-col items-center w-full px-21 py-8 text-white ">
        <h2 className="text-[28px] lg:text-[40px] ">EARPHONES</h2>
      </div>

      <div className="w-82 flex flex-col mt-16 lg:w-378 lg:flex-row lg:justify-center lg:items-center lg:gap-65 lg:mt-40 ">
        <div className="bg-[#f1f1f1] h-88 flex justify-center items-center rounded-xl lg:h-140 lg:w-140  ">
          <div>
            <img className="w-50" src={yx1} alt="yx1  earphone image" />
          </div>
        </div>
        <div className="flex flex-col items-center mt-8 text-white lg:items-start lg:mt-0 ">
          <span className=" tracking-[0.6em] font-light ml-3  text-[#d87d4a] text-[14px] lg:text-start lg:ml-0  ">
            NEW PRODUCT
          </span>

          <h2 className=" font-semibold text-[28px] tracking-widest mt-6 text-black text-center lg:text-[40px] lg:text-start  ">
            YX1 WIRELESS <br />
            EARPHONES
          </h2>

          <p className="text-[15px]  opacity-50 text-center mt-8 text-black lg:text-start  ">
            Tailor your listening experience with bespoke <br />
            dynamic drivers from the new YX1 Wireless <br />
            Earphones. Enjoy incredible high-fidelity <br />
            sound even in noisy environments with its <br />
            active noise cancellation feature.
          </p>
          <BrownButton text="SEE PRODUCT" linkto="/earphones/yx1" />
        </div>
      </div>

      <div className="mt-30 text-black lg:mt-40 ">
        <div className="flex flex-col items-center gap-4 w-full max-w-82 lg:flex-row lg:justify-center lg:gap-10  ">
          <ProductCard
            image={headphones}
            shadow={shadow}
            ChevronRight={ChevronRight}
            linkto="/headphones"
          />
          <ProductCard
            image={speaker}
            shadow={shadow}
            ChevronRight={ChevronRight}
            linkto="/speakers"
          />
          <ProductCard
            image={earphones}
            shadow={shadow}
            ChevronRight={ChevronRight}
            linkto="/earphones"
          />
        </div>
      </div>

      <EndStatement />
    </div>
  );
}
