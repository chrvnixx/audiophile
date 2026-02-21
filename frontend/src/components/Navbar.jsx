import { Menu, ShoppingCart } from "lucide-react";
import audiophileLogo from "../assets/landing page/audiophileLogo.png";
import React from "react";

export default function Navbar() {
  return (
    <div className="bg-[#000000] py-8 px-6 text-white border-b border-b-white/20">
      <div className=" flex justify-between">
        <Menu className="size-6" />
        <img src={audiophileLogo} alt="" />
        <ShoppingCart />
      </div>
    </div>
  );
}
