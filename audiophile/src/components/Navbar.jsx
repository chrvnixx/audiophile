import { Menu, ShoppingCart } from "lucide-react";
import audiophileLogo from "../assets/landing-page/audiophileLogo.svg";
import { Link } from "react-router";

export default function Navbar({ setOpenCart, setOpenMenu }) {
  return (
    <nav className=" bg-[#000000] py-8 px-6 text-white border-b border-b-white/20">
      <div className=" relative flex justify-between items-center">
        <Menu
          onClick={() => setOpenMenu(true)}
          className="size-6 lg:invisible "
        />

        <Link to="/" className="lg:-ml-220">
          <img className="lg:w-40" src={audiophileLogo} alt="" />
        </Link>

        <div className="invisible lg:visible absolute flex gap-8.5 left-170  text-[15px] tracking-widest cursor-pointer ">
          <Link to="/" className="hover:text-[#D87D4A]">
            HOME
          </Link>
          <Link to="/headphones" className="hover:text-[#D87D4A]">
            HEADPHONES
          </Link>
          <Link to="/speakers" className="hover:text-[#D87D4A]">
            SPEAKERS
          </Link>
          <Link to="/earphones" className="hover:text-[#D87D4A]">
            EARPHONES
          </Link>
        </div>

        <ShoppingCart
          onClick={() => setOpenCart(true)}
          className=" lg:mr-60 lg:size-8 hover:text-[#d87d4a] "
        />
      </div>
    </nav>
  );
}
