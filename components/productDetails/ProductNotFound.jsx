import Image from "next/image";
import notFoundImg from "@/public/images/notFoundImg.jpg";
const ProductNotFound = () => {
  return (
    <div className="bg-white min-h-[80vh] grid place-items-center ">
      <div>
        <Image className="w-80" src={notFoundImg} alt="not found image" />
        <h2 className="text-2xl font-bold text-gray-800">
          Sorry, Product not Found
        </h2>
      </div>
    </div>
  );
};

export default ProductNotFound;
