import React from "react";
import BrownButton from "../components/BrownButton";

export default function Checkout() {
  return (
    <div className="bg-[#f1f1f1] px-6 pt-4 pb-6 ">
      <span className="opacity-50 ">Go Back</span>

      <form className=" mt-6">
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
              placeholder="Alexei Ward"
            />
          </div>
          <div className="mt-4 flex flex-col gap-2">
            <label className="text-[12px] ">Email Address</label>
            <input
              className="border h-14 border-[#cfcfcf] rounded-lg text-[14px] pl-6 "
              type="text"
              placeholder="alexei@gmail.com"
            />
          </div>
          <div className="mt-4 flex flex-col gap-2 mb-8">
            <label className="text-[12px] ">Phone Number</label>
            <input
              className="border h-14 border-[#cfcfcf] rounded-lg text-[14px] pl-6 "
              type="Number"
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
              placeholder="1137 Williams Avenue"
            />
          </div>
          <div className="mt-4 flex flex-col gap-2">
            <label className="text-[12px] ">Zip Code </label>
            <input
              className="border h-14 border-[#cfcfcf] rounded-lg text-[14px] pl-6 "
              type="text"
              placeholder="10001"
            />
          </div>
          <div className="mt-4 flex flex-col gap-2">
            <label className="text-[12px] ">City </label>
            <input
              className="border h-14 border-[#cfcfcf] rounded-lg text-[14px] pl-6 "
              type="text"
              placeholder="New York"
            />
          </div>
          <div className="mt-4 flex flex-col gap-2 mb-8">
            <label className="text-[12px] ">Country</label>
            <input
              className="border h-14 border-[#cfcfcf] rounded-lg text-[14px] pl-6 "
              type="text"
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
                className="accent-[#d87d4a] "
              />
              <span className="text-[14px]">e-Money</span>
            </div>
          </div>

          <div className="mt-4">
            <div className="border border-[#cfcfcf] h-14 rounded-lg flex items-center gap-4 pl-5 ">
              <input
                type="radio"
                name="payment"
                className="accent-[#d87d4a] "
              />
              <span className="text-[14px]">Cash on Delivery</span>
            </div>

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
        </div>
        <div className="mt-8 py-8 px-6 bg-white flex flex-col">
          <h3 className=" text-[18px] font-medium ">SUMMARY</h3>

          <div className=" flex flex-col  mt-8 gap-2">
            <div className="flex justify-between">
              <span className="opacity-50 text-[15px] ">TOTAL</span>
              <span className="font-medium text-[18px] ">$</span>
            </div>
            <div className="flex justify-between">
              <span className="opacity-50 text-[15px] ">SHIPPING</span>
              <span className="font-medium text-[18px] ">$</span>
            </div>
            <div className="flex justify-between">
              <span className="opacity-50 text-[15px] ">VAT INCLUDED</span>
              <span className="font-medium text-[18px] ">$</span>
            </div>
            <div className="flex justify-between">
              <span className="opacity-50 text-[15px] ">GRAND TOTAL</span>
              <span className="font-medium text-[18px] ">$</span>
            </div>
          </div>

          <div className="flex justify-center text-white">
            <button
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
