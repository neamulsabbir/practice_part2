import connectMongo from "@/lib/connectDb";
import productModel from "@/schema/productModel";
import Image from "next/image";
import { Types } from "mongoose";
import { notFound } from "next/navigation";
import { FaStar } from "react-icons/fa";
import { auth } from "@/auth";
import ShareButtons from "./ShareButtons";
import CartAndWishBtn from "./CartAndWishBtn";
import { getDictionary } from "@/app/[lang]/_dictionaries/getDictionary";
const ProductDetail = async ({ id, lang }) => {
  const session = await auth();
  await connectMongo();
  const product = await productModel.findOne({ _id: new Types.ObjectId(id) });
  const {
    sku,
    image,
    name,
    price,
    discount_price,
    description,
    category,
    brand,
    reviewsNumber,
    rating,
    quantities,
  } = product;
  if (!product) {
    notFound();
  }
  const { productDetails } = await getDictionary(lang);
  const a = Array(Math.round(rating)).fill(0);
  return (
    <div className="container grid grid-cols-2 gap-6">
      <div>
        <Image
          width={740}
          height={550}
          src={`${image[0]} `}
          alt={product?.name}
          className="w-full"
          quality={100}
        />
        <div className="grid grid-cols-5 gap-4 mt-4">
          {image.map((img, i) => (
            <Image
              key={i}
              width={133}
              height={100}
              src={img}
              alt={name}
              className={`w-full cursor-pointer border ${
                i === 0 && "border-primary"
              }`}
            />
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-3xl font-medium uppercase mb-2">{name}</h2>
        <div className="flex items-center mb-4">
          <div className="flex gap-1 text-sm text-yellow-400">
            {a.map((_, i) => (
              <span key={i}>
                <FaStar />
              </span>
            ))}
          </div>
          <div className="text-xs text-gray-500 ml-3">
            ({reviewsNumber} Reviews)
          </div>
        </div>
        <div className="space-y-2">
          <p className="text-gray-800 font-semibold space-x-2">
            <span>Availability: </span>
            {quantities ? (
              <span className="text-green-600">In Stock {(quantities)}</span>
            ) : (
              <span className="text-red-600">Out of Stock</span>
            )}
          </p>
          <p className="space-x-2">
            <span className="text-gray-800 font-semibold">
              {productDetails.brand}:
            </span>
            <span className="text-gray-600">{brand}</span>
          </p>
          <p className="space-x-2">
            <span className="text-gray-800 font-semibold">
              {productDetails.category}:
            </span>
            <span className="text-gray-600 capitalize">{category}</span>
          </p>
          <p className="space-x-2">
            <span className="text-gray-800 font-semibold">
              {productDetails.sku}:
            </span>
            <span className="text-gray-600 uppercase">{sku}</span>
          </p>
        </div>
        <div className="flex items-baseline mb-1 space-x-2 font-roboto mt-4">
          <p className="text-xl text-primary font-semibold">
            ${discount_price}
          </p>
          <p className="text-base text-gray-400 line-through">${price}</p>
        </div>
        <p className="mt-4 text-gray-600">{description}</p>

        <CartAndWishBtn product={{ id, quantities }} user={session?.user} />

        <ShareButtons name={name} />
      </div>
    </div>
  );
};

export default ProductDetail;
