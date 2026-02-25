import React from "react";
import { Link } from "react-router";

export default function ProductCard({
  image,
  shadow,
  ChevronRight,
  category,
  linkto,
}) {
  return (
    <div>
      <div className="relative  flex flex-col items-center   pt-13 cursor-pointer ">
        <div className="bg-[#f1f1f1] w-81.75 h-41.25 rounded-xl  "></div>
        <div className="absolute   top-0">
          <div className="relative flex flex-col items-center ">
            <img className="absolute" src={image} alt="" />
            <img className="mt-12" src={shadow} alt="" />

            <div className="absolute top-33 flex flex-col justify-center items-center">
              <span className="font-semibold">{category}</span>
              <div className="flex items-center gap-1.5 mt-4.25 ">
                <Link
                  to={linkto}
                  className="text-[13px] opacity-50 font-semibold tracking-wider hover:text-[#d87d4a] hover:opacity-100 "
                >
                  SHOP
                </Link>
                <ChevronRight
                  color="#d87d4a"
                  strokeWidth="4"
                  className="size-4"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
