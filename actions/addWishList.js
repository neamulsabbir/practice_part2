"use server";
import connectMongo from "@/lib/connectDb";
import Wishlist from "@/schema/wishlistModel";
import { Types } from "mongoose";
import { revalidateTag } from "next/cache";

const addToWishList = async (data) => {
  const { user_id, product_id } = data;
  await connectMongo();
  const find = await Wishlist.findOne({
    user_id: new Types.ObjectId(user_id),
    product_id: new Types.ObjectId(product_id),
  });
  revalidateTag("wishlistLength");
  if (find) {
    return { message: "Product already added to wishlist" };
  }
  const newWishList = await Wishlist.create(data);
  return { message: "Wishlist added successfully" };
};

export default addToWishList;
