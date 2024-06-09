import connectMongo from "@/lib/connectDb";
import ProductCard from "../shared/ProductCard";
import productModel from "@/schema/productModel";

const NewArrival = async () => {
  await connectMongo();
  const products = await productModel.find({}).sort({ createdAt: -1 }).limit(4);

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
      {products.map((product) => (
        <ProductCard key={product._id} product={product} id={product._id} />
      ))}
    </div>
  );
};

export default NewArrival;
