import connectMongo from "@/lib/connectDb";
import productModel from "@/schema/productModel";
import { Types } from "mongoose";
const Description = async ({ id }) => {
  await connectMongo();
  const product = await productModel.findOne({ _id: new Types.ObjectId(id) });

  if (!product) {
    notFound();
  }

  let content = [];

  for (const key in product.details) {
    content.push(
      <div className="flex my-2 text-sm md:text-[15px] ">
        <p className="w-1/5 bg-[#f7f7f7] pl-4 text-gray-700 p-1 capitalize font-semibold">{key}</p>
        <p className="w-full bg-[#f0f0f0] pl-4 text-gray-700 p-1">
          {product.details[key]}
        </p>
      </div>
    );
  }
  return (
    <div className="container pb-16 mt-6">
      <h3 className="text-xl font-bold border-b border-gray-200 font-roboto text-gray-800 pb-3 ">
        Product details
      </h3>
      <div className="w-3/5 pt-6">
        <div className="text-gray-600">{content.map((item) => item)}</div>
      </div>
    </div>
  );
};

export default Description;
