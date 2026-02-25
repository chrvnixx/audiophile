import React from "react";
import yx1 from "../assets/yx1 page/yx1.png";
import img1 from "../assets/yx1 page/img1.png";
import img2 from "../assets/yx1 page/img2.png";
import img3 from "../assets/yx1 page/img3.png";
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

export default function Yx1EarphonePage() {
  return (
    <div className=" relative flex flex-col items-center py-5">
      <span className="absolute left-6 opacity-50">Go Back</span>

      <div className="w-82 flex flex-col mt-16 ">
        <div className="bg-[#f1f1f1] h-88 flex justify-center items-center rounded-xl  ">
          <div>
            <img src={yx1} alt="yx1 earphones image" />
          </div>
        </div>
        <div className="flex flex-col  mt-8">
          <span className=" tracking-[0.6em] font-light  text-[#d87d4a] text-[14px] ">
            NEW PRODUCT
          </span>
          <h2 className=" font-semibold text-[28px] tracking-widest mt-6 text-black ">
            YX1 WIRELESS <br />
            EARPHONES
          </h2>

          <p className="text-[15px]  opacity-50  mt-8 text-black ">
            Tailor your listening experience with bespoke <br />
            dynamic drivers from the new YX1 Wireless <br />
            Earphones. Enjoy incredible high-fidelity <br />
            sound even in noisy environments with its <br />
            active noise cancellation feature.
          </p>

          <span className="mt-6 font-bold">$ 599</span>

          <CheckoutButtons />

          <h2 className="font-semibold text-[24px] tracking-widest mt-22 text-black">
            FEATURES
          </h2>

          <p className="text-[15px]  opacity-50  mt-6 text-black">
            Experience unrivalled stereo sound thanks to <br />
            innovative acoustic technology. With improved <br />
            ergonomics designed for full day wearing, <br />
            these revolutionary earphones have been <br />
            finely crafted to provide you with the perfect <br />
            fit, delivering complete comfort all day long <br /> while enjoying
            exceptional noise isolation and <br />
            truly immersive sound.
            <span className="mt-4">
              The YX1 Wireless Earphones features <br />
              customizable controls for volume, music, calls,
              <br /> and voice assistants built into both earbuds. <br />
              The new 7-hour battery life can be extended <br /> up to 28 hours
              with the charging case, giving <br />
              you uninterrupted play time. Exquisite <br />
              craftsmanship with a splash resistant design <br />
              now available in an all new white and grey color <br />
              scheme as well as the popular classic black.
            </span>
          </p>

          <h2 className="font-semibold text-[24px] tracking-widest mt-22 text-black">
            IN THE BOX
          </h2>
          <div className="flex flex-col text-15px gap-3 mt-4  ">
            <div className="flex items-center gap-5">
              <span className="text-[#d87d4a]">2x</span>
              <span className="opacity-50">Earphone Unit</span>
            </div>
            <div className="flex items-center gap-5">
              <span className="text-[#d87d4a]">6x</span>
              <span className="opacity-50">Multi-size Earplugs </span>
            </div>
            <div className="flex items-center gap-5">
              <span className="text-[#d87d4a]">1x</span>
              <span className="opacity-50">User Manual</span>
            </div>
            <div className="flex items-center gap-5">
              <span className="text-[#d87d4a]">1x</span>
              <span className="opacity-50">Usb-C Charging Cable</span>
            </div>
            <div className="flex items-center gap-5">
              <span className="text-[#d87d4a]">1x</span>
              <span className="opacity-50"> Travel Pouch</span>
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
