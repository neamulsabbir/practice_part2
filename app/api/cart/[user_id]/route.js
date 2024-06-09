import connectMongo from "@/lib/connectDb";
import cartModel from "@/schema/cartModel";
import { Types } from "mongoose";
import { NextResponse } from "next/server";

export const GET = async (req, { params: { user_id } }) => {
  try {
    await connectMongo();
    const query = req.nextUrl.searchParams;

    if (query.get("length")) {
      const cart = await cartModel
        .findOne({
          user_id: new Types.ObjectId(user_id),
        })
        .select("-_id -createdAt -updatedAt -__v");
      return NextResponse.json(cart);
    }

    const cart = await cartModel
      .findOne({
        user_id: new Types.ObjectId(user_id),
      })
      .populate("items.product_id");
    return NextResponse.json(cart);
  } catch (error) {
    return NextResponse.json({ error: error.message });
  }
};
