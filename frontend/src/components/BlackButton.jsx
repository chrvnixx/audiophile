import React from "react";
import { Link } from "react-router";

export default function BlackButton({ text, linkto }) {
  return (
    <Link to={linkto}>
      <button className="bg-[#000000] px-7.5 py-3.75 text-[13px] mt-7 tracking-wider ">
        {text}
      </button>
    </Link>
  );
}
