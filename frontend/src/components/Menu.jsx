import React from "react";
import speaker from "../assets/landing page/speaker.png";
import earphones from "../assets/landing page/earphones.png";
import headphones from "../assets/landing page/headphones.png";
import { ChevronRight } from "lucide-react";
import { XIcon } from "@phosphor-icons/react";
import { Link } from "react-router";

export default function Menu({ setOpenMenu }) {
  return (
    <div className="mt-30 ">
      <div className="relative bg-white backdrop-blur-xs px-10 pt-10 pb-5 flex flex-col items-center rounded-lg ">
        <div className="absolute top-3">
          <XIcon onClick={() => setOpenMenu(false)} color="#d87d4a" size="20" />
        </div>
        <div className="flex flex-col items-center">
          <Link
            to="/headphones"
            className="font-medium hover:text-[#d87d4a] hover:underline mb-2 "
          >
            HEADPHONE
          </Link>
          <Link
            to="/speakers"
            className="font-medium hover:text-[#d87d4a] hover:underline mb-2 "
          >
            SPEAKER
          </Link>
          <Link
            to="/earphones"
            className="font-medium hover:text-[#d87d4a] hover:underline "
          >
            EARPHONES
          </Link>
        </div>
      </div>
    </div>
  );
}
