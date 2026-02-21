import React from "react";
import xx99 from "../assets/headphones page/xx99.png";
import BrownButton from "../components/BrownButton";
import ProductCardCategory from "../components/ProductCardCategory";
import mark1 from "../assets/headphones page/mark1.png";
import xx59 from "../assets/headphones page/xx59.png";
import { ChevronRight } from "lucide-react";
import headphones from "../assets/landing page/headphones.png";
import shadow from "../assets/landing page/shadow.png";
import speaker from "../assets/landing page/speaker.png";
import earphones from "../assets/landing page/earphones.png";
import ProductCard from "../components/ProductCard";
import EndStatement from "../components/EndStatement";

export default function HeadphonesPage() {
  return (
    <div className=" flex flex-col items-center text-white ">
      <div className="bg-[#000000] flex flex-col items-center w-full px-21 py-8 ">
        <h2 className="text-[28px] ">HEADPHONES</h2>
      </div>

      <div className="w-82 flex flex-col mt-16 ">
        <div className="bg-[#f1f1f1] h-88 flex justify-center items-center  ">
          <div>
            <img src={xx99} alt="xx99 mark 2 headphones image" />
          </div>
        </div>
        <div className="flex flex-col items-center mt-8">
          <span className=" tracking-[0.6em] font-light ml-3 text-[#d87d4a] text-[14px] ">
            NEW PRODUCT
          </span>

          <h2 className=" font-semibold text-[28px] tracking-widest mt-6 text-black ">
            XX99 MARK II <br />
            HEADPHONES
          </h2>

          <p className="text-[15px]  opacity-50 text-center mt-8 text-black ">
            The new XX99 Mark II headphones is the <br />
            pinnacle of pristine audio. It redefines your <br />
            premium headphone experience by <br />
            reproducing the balanced depth and precision <br />
            of studio-quality sound.
          </p>
          <BrownButton text="SEE PRODUCT" />
        </div>
      </div>

      <ProductCardCategory
        image={mark1}
        device="XX99 MARK I"
        category="HEADPHONES"
        line1="As the gold standard for headphones, the "
        line2="classic XX99 Mark I offers detailed and "
        line3="accurate audio reproduction for audiophiles, "
        line4="mixing engineers, and music aficionados alike"
        line5="in studios and on the go."
      />
      <ProductCardCategory
        image={xx59}
        device="XX59"
        category="HEADPHONES"
        line1="Enjoy your audio almost anywhere and   "
        line2="customize it to your specific tastes with the "
        line3="XX59 headphones. The stylish yet durable "
        line4="versatile wireless headset is a brilliant "
        line5="companion at home or on the move."
      />

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
