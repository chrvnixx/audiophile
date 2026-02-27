import React from "react";

export default function CartModal({ openCart, children }) {
  return (
    <div
      className={`fixed inset-0 flex justify-center items-center z-2  ${openCart ? "visible bg-black/30" : "invisible"} `}
    >
      {children}
    </div>
  );
}
