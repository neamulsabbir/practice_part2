"use client";
import removeToWishList from "@/actions/removeToWishList";
import { FaTrash } from "react-icons/fa";

const DeleteWishList = ({ user_id, product_id }) => {
  return (
    <div
      onClick={() => removeToWishList({ user_id, product_id })}
      className="text-gray-600 cursor-pointer bg-rose-100 rounded p-2 hover:text-primary"
    >
      <FaTrash />
    </div>
  );
};

export default DeleteWishList;
