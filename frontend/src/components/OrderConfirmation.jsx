import { CheckFatIcon } from "@phosphor-icons/react";
import React from "react";
import { useCart } from "./CartContext";
import BrownButton from "./BrownButton";
import { useNavigate } from "react-router";

export default function OrderConfirmation({
  grandTotal,
  setOpenConfirmationModal,
}) {
  const { cart } = useCart();
  const navigate = useNavigate();

  function handleClick() {
    setOpenConfirmationModal(false);
    navigate("/");
  }

  return (
    <div className="bg-white p-8 ">
      <div className="w-16 h-16 rounded-full bg-[#d87d4a] flex justify-center items-center ">
        <CheckFatIcon size={30} weight="fill" color={"white"} />
      </div>

      <h2 className="font-medium text-[25px] mt-6 ">
        THANK YOU <br /> FOR YOUR ORDER
      </h2>
      <p className="opacity-50 mt-4">
        You will receive an email confirmation <br />
        shortly.
      </p>

      <div className="rounded-xl overflow-hidden mt-4">
        <div className="bg-[#f1f1f1] p-8 ">
          <div className="flex flex-col gap-3  items-center justify-between -">
            <div className="flex gap-14 ">
              <div className="flex justify-between gap-5 items-center">
                <img className="w-7 h-8" src={cart[0].image} alt="" />
                <div className="flex flex-col text-[15px] font-bold">
                  <span>{cart[0].name}</span>
                  <span className="opacity-50">
                    ${cart[0].price.toLocaleString()}
                  </span>
                </div>
              </div>
              <span className="font-bold opacity-50">x{cart[0].quantity}</span>
            </div>

            <hr className="border-0.5 w-full border-black/20" />

            <p className="text-[12px] opacity-50 font-bold ">
              and {cart.length - 1} other item(s)
            </p>
          </div>
        </div>

        <div className="bg-black flex flex-col text-white p-6 gap-2">
          <span className="opacity-60">GRAND TOTAL</span>
          <span>${grandTotal.toLocaleString()} </span>
        </div>
      </div>
      <div className="max-w-7xl mx-auto  text-white mt-6">
        <button
          onClick={handleClick}
          className="bg-[#d87d4a] text-[13px] w-full py-4 font-medium tracking-[1px] "
        >
          BACK TO HOME{" "}
        </button>
      </div>
    </div>
  );
}
