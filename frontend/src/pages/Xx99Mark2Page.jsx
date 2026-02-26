import xx99 from "../assets/headphones page/xx99.png";
import model2 from "../assets/xx99 mark 2 page/model2.png";
import model3 from "../assets/xx99 mark 2 page/model3.png";
import prodimage from "../assets/xx99 mark 2 page/prodimage.png";
import xx59 from "../assets/xx99 mark 2 page/xx59.png";
import zx9 from "../assets/xx99 mark 2 page/zx9.png";

import CheckoutButtons from "../components/CheckoutButtons";
import { ChevronRight } from "lucide-react";
import headphones from "../assets/landing page/headphones.png";
import shadow from "../assets/landing page/shadow.png";
import speaker from "../assets/landing page/speaker.png";
import earphones from "../assets/landing page/earphones.png";
import ProductCard from "../components/ProductCard";
import EndStatement from "../components/EndStatement";

import ProductCard2 from "../components/ProductCard2";
import { useNavigate } from "react-router";
import { useCart } from "../components/CartContext";

export default function Xx99Mark2Page() {
  const navigate = useNavigate();

  const { addToCart, quantity, setQuantity } = useCart();

  const product = {
    id: 2,
    name: "XX99 MK II",
    image: xx99,
    quantity: quantity,
    price: "$2,999",
  };

  return (
    <div className=" relative flex flex-col items-center py-5">
      <span
        onClick={() => navigate(-1)}
        className="absolute left-6 opacity-50 cursor-pointer hover:underline"
      >
        Go Back
      </span>

      <div className="w-82 flex flex-col mt-16 ">
        <div className="bg-[#f1f1f1] h-88 flex justify-center items-center rounded-xl  ">
          <div>
            <img src={xx99} alt="xx99 mark 2 headphones image" />
          </div>
        </div>
        <div className="flex flex-col  mt-8">
          <span className=" tracking-[0.6em] font-light  text-[#d87d4a] text-[14px] ">
            NEW PRODUCT
          </span>

          <h2 className=" font-semibold text-[28px] tracking-widest mt-6 text-black ">
            XX99 MARK II <br />
            HEADPHONES
          </h2>

          <p className="text-[15px]  opacity-50  mt-8 text-black ">
            The new XX99 Mark II headphones is the <br />
            pinnacle of pristine audio. It redefines your <br />
            premium headphone experience by <br />
            reproducing the balanced depth and precision <br />
            of studio-quality sound.
          </p>

          <span className="mt-6 font-bold">$ 2,999</span>

          <CheckoutButtons
            onClick={() => addToCart(product)}
            quantity={quantity}
            setQuantity={setQuantity}
          />

          <h2 className="font-semibold text-[24px] tracking-widest mt-22 text-black">
            FEATURES
          </h2>

          <p className="text-[15px]  opacity-50  mt-6 text-black">
            Featuring a genuine leather head strap and <br />
            premium earcups, these headphones <br />
            deliver superior comfort for those who like to enjoy <br />
            endless listening. It includes intuitive controls <br />
            designed for any situation. Whether you’re <br />
            taking a business call or just in your own <br />
            personal space, the auto on/off and <br />
            pause features ensure that you’ll never miss a beat. <br />
            The advanced Active Noise Cancellation with <br />
            built-in equalizer allow you to experience your <br />
            audio world on your terms. It lets you enjoy <br />
            your audio in peace, but quickly interact with <br />
            your surroundings when you need to. <br />
            Combined with Bluetooth 5. 0 compliant <br /> connectivity and 17
            hour battery life, the XX99 <br />
            Mark II headphones gives you superior sound, <br />
            cutting-edge technology, and a modern <br />
            design aesthetic.
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
            <div className="flex items-center gap-5">
              <span className="text-[#d87d4a]">1x</span>
              <span className="opacity-50"> Travel Bag</span>
            </div>
          </div>
        </div>
      </div>

      <div className=" flex flex-col gap-5 mt-22">
        <img className="rounded-xl" src={model2} alt="" />
        <img className="rounded-xl" src={model3} alt="" />
        <img className="rounded-xl" src={prodimage} alt="" />
      </div>

      <div>
        <h2 className="font-semibold text-[24px] tracking-widest mt-30 text-black text-center">
          YOU MAY ALSO LIKE
        </h2>

        <div className="flex flex-col items-center mt-10 text-white gap-14">
          <ProductCard2
            image={headphones}
            product="XX99 MARK I"
            linkto="/headphones/xx99-mark-one"
          />
          <ProductCard2 image={xx59} product="XX59" linkto="/headphones/xx59" />
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
