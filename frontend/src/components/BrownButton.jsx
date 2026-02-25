import React from "react";

export default function BrownButton({ text, styles, ...props }) {
  return (
    <div>
      <button
        {...props}
        className={`bg-[#d87d4a] px-7.5 py-3.75 text-[13px] mt-7 tracking-wider ${styles} `}
      >
        {text}
      </button>
    </div>
  );
}
