import wishBag from "@/public/images/wish-bag.jpg";
import Image from "next/image";
import Link from "next/link";
const EmptyWishList = () => {
  return (
    <div class="flex flex-col items-center justify-center min-h-[50vh]  p-4">
      <Image
        src={wishBag}
        alt="wishlist illustration"
        class="w-full max-w-md mb-6"
      />
      <h1 class="text-2xl font-bold text-red-500 mb-2">
        Your Wishlist is empty!
      </h1>
      <p class="text-zinc-700 dark:text-zinc-300 mb-4">
        seems like you don’t have wishes here. Make a wish!
      </p>
      <Link href={"/shop"} class="bg-primary text-white px-4 py-2 rounded-lg">
        Start Shopping
      </Link>
    </div>
  );
};

export default EmptyWishList;
