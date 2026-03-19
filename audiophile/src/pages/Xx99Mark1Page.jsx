import xx99 from "../assets/xx99-mark-1-page/xx99.png";
import mark1 from "../assets/headphones-page/mark1.svg";
import img1 from "../assets/xx99-mark-1-page/img1.png";
import img2 from "../assets/xx99-mark-1-page/img2.png";
import img3 from "../assets/xx99-mark-1-page/img3.png";
import mark2 from "../assets/xx99-mark-1-page/mark2.svg";
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

export default function Xx99Mark1Page() {
  const navigate = useNavigate();

  const { quantity, setQuantity, addToCart } = useCart();

  const product = {
    id: 1,
    name: "XX99 MK I",
    image: xx99,
    quantity: quantity,
    price: 1750,
  };

  function handleClick() {
    addToCart(product);
    toast.success(`${product.name} has been added to ypur cart`);
  }

  return (
    <div className=" relative flex flex-col items-center py-5 lg:mt-20">
      <span
        onClick={() => navigate(-1)}
        className="absolute cursor-pointer left-6 opacity-50 lg:left-92"
      >
        Go Back
      </span>

      <div className="w-82 flex flex-col mt-16 lg:w-377 ">
        <div className="flex lg:flex-row lg:justify-center lg:gap-65 lg:items-center">
          <div className="bg-[#f1f1f1] h-88 flex justify-center items-center rounded-xl lg:h-140 lg:w-140   ">
            <div>
              <img src={mark1} alt="xx99 mark 1 headphones image" />
            </div>
          </div>
          <div>
            <h2 className=" font-semibold text-[28px] tracking-widest mt-6 text-black lg:text-[40px] ">
              XX99 MARK I <br />
              HEADPHONES
            </h2>

            <p className="text-[15px]  opacity-50  mt-8 text-black lg:mb-4 lg:mt-0 ">
              As the gold standard for headphones, the <br />
              classic XX99 Mark I offers detailed and <br />
              accurate audio reproduction for audiophiles, <br />
              mixing engineers, and music aficionados alike <br />
              in studios and on the go.
            </p>

            <span className="mt-6 font-bold">$ 1,750</span>

            <CheckoutButtons
              onClick={handleClick}
              quantity={quantity}
              setQuantity={setQuantity}
            />
          </div>
        </div>
        <div className="flex flex-col  mt-8 lg:flex-row lg:justify-center lg:items-center lg:gap-65">
          <div className="">
            <h2 className="font-semibold text-[24px] tracking-widest mt-22 text-black">
              FEATURES
            </h2>

            <p className="text-[15px]  opacity-50  mt-6 text-black lg:w-159">
              As the headphones all others are measured against, the XX99 Mark I
              demonstrates over five decades of audio expertise, redefining the
              critical listening experience. This pair of closed-back headphones
              are made of industrial, aerospace-grade materials to emphasize
              durability at a relatively light weight of 11 oz.
              <span className="mt-4">
                From the handcrafted microfiber ear cushions to the robust metal
                headband with inner damping element, the components work
                together to deliver comfort and uncompromising sound. Its
                closed-back design delivers up to 27 dB of passive noise
                bcancellation, reducing resonance by reflecting sound to a
                dedicated absorber. For connectivity, a specially tuned cable is
                included with a balanced gold connector.
              </span>
            </p>
          </div>

          <div className="">
            <h2 className="font-semibold text-[24px] tracking-widest mt-22 text-black lg:mt-8">
              IN THE BOX
            </h2>

            <div className="flex flex-col text-15px gap-3 mt-4 lg:mt-6 ">
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
      </div>

      <div className=" flex flex-col gap-5 mt-22 lg:flex-row lg:gap-10 ">
        <div className="lg:flex lg:flex-col lg:gap-10">
          <img className="rounded-xl" src={img1} alt="" />
          <img className="rounded-xl" src={img2} alt="" />
        </div>
        <img className="rounded-xl" src={img3} alt="" />
      </div>

      <div>
        <h2 className="font-semibold text-[24px] tracking-widest mt-30 text-black text-center lg:flex-row lg:justify-center ">
          YOU MAY ALSO LIKE
        </h2>

        <div className="flex flex-col items-center mt-10 text-white gap-14 lg:flex-row lg:justify-center">
          <ProductCard2
            image={mark2}
            product="XX99 MARK II"
            linkto="/headphones/xx99-mark-two"
          />
          <ProductCard2 image={xx59} product="XX59" linkto="/headphones/xx59" />
          <ProductCard2
            image={zx9}
            product="ZX9 SPEAKER"
            linkto="/speakers/zx9"
          />
        </div>

        <div className="mt-30 text-black lg:mt-40 lg:flex lg:justify-center ">
          <div className="flex flex-col items-center gap-4 w-full max-w-82 lg:flex-row lg:justify-center ">
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
