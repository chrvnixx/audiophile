import React, { useEffect, useState } from "react";
import BrownButton from "../components/BrownButton";
import { useCart } from "../components/CartContext";
import { useNavigate } from "react-router";

export default function Checkout({ setOpenConfirmationModal }) {
  const navigate = useNavigate();
  const { cart, total } = useCart();

  const vat = (total * 10) / 100;
  const shipping = cart.length * 20;
  const grandTotal = total + vat + shipping;

  const [isHidden, setIsHidden] = useState(true);

  const handleRadioChange = (value) => {
    if (value === "payment2") {
      return setIsHidden(true);
    } else {
      return setIsHidden(false);
    }
  };

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <div className="bg-[#f1f1f1] px-6 pt-4 pb-6 ">
      <span
        onClick={() => navigate(-1)}
        className="opacity-50 active:underline hover:underline "
      >
        Go Back
      </span>

      <form onSubmit={handleSubmit} className=" mt-6">
        <div className="bg-white  p-6">
          <h2 className="font-medium text-[28px] mb-8">CHECKOUT</h2>

          <span className="text-[#d87d4a] text-[13px] font-medium mt-8 ">
            BILLING DETAILS
          </span>

          <div className="mt-4 flex flex-col gap-2">
            <label className="text-[12px] ">Name</label>
            <input
              className="border h-14 border-[#cfcfcf] rounded-lg text-[14px] pl-6 "
              type="text"
              required
              placeholder="Alexei Ward"
            />
          </div>
          <div className="mt-4 flex flex-col gap-2">
            <label className="text-[12px] ">Email Address</label>
            <input
              className="border h-14 border-[#cfcfcf] rounded-lg text-[14px] pl-6 "
              type="text"
              required
              placeholder="alexei@gmail.com"
            />
          </div>
          <div className="mt-4 flex flex-col gap-2 mb-8">
            <label className="text-[12px] ">Phone Number</label>
            <input
              className="border h-14 border-[#cfcfcf] rounded-lg text-[14px] pl-6 "
              type="text"
              required
              placeholder="+1 202-555-0136"
            />
          </div>

          <span className="text-[#d87d4a] text-[13px] font-medium  ">
            SHIPPING INFO
          </span>

          <div className="mt-4 flex flex-col gap-2">
            <label className="text-[12px] ">Your Address </label>
            <input
              className="border h-14 border-[#cfcfcf] rounded-lg text-[14px] pl-6 "
              type="text"
              required
              placeholder="1137 Williams Avenue"
            />
          </div>
          <div className="mt-4 flex flex-col gap-2">
            <label className="text-[12px] ">Zip Code </label>
            <input
              className="border h-14 border-[#cfcfcf] rounded-lg text-[14px] pl-6 "
              type="text"
              required
              placeholder="10001"
            />
          </div>
          <div className="mt-4 flex flex-col gap-2">
            <label className="text-[12px] ">City </label>
            <input
              className="border h-14 border-[#cfcfcf] rounded-lg text-[14px] pl-6 "
              type="text"
              required
              placeholder="New York"
            />
          </div>
          <div className="mt-4 flex flex-col gap-2 mb-8">
            <label className="text-[12px] ">Country</label>
            <input
              className="border h-14 border-[#cfcfcf] rounded-lg text-[14px] pl-6 "
              type="text"
              required
              placeholder="United States"
            />
          </div>

          <span className="text-[#d87d4a] text-[13px] font-medium mb-3   ">
            PAYMENT DETAILS
          </span>

          <div>
            <label className="text-[12px]  ">Payment Method </label>
            <div
              tabIndex="0"
              className="border border-[#cfcfcf] h-14 rounded-lg flex items-center gap-4 pl-5 focus:border-[#d87d4a mt-2 "
            >
              <input
                type="radio"
                name="payment"
                value="payment1"
                onChange={(e) => handleRadioChange(e.target.value)}
                className="accent-[#d87d4a] "
              />
              <span className="text-[14px]">e-Money</span>
            </div>
          </div>

          <div className="mt-4">
            <div className="border border-[#cfcfcf] h-14 rounded-lg flex items-center gap-4 pl-5 ">
              <input
                type="radio"
                required
                name="payment"
                value="payment2"
                onChange={(e) => handleRadioChange(e.target.value)}
                className="accent-[#d87d4a] "
              />
              <span className="text-[14px]">Cash on Delivery</span>
            </div>
            {isHidden ? (
              ""
            ) : (
              <div>
                <div className="mt-4 flex flex-col gap-2">
                  <label className="text-[12px] ">e-Money Number</label>
                  <input
                    className="border h-14 border-[#cfcfcf] rounded-lg text-[14px] pl-6 "
                    type="text"
                    placeholder="238521993"
                  />
                </div>
                <div className="mt-4 flex flex-col gap-2">
                  <label className="text-[12px] ">e-Money Pin</label>
                  <input
                    className="border h-14 border-[#cfcfcf] rounded-lg text-[14px] pl-6 "
                    type="text"
                    placeholder="6891"
                  />
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="mt-8 py-8 px-6 bg-white flex flex-col">
          <h3 className=" text-[18px] font-medium ">SUMMARY</h3>

          {cart.map((items) => (
            <div key={items.id} className=" mt-8">
              <div className="flex items-center justify-between ">
                <div className="flex items-center gap-4">
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
                  <span className="text-[15px] font-bold opacity-50 ">
                    x{items.quantity}
                  </span>
                </div>
              </div>
            </div>
          ))}

          <div className=" flex flex-col  mt-8 gap-2">
            <div className="flex justify-between">
              <span className="opacity-50 text-[15px] ">TOTAL</span>
              <span className="font-medium text-[18px] ">
                ${total.toLocaleString()}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="opacity-50 text-[15px] ">SHIPPING</span>
              <span className="font-medium text-[18px] ">
                ${shipping.toLocaleString()}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="opacity-50 text-[15px] ">VAT INCLUDED</span>
              <span className="font-medium text-[18px] ">
                ${vat.toLocaleString()}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="opacity-50 text-[15px] ">GRAND TOTAL</span>
              <span className="font-medium text-[18px] ">
                ${grandTotal.toLocaleString()}
              </span>
            </div>
          </div>

          <div className="flex justify-center text-white">
            <button
              onClick={() => setOpenConfirmationModal(true)}
              type="submit"
              className="bg-[#d87d4a] w-full  py-3.75 text-[13px] mt-7 tracking-wider  "
            >
              CONTINUE & PAY
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
