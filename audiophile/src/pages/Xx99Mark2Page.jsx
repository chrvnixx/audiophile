import xx99 from "../assets/headphones-page/xx99.svg";
import model from "../assets/landing-page/model.svg";
import model3 from "../assets/xx99-mark-2-page/model3.png";
import prodimage from "../assets/xx99-mark-2-page/prodimage.svg";
import xx59 from "../assets/xx99-mark-2-page/xx59.svg";
import zx9 from "../assets/xx99-mark-2-page/zx9.svg";

import CheckoutButtons from "../components/CheckoutButtons";
import { ChevronRight } from "lucide-react";
import headphones from "../assets/landing-page/headphones.svg";
import shadow from "../assets/landing-page/shadow.png";
import speaker from "../assets/landing-page/speaker.svg";
import earphones from "../assets/landing-page/earphones.svg";
import ProductCard from "../components/ProductCard";
import EndStatement from "../components/EndStatement";

import ProductCard2 from "../components/ProductCard2";
import { useNavigate } from "react-router";
import { useCart } from "../components/CartContext";
import toast from "react-hot-toast";

export default function Xx99Mark2Page() {
  const navigate = useNavigate();

  const { addToCart, quantity, setQuantity } = useCart();

  const product = {
    id: 2,
    name: "XX99 MK II",
    image: xx99,
    quantity: quantity,
    price: 2999,
  };

  function handleClick() {
    addToCart(product);
    toast.success(`${product.name} has been added to your cart`);
  }

  return (
    <div className=" relative flex flex-col items-center py-5">
      <span
        onClick={() => navigate(-1)}
        className="absolute left-6 opacity-50 cursor-pointer hover:underline lg:left-92"
      >
        Go Back
      </span>

      <div className="w-82 flex flex-col mt-16 lg:items-center ">
        <div className="lg:w-378 lg:flex lg:gap-65 lg:justify-center lg:items-center  ">
          <div className="bg-[#f1f1f1] h-88 flex justify-center items-center rounded-xl  mb-4 lg:h-140 lg:w-140   ">
            <div>
              <img
                className="w-50"
                src={xx99}
                alt="xx99 mark 2 headphones image"
              />
            </div>
          </div>

          <div>
            <span className=" tracking-[0.6em] font-light   text-[#d87d4a] text-[14px] ">
              NEW PRODUCT
            </span>

            <h2 className=" font-semibold text-[28px] tracking-widest mt-6 text-black lg:text-[40px] ">
              XX99 MARK II <br />
              HEADPHONES
            </h2>

            <p className="text-[15px]  opacity-50  mt-8 text-black  mb-4 lg:mb-8 ">
              The new XX99 Mark II headphones is the <br />
              pinnacle of pristine audio. It redefines your <br />
              premium headphone experience by <br />
              reproducing the balanced depth and precision <br />
              of studio-quality sound.
            </p>

            <span className="mt-6 font-bold lg:text-[18px]  ">$ 2,999</span>

            <CheckoutButtons
              onClick={handleClick}
              quantity={quantity}
              setQuantity={setQuantity}
            />
          </div>
        </div>

        <div className="flex flex-col  mt-8">
          <div className=" lg:w-377 lg:flex lg:items-start lg:justify-center lg:gap-65 ">
            <div>
              <h2 className="font-semibold text-[24px] tracking-widest mt-22 text-black lg:text-[32px] ">
                FEATURES
              </h2>
              <p className="text-[15px]  opacity-50  mt-6 text-black lg:w-159">
                Featuring a genuine leather head strap and premium earcups,
                these headphones deliver superior comfort for those who like to
                enjoy endless listening. It includes intuitive controls designed
                for any situation. Whether you’re taking a business call or just
                in your own personal space, the auto on/off and pause features
                ensure that you’ll never miss a beat. The advanced Active Noise
                Cancellation with built-in equalizer allow you to experience
                your audio world on your terms. It lets you enjoy your audio in
                peace, but quickly interact with your surroundings when you need
                to. Combined with Bluetooth 5. 0 compliant connectivity and 17
                hour battery life, the XX99 Mark II headphones gives you
                superior sound, cutting-edge technology, and a modern design
                aesthetic
              </p>
            </div>
            <div>
              <h2 className="font-semibold text-[24px] tracking-widest mt-22 text-black lg:text-[32px] ">
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
        </div>
      </div>

      <div className=" flex flex-col gap-5 mt-22 items-center px-6 lg:flex-row">
        <div className="flex flex-col gap-5 lg:flex lg:flex-col  lg:gap-8">
          <div className="border border-green-600 flex w-82 h-50  overflow-hidden rounded-xl lg:w-111 lg:h-70">
            <img className="w-92 h-52 lg:w-122 lg:-mt-10 " src={model} alt="" />
          </div>
          <div className=" overflow-hidden rounded-xl lg:w-111 lg:h-70">
            <img className="lg:h-82  lg:w-150 lg:-mt-10 " src={model3} alt="" />
          </div>
        </div>
        <img className="h-92 rounded-xl" src={prodimage} alt="" />
      </div>

      <div>
        <h2 className="font-semibold text-[24px] tracking-widest mt-30 text-black text-center">
          YOU MAY ALSO LIKE
        </h2>

        <div className="flex flex-col items-center mt-10 text-white gap-14 lg:flex-row lg:justify-center">
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

        <div className="mt-30 text-black flex justify-center lg:mt-40 ">
          <div className="flex flex-col items-center gap-4 w-full max-w-82 lg:flex-row lg:justify-center">
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
