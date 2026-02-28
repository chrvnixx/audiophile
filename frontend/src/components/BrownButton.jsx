import React from "react";
import { Link } from "react-router";

export default function BrownButton({ text, styles, linkto, ...props }) {
  return (
    <Link to={linkto}>
      <button
        {...props}
        className={`bg-[#d87d4a] px-7.5 py-3.75 text-[13px] mt-7 tracking-wider hover:bg-[#fbaf85] ${styles} `}
      >
        {text}
      </button>
    </Link>
  );
}
