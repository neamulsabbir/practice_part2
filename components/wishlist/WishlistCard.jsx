import Image from "next/image";
import { auth } from "@/auth";
import DeleteWishList from "./DeleteToWishList";
import CartBTN from "../shared/CartBTN";
const WishlistCard = async ({ data: { product_id } }) => {
  const { name, image, discount_price, quantities, _id } = product_id || {};
  const session = await auth();
  const stringID = _id.toString();
  const blurDataURL = await getBase64(image[0]);
  return (
    <div className="grid grid-cols-4 p-4 border-gray-200 rounded border">
      <div className="col-span-3 flex gap-4 items-center">
        <div className="w-28">
          <Image
            width={115}
            height={85}
            src={image[0]}
            alt={name}
            blurDataURL={blurDataURL}
            className="w-full"
          />
        </div>
        <div className="w-1/3">
          <h2 className="text-gray-800 text-xl font-medium uppercase">
            {name}
          </h2>
          <p className="text-gray-500 text-sm">
            Availability:
            {quantities ? (
              <span className="text-green-600">In Stock</span>
            ) : (
              <span className="text-red-600">Out of Stock</span>
            )}
          </p>
        </div>

        <div className="text-primary text-lg font-semibold ">
          ${discount_price}
        </div>
      </div>
      <div className="flex items-center gap-8">
        <CartBTN
          session={session}
          deleteWishItem={true}
          product={{ id: stringID, quantities }}
          style={"px-4 rounded "}
        />
        <DeleteWishList user_id={session?.user?.id} product_id={stringID} />
      </div>
    </div>
  );
};

export default WishlistCard;
