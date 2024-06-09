import { getDictionary } from "@/app/[lang]/_dictionaries/getDictionary";
import Link from "next/link";

const Banner = async ({ lang }) => {
  const {
    home: {
      hero: { title, subTitle, button },
    },
  } = await getDictionary(lang);
  return (
    <div
      className="bg-cover bg-no-repeat bg-center py-36"
      style={{ backgroundImage: " url('/images/banner-bg.jpg')" }}
    >
      <div className="container">
        <h1 className="text-6xl text-gray-800 font-medium mb-4 capitalize w-1/2 text-balance">
          {title}
        </h1>
        <p className="w-1/2">
         {subTitle}
        </p>
        <div className="mt-12">
          <Link
            href="/shop"
            className="bg-primary border border-primary text-white px-8 py-3 font-medium rounded-md hover:bg-transparent hover:text-primary"
          >
            {button}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
