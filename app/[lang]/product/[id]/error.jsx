"use client";

import Image from "next/image";
import notFoundImg from "@/public/images/notFoundImg.jpg";
const ProductError = () => {
  return (
    <div className="container my-10 grid place-items-center min-h-[70vh]">
      <div>
        <Image src={notFoundImg} alt="not found image " className="w-80" />
        <h2 className="text-2xl font-medium text-gray-800 uppercase mb-6">
          product not found
        </h2>
        <p className="text-gray-600">
          The product you are looking for does not exist.
        </p>
      </div>
    </div>
  );
};

export default ProductError;
