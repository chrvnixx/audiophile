import img1 from "../assets/zx9-page/img1.png";
import img2 from "../assets/zx9-page/img2.png";
import img3 from "../assets/zx9-page/img3.png";
import mark2 from "../assets/xx99-mark-1-page/mark2.svg";
import xx59 from "../assets/xx99-mark-2-page/xx59.svg";
import zx9 from "../assets/xx99-mark-2-page/zx9.svg";
import zx9main from "../assets/landing-page/zx9.svg";
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

export default function Zx9SpeakerPage() {
  const navigate = useNavigate();
  const { quantity, setQuantity, addToCart } = useCart();

  const product = {
    id: 4,
    name: "ZX9",
    image: zx9main,
    quantity: quantity,
    price: 4500,
  };

  function handleClick() {
    addToCart(product);
    toast.success(`${product.name} has been added to your cart`);
  }

  return (
    <div className=" relative flex flex-col items-center  py-5 lg:mt-20">
      <span
        onClick={() => navigate(-1)}
        className="absolute cursor-pointer hover:underline left-6 opacity-50 lg:left-92 "
      >
        Go Back
      </span>

      <div className=" flex flex-col mt-16 px-6 ">
        <div className="lg:flex lg:justify-center lg:w-377 lg:gap-65 lg:items-center ">
          <div className="bg-[#f1f1f1] h-88 flex justify-center items-center rounded-xl mb-4 lg:h-140 lg:w-140  ">
            <div>
              <img
                className="w-50 lg:h-100"
                src={zx9main}
                alt="zx9 speaker image"
              />
            </div>
          </div>

          <div>
            <span className=" tracking-[0.6em] font-light  text-[#d87d4a] text-[14px] ">
              NEW PRODUCT
            </span>
            <h2 className=" font-semibold text-[28px] tracking-widest mt-6 text-black lg:text-[40px] ">
              ZX9 <br />
              SPEAKER
            </h2>

            <p className="text-[15px]  opacity-50  mt-8 text-black mb-4 lg:mb-4  ">
              Upgrade your sound system with the all new <br />
              ZX9 active speaker. It’s a bookshelf speaker <br />
              system that offers truly wireless connectivity <br /> creating new
              possibilities for more pleasing <br />
              and practical audio setups.
            </p>

            <span className="mt-6 font-bold ">$ 4,500</span>

            <CheckoutButtons
              onClick={handleClick}
              quantity={quantity}
              setQuantity={setQuantity}
            />
          </div>
        </div>

        <div className="flex flex-col  mt-8 lg:flex-row lg:justify-center lg:gap-65">
          <div>
            <h2 className="font-semibold text-[24px] tracking-widest mt-22 text-black lg:text-[32px]">
              FEATURES
            </h2>

            <p className="text-[15px]  opacity-50  mt-6 text-black lg:w-159 ">
              Connect via Bluetooth or nearly any wired source. This speaker
              features optical, digital coaxial, USB Type-B, stereo RCA, and
              stereo XLR inputs, allowing you to have up to five wired source
              devices connected for easy switching. Improved bluetooth
              technology offers near lossless audio quality at up to 328ft
              (100m). <br />
              <span className="mt-4 lg:mt-10 ">
                Discover clear, more natural sounding highs than the competition
                with ZX9’s signature planar diaphragm tweeter. Equally important
                is its powerful room-shaking bass courtesy of a 6.5” aluminum
                alloy bass unit. You’ll be able to enjoy equal sound quality
                whether in a large room or small den. Furthermore, you will
                experience new sensations from old songs since it can respond to
                even the subtle waveforms.
              </span>
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-[24px] tracking-widest mt-22 text-black lg:text-[32px]">
              IN THE BOX
            </h2>

            <div className="flex flex-col text-15px gap-3 mt-4  ">
              <div className="flex items-center gap-5">
                <span className="text-[#d87d4a]">2x</span>
                <span className="opacity-50">Speaker Unit</span>
              </div>
              <div className="flex items-center gap-5">
                <span className="text-[#d87d4a]">2x</span>
                <span className="opacity-50">Speaker Cloth Panel</span>
              </div>
              <div className="flex items-center gap-5">
                <span className="text-[#d87d4a]">1x</span>
                <span className="opacity-50">User Manual</span>
              </div>
              <div className="flex items-center gap-5">
                <span className="text-[#d87d4a]">1x</span>
                <span className="opacity-50">3.5mm 10m Audio Cable</span>
              </div>
              <div className="flex items-center gap-5">
                <span className="text-[#d87d4a]">1x</span>
                <span className="opacity-50"> 10m Optical Cable</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className=" flex flex-col gap-5 mt-22 lg:flex-row lg:gap-10">
        <div className="flex flex-col gap-5 lg:flex lg:flex-col lg:gap-10">
          <img className="rounded-xl" src={img1} alt="" />
          <img className="rounded-xl" src={img2} alt="" />
        </div>
        <img className="rounded-xl" src={img3} alt="" />
      </div>

      <div>
        <h2 className="font-semibold text-[24px] tracking-widest mt-30 text-black text-center lg:mt-40 lg:text-[32px]">
          YOU MAY ALSO LIKE
        </h2>

        <div className="flex flex-col items-center mt-10 text-white gap-14 lg:flex-row lg:justify-center">
          <ProductCard2
            image={mark2}
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
