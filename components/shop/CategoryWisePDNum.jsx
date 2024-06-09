import connectMongo from "@/lib/connectDb";
import productModel from "@/schema/productModel";
const CategoryWisePDNum = async ({ name="" }) => {
  await connectMongo();
  const num = await productModel.find({ category: name }).count();
  return <div className="ml-auto text-gray-600 text-sm">{num ? num : 0}</div>;
};

export default CategoryWisePDNum;
