import React from "react";

export default function ConfirmationModal({ openConfirmationModal, children }) {
  return (
    <div
      className={`fixed inset-0 flex justify-center items-center z-2 ${openConfirmationModal ? "visible bg-black/30" : "invisible"} `}
    >
      {children}
    </div>
  );
}
