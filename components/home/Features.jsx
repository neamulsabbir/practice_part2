import deliveryVan from "@/public/images/icons/delivery-van.svg";
import serviceOur from "@/public/images/icons/service-hours.svg";
import moneyImg from "@/public/images/icons/money-back.svg";
import bed from "@/public/images/icons/bed.svg";
import Image from "next/image";
import { getDictionary } from "@/app/[lang]/_dictionaries/getDictionary";
const Features = async ({ lang }) => {
  const {
    home: {
      feature: { shipping, order, money, ret, support, customer },
    },
  } = await getDictionary(lang);
  return (
    <div className="container py-16">
      <div className="w-10/12 grid grid-cols-1 md:grid-cols-3 gap-6 mx-auto justify-center">
        <div className="border border-primary rounded-sm px-3 py-6 flex justify-center items-center gap-5">
          <Image
            src={deliveryVan}
            alt="Delivery"
            className="size-12 object-contain"
          />
          <div>
            <h4 className="font-medium capitalize text-lg">{shipping}</h4>
            <p className="text-gray-500 text-sm">{order}</p>
          </div>
        </div>
        <div className="border border-primary rounded-sm px-3 py-6 flex justify-center items-center gap-5">
          <Image
            src={moneyImg}
            alt="Money Returns"
            className="size-12 object-contain"
          />
          <div>
            <h4 className="font-medium capitalize text-lg">{money}</h4>
            <p className="text-gray-500 text-sm">{ret}</p>
          </div>
        </div>
        <div className="border border-primary rounded-sm px-3 py-6 flex justify-center items-center gap-5">
          <Image
            src={serviceOur}
            alt="Delivery"
            className="size-12 object-contain"
          />
          <div>
            <h4 className="font-medium capitalize text-lg">{support}</h4>
            <p className="text-gray-500 text-sm">{customer}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
