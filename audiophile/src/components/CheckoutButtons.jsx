import BrownButton from "./BrownButton";

export default function CheckoutButtons({ onClick, quantity, setQuantity }) {
  function handleIncrease() {
    setQuantity(quantity + 1);
  }

  function handleDecrease() {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  }

  return (
    <div className="flex justify-between items-center pr-11 ">
      <div className=" bg-[#f1f1f1] flex justify-between items-center w-30 h-12 mt-7  ">
        <button
          onClick={handleDecrease}
          className=" px-4 py-2.5  text-gray-500/50  active:text-[#d87d4a] cursor-pointer  "
        >
          -
        </button>
        <span className=" bg-[#f1f1f1] p-2.5 text-[13px] ">{quantity}</span>

        <button
          onClick={handleIncrease}
          className="  px-4 py-2.5 text-gray-500/50  active:text-[#d87d4a] cursor-pointer   "
        >
          +
        </button>
      </div>
      <div className="text-white">
        <BrownButton onClick={onClick} text="ADD TO CART" />
      </div>
    </div>
  );
}
