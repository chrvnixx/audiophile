import React from "react";
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
}) {
  return (
    <div className="w-82 flex flex-col mt-16 ">
      <div className="bg-[#f1f1f1] h-88 flex justify-center items-center rounded-xl ">
        <div>
          <img src={image} alt="xx99 mark 2 headphones image" />
        </div>
      </div>
      <div className="flex flex-col items-center mt-8 text-white">
        <h2 className=" font-semibold text-[28px] tracking-widest mt-6 text-black text-center ">
          {device} <br />
          {category}
        </h2>

        <p className="text-[15px]  opacity-50 text-center mt-8 text-black ">
          {line1}
          <br />
          {line2}
          <br />
          {line3} <br />
          {line4} <br />
          {line5}
        </p>
        <BrownButton text="SEE PRODUCT" />
      </div>
    </div>
  );
}
