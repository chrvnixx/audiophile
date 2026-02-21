import React from "react";
import yx1 from "../assets/earphones page/yx1.png";
import BrownButton from "../components/BrownButton";
import { ChevronRight } from "lucide-react";
import headphones from "../assets/landing page/headphones.png";
import shadow from "../assets/landing page/shadow.png";
import speaker from "../assets/landing page/speaker.png";
import earphones from "../assets/landing page/earphones.png";
import ProductCard from "../components/ProductCard";
import EndStatement from "../components/EndStatement";

export default function EarphonesPage() {
  return (
    <div className="flex flex-col items-center">
      <div className="bg-[#000000] flex flex-col items-center w-full px-21 py-8 text-white ">
        <h2 className="text-[28px] ">EARPHONES</h2>
      </div>

      <div className="w-82 flex flex-col mt-16 ">
        <div className="bg-[#f1f1f1] h-88 flex justify-center items-center rounded-xl ">
          <div>
            <img src={yx1} alt="yx1  earphone image" />
          </div>
        </div>
        <div className="flex flex-col items-center mt-8 text-white">
          <span className=" tracking-[0.6em] font-light ml-3 text-[#d87d4a] text-[14px]  ">
            NEW PRODUCT
          </span>

          <h2 className=" font-semibold text-[28px] tracking-widest mt-6 text-black text-center ">
            YX1 WIRELESS <br />
            EARPHONES
          </h2>

          <p className="text-[15px]  opacity-50 text-center mt-8 text-black ">
            Tailor your listening experience with bespoke <br />
            dynamic drivers from the new YX1 Wireless <br />
            Earphones. Enjoy incredible high-fidelity <br />
            sound even in noisy environments with its <br />
            active noise cancellation feature.
          </p>
          <BrownButton text="SEE PRODUCT" />
        </div>
      </div>

      <div className="mt-30 text-black ">
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
      </div>

      <EndStatement />
    </div>
  );
}
