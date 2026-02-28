import { ShoppingCartSimpleIcon, XIcon } from "@phosphor-icons/react";
import React, { useEffect, useState } from "react";
import { useCart } from "./CartContext";
import { useNavigate } from "react-router";

export default function Cart({ setOpenCart }) {
  const [isEmpty, setIsempty] = useState(false);
  const { cart, total, decreaseQuantity, increaseQuantity, removeAll } =
    useCart();

  const navigate = useNavigate();

  function handleCheckout() {
    setOpenCart(false);
    navigate("/checkout");
  }

  return (
    <div className="relative bg-white w-327 mx-6 px-7 py-8 max-h-[70vh] overflow-y-auto rounded-xl ">
      <div className="opacity-50 absolute right-7 top-3">
        <XIcon onClick={() => setOpenCart(false)} size={20} color="#d87d4a" />
      </div>
      {cart.length === 0 ? (
        <div className="flex flex-col items-center gap-4">
          <div className="h-18 w-18 bg-[#d87d4a] rounded-full flex justify-center items-center ">
            <ShoppingCartSimpleIcon size={40} weight="fill" color="white" />
          </div>
          <p className="text-center opacity-50">
            Your cart is currently empty, add items to continue.
          </p>
        </div>
      ) : (
        <div>
          <div className="flex justify-between mt-2">
            <h3 className="font-bold">CART({cart?.length})</h3>
            <span
              onClick={removeAll}
              className="opacity-50 hover:underline active:underline text-[15px] cursor-pointer"
            >
              Remove all
            </span>
          </div>

          {cart.map((items) => (
            <div key={items.id} className=" mt-8">
              <div className="flex items-center justify-between ">
                <div className="flex gap-4 items-center">
                  <div className="w-16 h-16 bg-[#f1f1f1] rounded-xl flex justify-center items-center ">
                    <img className="w-9 h-10" src={items.image} alt="" />
                  </div>

                  <div className="flex flex-col  ">
                    <span className="font-bold text-[15px] text-left ">
                      {items.name}{" "}
                    </span>
                    <span className="opacity-50 font-bold text-[15px] ">
                      ${Number(items.price).toLocaleString()}
                    </span>
                  </div>
                </div>

                <div>
                  <div className=" bg-[#f1f1f1] flex justify-between items-center w-24 h-8  ">
                    <button
                      onClick={() => decreaseQuantity(items.id)}
                      className=" px-4 py-2.5  text-gray-500/50  active:text-[#d87d4a] cursor-pointer  "
                    >
                      -
                    </button>
                    <span className=" bg-[#f1f1f1]  text-[13px] ">
                      {items.quantity}
                    </span>

                    <button
                      onClick={() => increaseQuantity(items.id)}
                      className="  px-4 py-2.5 text-gray-500/50  active:text-[#d87d4a] cursor-pointer   "
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}

          <div className="flex justify-between mt-8">
            <span className="opacity-50">TOTAL</span>
            <span className="font-bold">${total.toLocaleString()}</span>
          </div>

          <div className="w-full flex justify-center">
            <button
              onClick={handleCheckout}
              className="bg-[#d87d4a] text-[13px] text-white py-3 w-67 mt-6 "
            >
              CHECKOUT
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
