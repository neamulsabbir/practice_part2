import Image from "next/image";
import logo from "@/public/images/logo.svg";
import solutionsLinks from "@/data/solutionLinks";
import supportLinks from "@/data/supportLinks";
import Link from "next/link";
import { getDictionary } from "@/app/[lang]/_dictionaries/getDictionary";
const Footer = async ({ lang }) => {
  const {footer:{copyright,text,support,...rest}} = await getDictionary(lang);
  return (
    <footer className="bg-white pt-16 pb-12 border-t border-gray-100">
      <div className="container grid grid-cols-1 ">
        <div className="col-span-2 grid grid-cols-2 gap-4">
          <div className="grid grid-cols-2 gap-4 md:gap-8">
            <div className="col-span-1 space-y-4">
              <Image src={logo} alt="logo" className="w-30" />
              <div className="mr-2">
                <p className="text-gray-500">
                  {text}
                </p>
              </div>
              <div className="flex space-x-5">
                <a href="#" className="text-gray-400 hover:text-gray-500">
                  <i className="fa-brands fa-facebook-square"></i>
                </a>
                <a href="#" className="text-gray-400 hover:text-gray-500">
                  <i className="fa-brands fa-instagram-square"></i>
                </a>
                <a href="#" className="text-gray-400 hover:text-gray-500">
                  <i className="fa-brands fa-twitter-square"></i>
                </a>
                <a href="#" className="text-gray-400 hover:text-gray-500">
                  <i className="fa-brands fa-github-square"></i>
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
                {support}
              </h3>
              <div className="mt-4 space-y-4">
                {supportLinks.map((link) => (
                  <Link
                    key={link.id}
                    href={link.href}
                    className="text-base text-gray-500 hover:text-gray-900 block"
                  >
                    {rest[link.title]}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
                Solutions
              </h3>
              <div className="mt-4 space-y-4">
                {solutionsLinks.map((link) => (
                  <Link
                    key={link.id}
                    href={link.href}
                    className="text-base text-gray-500 hover:text-gray-900 block"
                  >
                    {rest[link.title]}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
                Support
              </h3>
              <div className="mt-4 space-y-4">
                {supportLinks.map((link) => (
                  <Link
                    key={link.id}
                    href={link.href}
                    className="text-base text-gray-500 hover:text-gray-900 block"
                  >
                    {rest[link.title]}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
