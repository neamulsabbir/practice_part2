"use server";
import connectMongo from "@/lib/connectDb";
import productModel from "@/schema/productModel";
const checkQuantity = async (product_id, quantity) => {
  await connectMongo();
  const product = await productModel.findById(product_id);
  if (product?.quantities < quantity) {
    return false;
  }
  return true;
};

export default checkQuantity;
