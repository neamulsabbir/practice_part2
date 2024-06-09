import { auth } from "@/auth";
import Link from "next/link";
import { redirect } from "next/navigation";

const ShippingAddress = async ({ lang }) => {
  const session = await auth();
  if (!session?.user) return redirect("/login");
  const res = await fetch(
    `https://lwskart-bice.vercel.app/api/user?email=${session.user.email}`
  );
  const data = await res.json();
  const { firstName, lastName, zip, phone, address, country, city } =
    data?.shipping || {};
  return (
    <div className="shadow rounded bg-white px-4 pt-6 pb-8">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-medium text-gray-800 text-lg">{lang?.shipping}</h3>
        <Link href="/account/edit/shipping" className="text-primary">
          {lang?.edit}
        </Link>
      </div>
      <div className="space-y-1">
        {data?.shipping && (
          <>
            <p className="text-gray-800">{firstName + lastName}</p>
            <p className="text-gray-800">{address}</p>
            <p className="text-gray-800">{city}</p>
            <p className="text-gray-800">{country}</p>
            <p className="text-gray-800">{phone}</p>
            <p className="text-gray-800">{zip}</p>
          </>
        )}
      </div>
    </div>
  );
};

export default ShippingAddress;
