import { XIcon } from "@phosphor-icons/react";
import React from "react";

export default function Cart({ setOpenCart }) {
  return (
    <div className="relative bg-white w-327 mx-6 px-7 py-8 rounded-xl ">
      <div className="opacity-50 absolute right-7 top-3">
        <XIcon onClick={() => setOpenCart(false)} size={20} />
      </div>
      <div className="flex justify-between mt-2">
        <h3 className="font-bold">CART</h3>
        <span className="opacity-50 active:underline text-[15px]">
          Remove all
        </span>
      </div>

      <div className="flex justify-between mt-8">
        <span className="opacity-50">TOTAL</span>
        <span className="font-bold">$</span>
      </div>

      <div className="w-full flex justify-center">
        <button className="bg-[#d87d4a] text-[13px] text-white py-3 w-67 mt-6 ">
          CHECKOUT
        </button>
      </div>
    </div>
  );
}
