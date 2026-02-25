import React from "react";

export default function MenuModal({ openMenu, onClose, children }) {
  return (
    <div
      onClick={onClose}
      className={`fixed inset-0 flex justify-center z-2 ${openMenu ? "visible bg-black/30" : "invisible"} `}
    >
      {children}
    </div>
  );
}
