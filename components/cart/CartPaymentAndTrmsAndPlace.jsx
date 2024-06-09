"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

const CartPaymentAndTrmsAndPlace = ({lang}) => {
  const [termsAndCond, setTermsAndCond] = useState(false);
  const router = useRouter();
  const onPlaced = () => {
    router.push("/checkout");
  };
  return (
    <>
      <div className="mb-4">
        <h3 className="text-lg font-semibold mb-2 dark:text-white">
          Payment Method
        </h3>
        <div className="flex flex-col">
          <div className="flex gap-x-1">
            <input type="radio" name="payment" id="cash" />
            <label htmlFor="cash" className="text-gray-600">
              Cash on delivery
            </label>
          </div>
          <div className="flex gap-x-1">
            <input type="radio" name="payment" id="card" />
            <label htmlFor="card" className="text-gray-600">
              Credit card
            </label>
          </div>
        </div>
      </div>
      <div className="flex items-center mb-4 mt-2">
        <input
          type="checkbox"
          name="agreement"
          id="agreement"
          onClick={() => setTermsAndCond((prev) => !prev)}
          className="text-primary focus:ring-0 rounded-sm cursor-pointer w-3 h-3"
        />
        <label
          htmlFor="agreement"
          className="text-gray-600 ml-3 cursor-pointer text-sm"
        >
          I agree to the{" "}
          <Link href="#" className="text-primary">
            terms & conditions
          </Link>
        </label>
      </div>

      <button
        id="submit"
        type="submit"
        disabled={!termsAndCond}
        onClick={onPlaced}
        className={`block w-full py-3 px-4 text-center text-white bg-primary border border-primary rounded-md hover:bg-transparent hover:text-primary transition font-medium ${
          termsAndCond ? "cursor-pointer" : "cursor-not-allowed"
        }`}
      >
      {lang}
      </button>
    </>
  );
};

export default CartPaymentAndTrmsAndPlace;
