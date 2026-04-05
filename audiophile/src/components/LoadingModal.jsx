import React from "react";

export default function LoadingModal({ isLoading, children }) {
  return (
    <div
      className={`fixed inset-0 flex justify-center items-center z-2 transition-all ease-in-out ${isLoading ? "visible opacity-100 bg-black/50" : "invisible opacity-0"}`}
    >
      {children}
    </div>
  );
}
