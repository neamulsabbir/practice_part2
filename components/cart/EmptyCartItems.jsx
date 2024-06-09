import emptyCart from "@/public/images/empty-cart.jpg";
import Image from "next/image";
import Link from "next/link";
const EmptyCart = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[50vh] bg-zinc-100  p-4">
      <Image src={emptyCart} alt="Empty Cart" className="mb-4 w-96" />
      <h1 className="text-2xl font-bold text-zinc-800  mb-2">
        Your Cart is <span className="text-red-500">Empty!</span>
      </h1>
      <p className="text-zinc-600  mb-6">
        Must add items on the cart before you proceed to check out.
      </p>
      <Link href={"/shop"} className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full shadow-lg transition duration-300">
        <svg
          className="inline-block w-5 h-5 mr-2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2 9m2-9h10m0 0l2 9m-2-9H7"
          ></path>
        </svg>
        RETURN TO SHOP
      </Link>
    </div>
  );
};

export default EmptyCart;
