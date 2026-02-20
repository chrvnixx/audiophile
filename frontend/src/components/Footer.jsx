import { Facebook, Instagram, Twitter } from "lucide-react";
import logo from "../assets/audiophileLogo.png";
import React from "react";

export default function Footer() {
  return (
    <div className="mt-30 bg-[#000000] text-white flex flex-col items-center">
      <hr className="border-b-3 border-[#d87d4a] w-25 " />

      <div className="mt-13">
        <img src={logo} alt="logo" />
      </div>

      <div className="mt-12 flex flex-col items-center gap-4 text-[13px] font-semibold tracking-widest ">
        <span>HOME</span>
        <span>HEADPHONES</span>
        <span>SPEAKERS</span>
        <span>EARPHONES</span>
      </div>

      <p className="mt-12 text-[15px] opacity-50 text-center font-light leading-6 ">
        Audiophile is an all in one stop to fulfill <br /> your audio needs.
        We're a small team of music <br /> lovers and sound specialists who are
        devoted <br />
        to helping you get the most out of personal <br />
        audio. Come and visit our demo facility - we’re <br />
        open 7 days a week.
      </p>

      <span className="mt-12 text-[15px] opacity-50 text-center font-light leading-6 ">
        Copyright 2021. All Rights Reserved
      </span>

      <div className="mt-12 mb-15 flex justify-between gap-4 ">
        <Facebook />
        <Twitter />
        <Instagram />
      </div>
    </div>
  );
}
