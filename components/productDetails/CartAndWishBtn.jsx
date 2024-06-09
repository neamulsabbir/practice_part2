"use client";
import addToWishList from "@/actions/addWishList";
import cartAction from "@/actions/cartAction";
import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";
import { FaHeart } from "react-icons/fa";

const CartAndWishBtn = ({ user, product }) => {
  const [quantity, setQuantity] = useState(0);
  const router = useRouter();
  const cartHandler = async (e) => {
    e.preventDefault();
    if (!user) return router.push("/login");
    await cartAction({
      user,
      product: { ...product, quantity },
      incOrDecNum: quantity,
      type: "inc",
    });
  };
  const WishlistHandler = async (e) => {
    e.preventDefault();
    if (!user) return router.push("/login");
    addToWishList({ user_id: user.id, product_id: product.id });
  };
  return (
    <>
      <div className="mt-4">
        <h3 className="text-sm text-gray-800 uppercase mb-1">Quantity</h3>
        <div className="flex border border-gray-300 text-gray-600 divide-x divide-gray-300 w-max">
          <button
            disabled={quantity === 1}
            onClick={() => setQuantity((prev) => prev - 1)}
            className="h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none"
          >
            -
          </button>
          <input
            type="number"
            min={1}
            value={quantity}
            max={product?.quantities}
            className="h-8 w-20 outline-none text-base px-2"
            readOnly
          />
          <button
            disabled={quantity >= product?.quantities}
            onClick={() => setQuantity((prev) => prev + 1)}
            className="h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none"
          >
            +
          </button>
        </div>
      </div>

      <div className="mt-6 flex gap-3 border-b border-gray-200 pb-5 pt-5">
        <form onSubmit={cartHandler}>
          <button
            disabled={quantity > product?.quantities || !product?.quantities}
            type="submit"
            className={`bg-primary border border-primary text-white px-8 py-2 font-medium rounded uppercase flex items-center gap-2 hover:bg-transparent hover:text-primary transition ${
              product?.quantities ? "cursor-pointer" : "cursor-not-allowed"
            }`}
          >
            {product?.quantities ? "Add to Cart" : "Out of Stock"}
          </button>
        </form>

        <form onSubmit={WishlistHandler}>
          <button className="border border-gray-300 text-gray-600 px-8 py-2 font-medium rounded uppercase flex items-center gap-2 hover:text-primary transition">
            <FaHeart /> Wishlist
          </button>
        </form>
      </div>
    </>
  );
};

export default CartAndWishBtn;
