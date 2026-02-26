import React from "react";
import BrownButton from "./BrownButton";

export default function ProductCard2({ image, product, linkto }) {
  return (
    <div className="flex flex-col items-center ">
      <div className="bg-[#f1f1f1] flex justify-center items-center h-30 w-81 rounded-xl">
        <img src={image} alt="" />
      </div>
      <h2 className="font-semibold text-[24px] tracking-widest mt-8 text-black text-center">
        {product}
      </h2>
      <BrownButton text="SEE PRODUCT" linkto={linkto} />
    </div>
  );
}
