"use client";
import cartAction from "@/actions/cartAction";
import { useSession } from "next-auth/react";
import { useState, useTransition } from "react";

const QuantityAdjust = ({ product }) => {
  const { quantity: q, _id, quantities } = product;
  const [quantity, setQuantity] = useState(q || 0);
  const { data } = useSession();
  return (
    <>
      <div className="flex items-center py-2 px-4  h-fit rounded ">
        <button
          className="px-2 font-bold"
          disabled={quantity === 0}
          onClick={() => {
            setQuantity((prev) => prev - 1);
            cartAction({
              user: data?.user,
              product: { quantity: quantity - 1, id: _id },
              incOrDecNum: 1,
              type: "dec",
            });
          }}
        >
          -
        </button>
        <input
          className="w-10 lg:w-32 text-center outline-none bg-gray-100"
          type="number"
          readOnly
          value={quantity || 0}
          max={quantities}
        />
        <button
          className="px-2 font-bold"
          disabled={quantity === product.quantities}
          onClick={() => {
            setQuantity((prev) => prev + 1);
            cartAction({
              user: data?.user,
              product: { quantity: quantity + 1, id: _id },
              incOrDecNum: 1,
              type: "inc",
            });
          }}
        >
          +
        </button>
      </div>

      <button
        onClick={() =>
          cartAction({
            user: data?.user,
            product: { quantity: 0, id: _id },
            incOrDecNum: quantity,
            type: "dec",
          })
        }
        className="bg-[#FDF2F3] rounded text-red-500 py-2 px-4 lg:ml-10 w-fit mx-auto"
      >
        ✖
      </button>
    </>
  );
};

export default QuantityAdjust;
