import { XIcon } from "@phosphor-icons/react";
import React from "react";
import { useCart } from "./CartContext";

export default function Cart({ setOpenCart }) {
  const { cart, setCart, quantity } = useCart();

  console.log(cart);
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

      {cart.map((items) => (
        <div key={items.id} className=" mt-8">
          <div className="flex items-center justify-center">
            <div className="w-16 h-16 bg-[#f1f1f1] rounded-xl flex justify-center items-center ">
              <img className="w-9 h-10" src={items.image} alt="" />
            </div>

            <div className="flex flex-col  ml-4 mr-4">
              <span className="font-bold text-[15px] ">{items.name} </span>
              <span className="opacity-50 font-bold text-[15px] ">
                {items.price}
              </span>
            </div>

            <div>
              <div className=" bg-[#f1f1f1] flex justify-between items-center w-24 h-8  ">
                <button className=" px-4 py-2.5  text-gray-500/50  active:text-[#d87d4a] cursor-pointer  ">
                  -
                </button>
                <span className=" bg-[#f1f1f1]  text-[13px] ">{quantity}</span>

                <button className="  px-4 py-2.5 text-gray-500/50  active:text-[#d87d4a] cursor-pointer   ">
                  +
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}

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
