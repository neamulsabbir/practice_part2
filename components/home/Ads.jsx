import offer from "@/public/images/offer.jpg";
import Image from "next/image";
import Link from "next/link";
const Ads = () => {
  return (
    <div className="container pb-16">
      <Link href="/shop">
        <Image src={offer} alt="ads" className="w-full" />
      </Link>
    </div>
  );
};

export default Ads;
