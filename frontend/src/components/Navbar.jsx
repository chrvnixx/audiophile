import { Menu, ShoppingCart } from "lucide-react";
import audiophileLogo from "../assets/landing page/audiophileLogo.png";
import React from "react";
import { Link } from "react-router";

export default function Navbar({ setOpenCart, setOpenMenu }) {
  return (
    <div className="bg-[#000000] py-8 px-6 text-white border-b border-b-white/20">
      <div className=" flex justify-between">
        <Menu onClick={() => setOpenMenu(true)} className="size-6" />

        <Link to="/">
          <img src={audiophileLogo} alt="" />
        </Link>

        <ShoppingCart onClick={() => setOpenCart(true)} />
      </div>
    </div>
  );
}
