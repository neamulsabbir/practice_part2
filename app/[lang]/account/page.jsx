import { auth } from "@/auth";
import BillingAddress from "@/components/account/BillingAddress";
import PersonalProfile from "@/components/account/PersonalProfile";
import ShippingAddress from "@/components/account/ShippingAddress";
import BreadCrumb from "@/components/shared/BreadCrumb";
import { redirect } from "next/navigation";
import { getDictionary } from "../_dictionaries/getDictionary";

export async function generateMetadata() {
  return {
    title: "My Account",
    description: "My Account",
  };
}

const Account = async ({ params: { lang } }) => {
  const session = await auth();
  if (!session?.user) {
    return redirect("/login");
  }
  const {
    profile: { edit, billing, shipping, personal },
  } = await getDictionary(lang);

  return (
    <>
      <BreadCrumb name={"Account"} />
      <div className="container  items-start gap-6 pt-4 pb-16">
        <div className=" grid grid-cols-3 gap-4 mx-auto max-w-5xl">
          <PersonalProfile lang={personal} user={session?.user} />
          <ShippingAddress lang={{ shipping, edit }} />
          <BillingAddress />
        </div>
      </div>
    </>
  );
};

export default Account;
