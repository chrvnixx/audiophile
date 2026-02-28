import React from "react";
import { Link } from "react-router";

export default function TransparentButton({ text, linkto }) {
  return (
    <Link to={linkto}>
      <button className="bg-transparent border border-black px-7.5 py-3.75 text-[13px] mt-7 tracking-wider hover:bg-black hover:text-white ">
        {text}
      </button>
    </Link>
  );
}
