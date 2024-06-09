import { auth } from "@/auth";
import EditShipping from "@/components/account/EditShipping";
import { redirect } from "next/navigation";

export async function generateMetadata() {
  return {
    title: "Edit Shipping Address",
    description: "Edit Shipping Address",
    openGraph: {
      title: "Edit Shipping Address",
      description: "Edit Shipping Address",
    },
    twitter: {
      title: "Edit Shipping Address",
      description: "Edit Shipping Address",
    },
  };
}

const EditShippingPage = async ({}) => {
  const session = await auth();
  if (!session?.user) return redirect("/login");

  return (
    <div className="my-10">
      <EditShipping session={session} />
    </div>
  );
};

export default EditShippingPage;
