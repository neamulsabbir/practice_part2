import getProducts from "@/utils/query/getProducts";
import ProductCard from "../shared/ProductCard";
import ProductsNotFound from "./ProductsNotFound";
const Products = async ({ searchParams = {} }) => {
  const data = await getProducts(searchParams);

  if (!data?.length) {
    return (
      <div className="col-span-3">
        <ProductsNotFound />
      </div>
    );
  }

  return (
    <div className="col-span-3">
      <div className="grid md:grid-cols-3 grid-cols-2 gap-6">
        {data?.map((product, idx) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
