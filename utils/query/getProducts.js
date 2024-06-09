import connectMongo from "@/lib/connectDb";
import productModel from "@/schema/productModel";
async function getProducts(searchParams) {
  await connectMongo();
  let data = [];
  let query = {};

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

  return data;
}

export default getProducts;
