import { getDictionary } from "@/app/[lang]/_dictionaries/getDictionary";
import methods from "@/public/images/methods.png";
import Image from "next/image";
const Copyright = async ({ lang }) => {
  const {footer:{copyright,}} = await getDictionary(lang);
  return (
    <div className="bg-gray-800 py-4">
      <div className="container flex items-center justify-between">
        <p className="text-white">{copyright}</p>
        <div>
          <Image src={methods} alt="methods" className="h-5 w-60" />
        </div>
      </div>
    </div>
  );
};

export default Copyright;
