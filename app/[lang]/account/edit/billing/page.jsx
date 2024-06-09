import { getDictionary } from "@/app/[lang]/_dictionaries/getDictionary";
import { auth } from "@/auth";
import EditBilling from "@/components/account/EditBilling";
import { redirect } from "next/navigation";

export async function generateMetadata() {
  return {
    title: "Edit Billing Address",
    description: "Edit Billing Address",
    openGraph: {
      title: "Edit Billing Address",
      description: "Edit Billing Address",
    },
    twitter: {
      title: "Edit Billing Address",
      description: "Edit Billing Address",
    },
  };
}

const EditBillingPage = async ({}) => {
  const session = await auth();
  if (!session?.user) return redirect("/login");
  return (
    <div className="my-10">
      <EditBilling session={session} />
    </div>
  );
};

export default EditBillingPage;
