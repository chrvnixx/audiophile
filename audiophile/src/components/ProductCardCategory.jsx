import BrownButton from "./BrownButton";

export default function ProductCardCategory({
  image,
  device,
  category,
  line1,
  line2,
  line3,
  line4,
  line5,
  linkto,
}) {
  return (
    <div className="w-82 flex flex-col mt-16 lg:w-378 lg:flex-row lg:justify-center lg:items-center lg:gap-65 lg:mt-40 ">
      <div className="bg-[#f1f1f1] h-88 flex justify-center items-center rounded-xl lg:h-140 lg:w-140  ">
        <div>
          <img
            className="w-50"
            src={image}
            alt="xx99 mark 2 headphones image"
          />
        </div>
      </div>
      <div className="flex flex-col items-center mt-8 text-white lg:items-start lg:mt-0 ">
        <h2 className=" font-semibold text-[28px] tracking-widest mt-6 text-black text-center lg:text-[40px] lg:text-start ">
          {device} <br />
          {category}
        </h2>

        <p className="text-[15px]  opacity-50 text-center mt-8 text-black lg:text-start lg:mb-3 ">
          {line1}
          <br />
          {line2}
          <br />
          {line3} <br />
          {line4} <br />
          {line5}
        </p>
        <BrownButton text="SEE PRODUCT" linkto={linkto} />
      </div>
    </div>
  );
}
