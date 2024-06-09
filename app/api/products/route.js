import connectMongo from "@/lib/connectDb";
import productModel from "@/schema/productModel";
import { NextResponse } from "next/server";
export async function GET(req) {
  await connectMongo();
  let data = [];
  let query = {};
  const searchParams = req?.nextUrl?.searchParams;
  
  if (searchParams?.q) {
    query.name = { $regex: searchParams.q, $options: "i" };
  }
  if (searchParams?.category) {
    query.category = { $in: searchParams.category.split(",") };
  }
  if (searchParams?.minPrice || searchParams?.maxPrice) {
    query.price = {};
    if (searchParams?.minPrice) {
      query.price.$gte = searchParams.minPrice;
    }
    if (searchParams?.maxPrice) {
      query.price.$lte = searchParams.maxPrice;
    }
  }
  if (searchParams?.sizes) {
    query.size = { $in: searchParams.sizes.split(",") };
  }
  if (searchParams?.colors) {
    query.color = { $in: searchParams.colors.split(",") };
  }

  data = await productModel.find(query);

  return NextResponse.json(data);
}
