import { auth } from "@/auth";
import CartPage from "@/components/cart/CartPage";
import BreadCrumb from "@/components/shared/BreadCrumb";
import { redirect } from "next/navigation";

export async function generateMetadata() {
  return {
    title: "Cart List",
    description: "Cart List",
    openGraph: {
      title: "Cart List",
      description: "Cart List",
    },
    twitter: {
      title: "Cart List",
      description: "Cart List",
    },
  };
}

const CartListPage = async ({ params: { lang } }) => {
  const session = await auth();
  if (!session?.user) return redirect("/login");
  return (
    <>
      <BreadCrumb name={"Cart"} />
      <CartPage lang={lang} />
    </>
  );
};

export default CartListPage;
