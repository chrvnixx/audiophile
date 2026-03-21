import { Facebook, Instagram, Twitter } from "lucide-react";
import logo from "../assets/landing-page/audiophileLogo.svg";
import { useNavigate } from "react-router";

export default function Footer() {
  const navigate = useNavigate();
  return (
    <div className=" bg-[#000000] text-white flex flex-col items-center lg:pb-12 ">
      <hr className="border-b-3 border-[#d87d4a] w-25 lg:mr-285 " />

      <div className="flex flex-col lg:flex-row justify-center lg:gap-75 ">
        <div className="flex justify-center lg:flex lg:flex-col  ">
          <div
            onClick={() => navigate("/")}
            className="flex justify-center mt-13 lg:mt-19 lg:justify-start"
          >
            <img src={logo} alt="logo" />
          </div>

          <p className="hidden lg:flex w-134 mt-12 text-[15px]  opacity-50 text-start font-light leading-6  ">
            Audiophile is an all in one stop to fulfill your audio needs. We're
            a small team of music lovers and sound specialists who are devoted
            to helping you get the most out of personal audio. Come and visit
            our demo facility - we’re open 7 days a week.
          </p>

          <span className="hidden lg:flex mt-12 text-[15px] opacity-50 font-light leading-6 text-start ">
            Copyright 2021. All Rights Reserved
          </span>
        </div>

        <div className="lg:flex lg:flex-col  lg:items-end lg:gap-26 ">
          <div className="mt-12 flex flex-col items-center gap-4 text-[13px] font-semibold tracking-widest lg:flex-row lg:gap-6 lg:mt-19 ">
            <span
              onClick={() => navigate("/")}
              className="hover:text-[#d87d4a] cursor-pointer"
            >
              HOME
            </span>
            <span
              onClick={() => navigate("/headphones")}
              className="hover:text-[#d87d4a] cursor-pointer"
            >
              HEADPHONES
            </span>
            <span
              onClick={() => navigate("/speakers")}
              className="hover:text-[#d87d4a] cursor-pointer"
            >
              SPEAKERS
            </span>
            <span
              onClick={() => navigate("/earphones")}
              className="hover:text-[#d87d4a] cursor-pointer"
            >
              EARPHONES
            </span>
          </div>

          <div className=" hidden  mt-12 mb-15  justify-between gap-4 w-30 lg:flex ">
            <Facebook className="hover:text-[#d87d4a] cursor-pointer  " />
            <Twitter className="hover:text-[#d87d4a] cursor-pointer  " />
            <Instagram className="hover:text-[#d87d4a] cursor-pointer  " />
          </div>
        </div>

        <p className="lg:hidden mt-12 text-[15px] opacity-50 text-center font-light leading-6 ">
          Audiophile is an all in one stop to fulfill <br /> your audio needs.
          We're a small team of music <br /> lovers and sound specialists who
          are devoted <br />
          to helping you get the most out of personal <br />
          audio. Come and visit our demo facility - we’re <br />
          open 7 days a week.
        </p>

        <span className="mt-12 text-[15px] opacity-50 text-center font-light leading-6 lg:hidden  ">
          Copyright 2021. All Rights Reserved
        </span>

        <div className="mt-12 mb-15 flex justify-between gap-4 w-30 mx-auto lg:hidden ">
          <Facebook />
          <Twitter />
          <Instagram />
        </div>
      </div>
    </div>
  );
}
