import ProductCard from "../shared/ProductCard";

const ListOfProducts = ({ products }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
      {products.map((product) => (
        <ProductCard key={product._id} product={product} id={product._id} />
      ))}
    </div>
  );
};

export default ListOfProducts;
