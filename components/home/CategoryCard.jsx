import Image from "next/image";
import Link from "next/link";
const CategoryCard = ({ category }) => {
  const { imgPath, href, category: categoryName } = category;
 
  return (
    <div className="relative rounded-sm overflow-hidden group">
      <Image
        height={320}
        width={500}
        src={imgPath}
        alt={categoryName}
        className="w-full object-cover"
      />
      <Link
        href={href}
        className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-roboto font-medium group-hover:bg-opacity-60 transition"
      >
        {categoryName}
      </Link>
    </div>
  );
};

export default CategoryCard;
