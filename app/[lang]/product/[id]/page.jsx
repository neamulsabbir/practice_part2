import Description from "@/components/productDetails/Description";
import ProductDetail from "@/components/productDetails/ProductDetail";
import RelatedProduct from "@/components/productDetails/RelatedProduct";
import BreadCrumb from "@/components/shared/BreadCrumb";
import CardSkeleton from "@/components/shared/CardSkeleton";
import { Suspense } from "react";

export async function generateMetadata() {
  return {
    title: "Product Details",
    description: "Product Details",
  };
}

const ProductDetailsPage = ({ params: { id, lang } }) => {
  return (
    <>
      <BreadCrumb name={"Product Details"} />
      <ProductDetail lang={lang} id={id} />
      <Description id={id} />
      <div className="container pb-16">
        <h2 className="text-2xl font-medium text-gray-800 uppercase mb-6">
          Related products
        </h2>
        <Suspense
          fallback={<CardSkeleton num={8} style={"grid grid-cols-4 gap-6"} />}
        >
          <RelatedProduct id={id} />
        </Suspense>
      </div>
    </>
  );
};

export default ProductDetailsPage;
