import React from "react";
import BrownButton from "./BrownButton";

export default function CheckoutButtons() {
  return (
    <div className="flex justify-between items-center pr-11 ">
      <div className="bg-[#f1f1f1] flex justify-between items-center w-30 h-12 mt-7  ">
        <button className=" px-3 py-2.5 opacity-25 ">-</button>
        <span className=" p-2.5 text-[13px] ">1</span>
        <button className=" px-3 py-2.5 opacity-25">+</button>
      </div>
      <div className="text-white">
        <BrownButton text="ADD TO CART" />
      </div>
    </div>
  );
}
