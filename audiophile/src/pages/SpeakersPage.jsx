import zx9 from "../assets/landing-page/ZX9.svg";
import zx7 from "../assets/speakers-page/zx7.svg";
import BrownButton from "../components/BrownButton";
import ProductCardCategory from "../components/ProductCardCategory";
import { ChevronRight } from "lucide-react";
import headphones from "../assets/landing-page/headphones.svg";
import shadow from "../assets/landing-page/shadow.png";
import speaker from "../assets/landing-page/speaker.svg";
import earphones from "../assets/landing-page/earphones.svg";
import ProductCard from "../components/ProductCard";
import EndStatement from "../components/EndStatement";

export default function SpeakersPage() {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="bg-[#000000] flex flex-col items-center w-full px-21 py-8 text-white ">
        <h2 className="text-[28px] lg:text-[40px]  ">SPEAKERS</h2>
      </div>

      <div className="w-82 flex flex-col mt-16 lg:w-378 lg:flex-row lg:justify-center lg:items-center lg:gap-65 lg:mt-40 lg:pl-25 ">
        <div className="bg-[#f1f1f1] h-88 flex justify-center items-center rounded-xl lg:w-135 lg:h-140 ">
          <div>
            <img className="lg:w-72" src={zx9} alt="zx9  speaker image" />
          </div>
        </div>
        <div className="flex flex-col items-center mt-8 text-white lg:items-start lg:mt-0 ">
          <span className=" tracking-[0.6em] font-light ml-3 text-[#d87d4a] text-[14px] lg:text-start  ">
            NEW PRODUCT
          </span>

          <h2 className=" font-semibold text-[28px] tracking-widest mt-6 text-black text-center lg:text-[40px] lg:text-start  ">
            ZX9 <br />
            SPEAKER
          </h2>

          <p className="text-[15px]  opacity-50 text-center mt-8 text-black lg:w-105 lg:text-start  ">
            Upgrade your sound system with the all new ZX9 active speaker. It’s
            a bookshelf speaker system that offers truly wireless connectivity
            creating new possibilities for more pleasing and practical audio
            setups.
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

      <div className="mt-30 lg:mt-40 text-black ">
        <div className="flex flex-col items-center gap-4 w-full max-w-82 lg:flex-row lg:justify-center lg:gap-10 ">
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
