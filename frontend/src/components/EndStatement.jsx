import React from "react";
import model from "../assets/landing page/model.png";

export default function EndStatement() {
  return (
    <div className="mt-30 text-black ">
      <div className="rounded-xl overflow-hidden">
        <img src={model} alt="man wearing headphone" />
      </div>

      <h2 className=" font-semibold text-[28px] tracking-widest mt-10 text-center">
        BRINGING YOU THE <br /> <span className="text-[#d87d4a]">BEST</span>{" "}
        AUDIO GEAR
      </h2>
      <p className="text-[15px]  opacity-50 text-center mt-8 ">
        Located at the heart of New York City,
        <br /> Audiophile is the premier store for high end <br /> headphones,
        earphones, speakers, and audio <br /> accessories. We have a large
        showroom and <br />
        luxury demonstration rooms available for you <br />
        to browse and experience a wide range of our <br /> products. Stop by
        our store to meet some of <br /> the fantastic people who make
        Audiophile the <br />
        best place to buy your portable audio equipment.
      </p>
    </div>
  );
}
