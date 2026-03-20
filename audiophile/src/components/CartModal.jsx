export default function CartModal({ openCart, children }) {
  return (
    <div
      className={`fixed inset-0 flex justify-center items-start z-3  ${openCart ? "visible bg-black/30" : "invisible"} `}
    >
      {children}
    </div>
  );
}
