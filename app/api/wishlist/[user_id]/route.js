import connectMongo from "@/lib/connectDb";
import Wishlist from "@/schema/wishlistModel";
import wait from "@/utils/wait";
import { NextResponse } from "next/server";

export const GET = async (_, { params: { user_id } }) => {
  try {
    await connectMongo();
    const wishlist = await Wishlist.find({ user_id: user_id }).populate(
      "product_id"
    );
    return NextResponse.json(wishlist);
  } catch (error) {
    return NextResponse.json({ error: error.message });
  }
};
