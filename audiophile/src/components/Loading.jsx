import React from "react";
import { BarLoader } from "react-spinners";

export default function Loading() {
  return (
    <div className="w-100 h-60 bg-white flex flex-col justify-center items-center gap-8 rounded-xl">
      <BarLoader color="#d87d4a" />
      <p className="text-xl">Confirming your order</p>
    </div>
  );
}
