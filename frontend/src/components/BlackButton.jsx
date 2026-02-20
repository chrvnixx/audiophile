import React from "react";

export default function BlackButton({ text }) {
  return (
    <div>
      <button className="bg-[#000000] px-7.5 py-3.75 text-[13px] mt-7 tracking-wider ">
        {text}
      </button>
    </div>
  );
}
