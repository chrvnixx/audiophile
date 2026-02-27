import React from "react";
import xx59H from "../assets/xx59 page/xx59.png";
import CheckoutButtons from "../components/CheckoutButtons";
import ProductCard2 from "../components/ProductCard2";
import ProductCard from "../components/ProductCard";
import EndStatement from "../components/EndStatement";
import img1 from "../assets/xx59 page/img1.png";
import img2 from "../assets/xx59 page/img2.png";
import img3 from "../assets/xx59 page/img3.png";
import mark2 from "../assets/xx99 mark 1 page/mark2.png";
import xx59 from "../assets/xx99 mark 2 page/xx59.png";
import zx9 from "../assets/xx99 mark 2 page/zx9.png";

import { ChevronRight } from "lucide-react";
import headphones from "../assets/landing page/headphones.png";
import shadow from "../assets/landing page/shadow.png";
import speaker from "../assets/landing page/speaker.png";
import earphones from "../assets/landing page/earphones.png";
import { useNavigate } from "react-router";
import { useCart } from "../components/CartContext";

export default function Xx59HeadphonesPage() {
  const navigate = useNavigate();

  const { quantity, setQuantity, addToCart } = useCart();

  const product = {
    id: 3,
    name: "X59",
    image: xx59H,
    quantity: quantity,
    price: 899,
  };
  return (
    <div className=" relative flex flex-col items-center py-5">
      <span
        onClick={() => navigate(-1)}
        className="absolute cursor-pointer left-6 opacity-50"
      >
        Go Back
      </span>

      <div className="w-82 flex flex-col mt-16 ">
        <div className="bg-[#f1f1f1] h-88 flex justify-center items-center rounded-xl  ">
          <div>
            <img src={xx59H} alt="xx99 mark 1 headphones image" />
          </div>
        </div>
        <div className="flex flex-col  mt-8">
          <h2 className=" font-semibold text-[28px] tracking-widest mt-6 text-black  ">
            XX59 <br />
            HEADPHONES
          </h2>

          <p className="text-[15px]  opacity-50  mt-8 text-black ">
            As the gold standard for headphones, the <br />
            classic XX99 Mark I offers detailed and <br />
            accurate audio reproduction for audiophiles, <br />
            mixing engineers, and music aficionados alike <br />
            in studios and on the go.
          </p>

          <span className="mt-6 font-bold">$ 899</span>

          <CheckoutButtons
            onClick={() => addToCart(product)}
            quantity={quantity}
            setQuantity={setQuantity}
          />

          <h2 className="font-semibold text-[24px] tracking-widest mt-22 text-black">
            FEATURES
          </h2>

          <p className="text-[15px]  opacity-50  mt-6 text-black">
            These headphones have been created from durable, high-quality
            materials tough enough to take anywhere. Its compact folding design
            fuses comfort and minimalist style making it perfect for travel.
            Flawless transmission is assured by the latest wireless technology
            engineered for audio synchronization with videos. <br />
            <span className="mt-4">
              More than a simple pair of headphones, this headset features a
              pair of built-in microphones for clear, hands-free calling when
              paired with a compatible smartphone. Controlling music and calls
              is also intuitive thanks to easy-access touch buttons on the
              earcups. Regardless of how you use the XX59 headphones, you can do
              so all day thanks to an impressive 30-hour battery life that can
              be rapidly recharged via USB-C.
            </span>
          </p>

          <h2 className="font-semibold text-[24px] tracking-widest mt-22 text-black">
            IN THE BOX
          </h2>

          <div className="flex flex-col text-15px gap-3 mt-4  ">
            <div className="flex items-center gap-5">
              <span className="text-[#d87d4a]">1x</span>
              <span className="opacity-50">Headphone Unit</span>
            </div>
            <div className="flex items-center gap-5">
              <span className="text-[#d87d4a]">2x</span>
              <span className="opacity-50">Replacement Earcups</span>
            </div>
            <div className="flex items-center gap-5">
              <span className="text-[#d87d4a]">1x</span>
              <span className="opacity-50">User Manual</span>
            </div>
            <div className="flex items-center gap-5">
              <span className="text-[#d87d4a]">1x</span>
              <span className="opacity-50">3.5mm 5m Audio Cable</span>
            </div>
            {/* <div className="flex items-center gap-5">
              <span className="text-[#d87d4a]">1x</span>
              <span className="opacity-50"> Travel Bag</span>
            </div> */}
          </div>
        </div>
      </div>

      <div className=" flex flex-col gap-5 mt-22">
        <img className="rounded-xl" src={img1} alt="" />
        <img className="rounded-xl" src={img2} alt="" />
        <img className="rounded-xl" src={img3} alt="" />
      </div>

      <div>
        <h2 className="font-semibold text-[24px] tracking-widest mt-30 text-black text-center">
          YOU MAY ALSO LIKE
        </h2>

        <div className="flex flex-col items-center mt-10 text-white gap-14">
          <ProductCard2
            image={mark2}
            product="XX99 MARK I"
            linkto="/headphones/xx99-mark-one"
          />
          <ProductCard2 image={xx59} product="XX59" linkto="" />
          <ProductCard2
            image={zx9}
            product="ZX9 SPEAKER"
            linkto="/speakers/zx9"
          />
        </div>

        <div className="mt-30 text-black ">
          <div className="flex flex-col items-center gap-4 w-full max-w-82">
            <ProductCard
              image={headphones}
              shadow={shadow}
              ChevronRight={ChevronRight}
              linkto="/headphones"
            />
            <ProductCard
              image={speaker}
              shadow={shadow}
              ChevronRight={ChevronRight}
              linkto="/speakers"
            />
            <ProductCard
              image={earphones}
              shadow={shadow}
              ChevronRight={ChevronRight}
              linkto="/earphones"
            />
          </div>
        </div>

        <EndStatement />
      </div>
    </div>
  );
}
