import React from "react";

export default function TransparentButton({ text }) {
  return (
    <div>
      <button className="bg-transparent border border-black px-7.5 py-3.75 text-[13px] mt-7 tracking-wider ">
        {text}
      </button>
    </div>
  );
}
