"use server";

import connectMongo from "@/lib/connectDb";
import Wishlist from "@/schema/wishlistModel";
import { Types } from "mongoose";
import { revalidateTag } from "next/cache";

const removeToWishList = async (data) => {
  const { user_id, product_id } = data;
  await connectMongo();
  const remove = await Wishlist.deleteOne({
    user_id: new Types.ObjectId(user_id),
    product_id: new Types.ObjectId(product_id),
  });
  revalidateTag("wishlist");
  return remove;
};

export default removeToWishList;
