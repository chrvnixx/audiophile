import React from "react";
import zx7 from "../assets/Zx7 page/zx7.png";
import img1 from "../assets/zx7 page/img1.png";
import img2 from "../assets/zx7 page/img2.png";
import img3 from "../assets/zx7 page/img3.png";
import mark2 from "../assets/xx99 mark 1 page/mark2.png";
import xx59 from "../assets/xx99 mark 2 page/xx59.png";
import zx9 from "../assets/xx99 mark 2 page/zx9.png";
import CheckoutButtons from "../components/CheckoutButtons";
import { ChevronRight } from "lucide-react";
import headphones from "../assets/landing page/headphones.png";
import shadow from "../assets/landing page/shadow.png";
import speaker from "../assets/landing page/speaker.png";
import earphones from "../assets/landing page/earphones.png";
import ProductCard from "../components/ProductCard";
import EndStatement from "../components/EndStatement";

import ProductCard2 from "../components/ProductCard2";

export default function Zx7SpeakerPage() {
  return (
    <div className=" relative flex flex-col items-center py-5">
      <span className="absolute left-6 opacity-50">Go Back</span>

      <div className="w-82 flex flex-col mt-16 ">
        <div className="bg-[#f1f1f1] h-88 flex justify-center items-center rounded-xl  ">
          <div>
            <img src={zx7} alt="zx7 speaker image" />
          </div>
        </div>
        <div className="flex flex-col  mt-8">
          {/* <span className=" tracking-[0.6em] font-light  text-[#d87d4a] text-[14px] ">
            NEW PRODUCT
          </span> */}
          <h2 className=" font-semibold text-[28px] tracking-widest mt-6 text-black ">
            ZX7 <br />
            SPEAKER
          </h2>

          <p className="text-[15px]  opacity-50  mt-8 text-black ">
            Upgrade your sound system with the all new <br />
            ZX9 active speaker. It’s a bookshelf speaker <br />
            system that offers truly wireless connectivity <br />- creating new
            possibilities for more pleasing <br />
            and practical audio setups.
          </p>

          <span className="mt-6 font-bold">$ 3,500</span>

          <CheckoutButtons />

          <h2 className="font-semibold text-[24px] tracking-widest mt-22 text-black">
            FEATURES
          </h2>

          <p className="text-[15px]  opacity-50  mt-6 text-black">
            Reap the advantages of a flat diaphragm <br />
            tweeter cone. This provides a fast response <br />
            rate and excellent high frequencies that lower <br />
            tiered bookshelf speakers cannot provide. The <br />
            woofers are made from aluminum that <br />
            produces a unique and clear sound. XLR inputs <br />
            allow you to connect to a mixer for more <br />
            advanced usage.
            <span className="mt-4">
              The ZX7 speaker is the perfect blend of stylish <br />
              design and high performance. It houses <br />
              an encased MDF wooden enclosure which <br />
              minimises acoustic resonance. Dual <br />
              connectivity allows pairing through bluetooth <br />
              or traditional optical and RCA input. Switch <br />
              input sources and control volume at your <br />
              finger tips with the included wireless remote. <br />
              This versatile speaker is equipped to deliver an <br />
              authentic listening experience.
            </span>
          </p>

          <h2 className="font-semibold text-[24px] tracking-widest mt-22 text-black">
            IN THE BOX
          </h2>

          <div className="flex flex-col text-15px gap-3  mt-4 ">
            <div className="flex items-center gap-5">
              <span className="text-[#d87d4a]">2x</span>
              <span className="opacity-50">Speaker Unit</span>
            </div>
            <div className="flex items-center gap-5">
              <span className="text-[#d87d4a]">2x</span>
              <span className="opacity-50">Speaker Cloth Panel</span>
            </div>
            <div className="flex items-center gap-5">
              <span className="text-[#d87d4a]">1x</span>
              <span className="opacity-50">User Manual</span>
            </div>
            <div className="flex items-center gap-5">
              <span className="text-[#d87d4a]">1x</span>
              <span className="opacity-50">3.5mm 7.5m Audio Cable</span>
            </div>
            <div className="flex items-center gap-5">
              <span className="text-[#d87d4a]">1x</span>
              <span className="opacity-50"> 7.7m Optical Cable</span>
            </div>
          </div>
        </div>
      </div>

      <div className=" flex flex-col gap-5 mt-22">
        <img className="rounded-xl" src={img1} alt="" />
        <img className="rounded-xl" src={img2} alt="" />
        <img className="rounded-xl" src={img3} alt="" />
      </div>

      <div>
        <h2 className="font-semibold text-[24px] tracking-widest mt-30 text-black text-center">
          YOU MAY ALSO LIKE
        </h2>

        <div className="flex flex-col items-center mt-10 text-white gap-14">
          <ProductCard2 image={mark2} product="XX99 MARK I" />
          <ProductCard2 image={xx59} product="XX59" />
          <ProductCard2 image={zx9} product="ZX9 SPEAKER" />
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
    </div>
  );
}
