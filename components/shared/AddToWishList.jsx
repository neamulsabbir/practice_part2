"use client";
import addToWishList from "@/actions/addWishList";
import { redirect } from "next/navigation";
import { FaRegHeart } from "react-icons/fa";

const AddToWishList = ({ session, product_id }) => {
  const wishSubmit = async (e) => {
    e.preventDefault();
    if (!session?.user) return redirect("/login");
    await addToWishList({ user_id: session?.user?.id, product_id });
  };
  return (
    <form onSubmit={wishSubmit}>
      <button
        disabled={!session?.user}
        type="submit"
        className={`text-white text-lg w-9 h-9 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition ${
          !session?.user ? "cursor-not-allowed" : "cursor-pointer"
        } `}
        title="add to wishlist"
      >
        <FaRegHeart />
      </button>
    </form>
  );
};

export default AddToWishList;
