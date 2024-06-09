import connectMongo from "@/lib/connectDb";
import productModel from "@/schema/productModel";
import ProductCard from "../shared/ProductCard";

const ProductContainer = async ({ categoryName }) => {
  await connectMongo();
  const products = await productModel.find({ category: categoryName }).limit(8);
  return (
    <div className="col-span-3">
      <div className="grid md:grid-cols-3 grid-cols-2 gap-6">
        {products.map((product) => (
          <ProductCard key={product._id} product={product} id={product._id} />
        ))}
      </div>
    </div>
  );
};

export default ProductContainer;
