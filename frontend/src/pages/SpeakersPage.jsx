import React from "react";
import zx9 from "../assets/speakers page/zx9.png";
import zx7 from "../assets/speakers page/zx7.png";
import BrownButton from "../components/BrownButton";
import ProductCardCategory from "../components/ProductCardCategory";
import { ChevronRight } from "lucide-react";
import headphones from "../assets/landing page/headphones.png";
import shadow from "../assets/landing page/shadow.png";
import speaker from "../assets/landing page/speaker.png";
import earphones from "../assets/landing page/earphones.png";
import ProductCard from "../components/ProductCard";
import EndStatement from "../components/EndStatement";

export default function SpeakersPage() {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="bg-[#000000] flex flex-col items-center w-full px-21 py-8 text-white ">
        <h2 className="text-[28px] ">SPEAKERS</h2>
      </div>

      <div className="w-82 flex flex-col mt-16 ">
        <div className="bg-[#f1f1f1] h-88 flex justify-center items-center rounded-xl ">
          <div>
            <img src={zx9} alt="zx9  speaker image" />
          </div>
        </div>
        <div className="flex flex-col items-center mt-8 text-white">
          <span className=" tracking-[0.6em] font-light ml-3 text-[#d87d4a] text-[14px]  ">
            NEW PRODUCT
          </span>

          <h2 className=" font-semibold text-[28px] tracking-widest mt-6 text-black text-center ">
            ZX9 <br />
            SPEAKER
          </h2>

          <p className="text-[15px]  opacity-50 text-center mt-8 text-black ">
            Upgrade your sound system with the all new <br /> ZX9 active
            speaker. It’s a bookshelf speaker <br />
            system that offers truly wireless connectivity <br />
            -- creating new possibilities for more pleasing <br />
            and practical audio setups.
          </p>
          <BrownButton text="SEE PRODUCT" linkto="/speakers/zx9" />
        </div>
      </div>

      <ProductCardCategory
        image={zx7}
        device="ZX7"
        category="SPEAKER"
        line1="Stream high quality sound wirelessly with"
        line2="minimal loss. The ZX7 bookshelf speaker uses "
        line3="high-end audiophile components that  "
        line4="represents the top of the line powered"
        line5="speakers for home or studio use."
        linkto="/speakers/zx7"
      />

      <div className="mt-30 text-black ">
        <div className="flex flex-col items-center gap-4 w-full max-w-82">
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
