import Image from "next/image";
import logo from "@/public/images/logo.svg";
import Link from "next/link";
import { FaRegHeart, FaRegUser } from "react-icons/fa";
import { BsBag } from "react-icons/bs";
import { auth } from "@/auth";
import SearchInput from "./SearchInput";
import { getDictionary } from "@/app/[lang]/_dictionaries/getDictionary";

const Header = async ({lang}) => {
  const {headers} =await getDictionary(lang);
  const session = await auth();
  const res = await fetch(
    `https://lwskart-bice.vercel.app/api/cart/${session?.user?.id}?length=true`,
    {
      next: {
        tags: ["cartLength"],
      },
    }
  );
  const lengthCart = await res.json();
  const wishlistRes = await fetch(
    `https://lwskart-bice.vercel.app/api/wishlist/${session?.user?.id}`,
    {
      next: {
        tags: ["wishlistLength"],
      },
    }
  );
  const lengthWishlist = await wishlistRes.json();

  return (
    <header className="py-4 shadow-sm bg-white">
      <div className="container flex items-center justify-between">
        <Link href="/">
          <Image src={logo} alt="Logo" className="w-32" />
        </Link>

        <div className="mx-auto">
          <SearchInput lang={headers.search} />
        </div>

        <div className="flex items-center space-x-4 ">
          <Link
            href="/wishlist"
            className="text-center text-gray-700 hover:text-primary transition relative flex flex-col gap-1"
          >
            <div className="text-2xl mx-auto">
              <FaRegHeart />
            </div>
            <div className="text-xs leading-3">{headers?.wishlist}</div>
            <div className="absolute -right-1 -top-1 w-5 h-5 rounded-full flex items-center justify-center bg-primary text-white text-xs ">
              {lengthWishlist?.length || 0}
            </div>
          </Link>
          <Link
            href="/cart"
            className="text-center text-gray-700 hover:text-primary transition relative flex flex-col gap-1 "
          >
            <div className="text-2xl">
              <BsBag />
            </div>
            <div className="text-xs leading-3">{headers?.cart}</div>
            <div className="absolute -right-3 -top-1 w-5 h-5 rounded-full flex items-center justify-center bg-primary text-white text-xs ">
              {lengthCart?.items?.length || 0}
            </div>
          </Link>

          {session?.user ? (
            <Link
              href="/account"
              className="text-center text-gray-700 hover:text-primary transition relative flex flex-col gap-1 "
            >
              <div className="text-2xl mx-auto ">
                <Image
                  src={session?.user?.image}
                  alt="user"
                  width={40}
                  height={40}
                  className="rounded-full"
                />
              </div>
              <div className="text-xs leading-3">Account</div>
            </Link>
          ) : (
            <Link
              href="/login"
              className="text-center text-gray-700 hover:text-primary transition relative flex flex-col gap-1 "
            >
              <div className="text-2xl mx-auto">
                <FaRegUser />
              </div>
              <div className="text-xs leading-3">Account</div>
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
