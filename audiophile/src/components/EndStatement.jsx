import model from "../assets/landing-page/model.svg";

export default function EndStatement() {
  return (
    <div className="mt-30 text-black lg:flex lg:justify-center lg:items-center lg:gap-50 lg:mt-40 ">
      <div className="rounded-xl overflow-hidden lg:float-end">
        <img src={model} alt="man wearing headphone" />
      </div>

      <div>
        <h2 className=" font-semibold text-[28px] tracking-widest mt-10 text-center lg:text-[50px] lg:text-start lg:mt-0">
          BRINGING YOU THE <br /> <span className="text-[#d87d4a]">BEST</span>{" "}
          AUDIO GEAR
        </h2>
        <p className="text-[15px]  opacity-50 text-center mt-8 lg:text-start lg:w-111 ">
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </div>
    </div>
  );
}
