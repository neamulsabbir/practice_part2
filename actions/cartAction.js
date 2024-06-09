"use server";

import connectMongo from "@/lib/connectDb";
import cartModel from "@/schema/cartModel";
import updateProductInventory from "@/utils/updateProductInventory";
import { Types } from "mongoose";
import { revalidateTag } from "next/cache";

const cartAction = async ({ user, product, incOrDecNum, type }) => {
  const { email, id: user_id } = user;
  const { id: product_id, quantity } = product;

  await connectMongo();
  const updateProductQuantity = await updateProductInventory(
    product_id,
    quantity,
    type,
    incOrDecNum
  );
  // if updateProductQuantity is not available or not updated
  if (updateProductQuantity.status === "error") return null;

  if (quantity <= 0) {
    const cart = await cartModel.updateOne(
      {
        user_id: new Types.ObjectId(user_id),
        "items.product_id": new Types.ObjectId(product_id),
      },
      { $pull: { items: { product_id: new Types.ObjectId(product_id) } } }
    );
    revalidateTag("cartItems");
    revalidateTag("cartLength");
    return null;
  }

  const cart = await cartModel.findOne({
    user_id: new Types.ObjectId(user_id),
  });

  //   if cart is not available
  if (!cart) {
    const newCart = await cartModel.create({
      user_id,
      email,
      items: [{ quantity, product_id }],
    });
    revalidateTag("cartLength");
    return { message: "Product added  successfully" };
  }

  //  if cart is available
  // Check if the product already exists in the cart
  const existingItem = cart.items.find((item) =>
    item.product_id.equals(product_id)
  );
  if (existingItem) {
    if (type === "dec") {
      existingItem.quantity -= incOrDecNum;
    } else {
      // If the product already exists, update its quantity
      existingItem.quantity += incOrDecNum;
    }
  } else {
    // If the product doesn't exist, add it to the cart
    cart.items.push({ product_id, quantity });
  }
  revalidateTag("cartLength");
  // Save the cart
  await cart.save();
  return { message: "Product added successfully" };
};
export default cartAction;
