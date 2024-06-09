import Link from "next/link";
import Image from "next/image";
import { FaBars } from "react-icons/fa";
import navLinks from "@/data/navLinks";
import categoryLinks from "@/data/categoryLinks";
import { auth } from "@/auth";
import { logout as logOutHandler } from "@/actions/user";
import { getDictionary } from "@/app/[lang]/_dictionaries/getDictionary";

const Navbar = async ({ lang }) => {
  const session = await auth();
  const {navBar:{category,login,logout,...rest}} = await getDictionary(lang);

  return (
    <nav className="bg-gray-800">
      <div className="container flex">
        <div className="px-6 py-4 bg-primary md:flex items-center cursor-pointer relative group hidden">
          <span className="text-white text-2xl">
            <FaBars />
          </span>
          <span className="capitalize ml-2 text-white hidden">
            {category}
          </span>

          <div
            className="absolute left-0 top-full bg-white shadow-md py-3 divide-y divide-gray-300 divide-dashed opacity-0 group-hover:opacity-100 transition duration-300 invisible group-hover:visible w-[600px]"
            style={{ width: "300px" }}
          >
            {categoryLinks.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                className="flex items-center px-6 py-3 hover:bg-gray-100 transition"
              >
                <Image
                  width={20}
                  height={20}
                  src={item.icon}
                  alt="sofa"
                  className="w-5 h-5 object-contain"
                />
                <span className="ml-6 text-gray-600 text-sm">
                  {item.category}
                </span>
              </Link>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-between flex-grow md:pl-12 py-5">
          <div className="flex items-center space-x-6 capitalize">
            {navLinks.map((link) => (
              <Link
                key={link.id}
                href={link.href}
                className="text-gray-200 hover:text-white transition"
              >
                {rest[link.title]}
              </Link>
            ))}
          </div>

          {session ? (
            <form action={logOutHandler}>
              <button
                type="submit"
                className="text-gray-200 hover:text-white transition"
              >
                {logout}
              </button>
            </form>
          ) : (
            <Link
              href="/login"
              className="text-gray-200 hover:text-white transition"
            >
            {login}
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
