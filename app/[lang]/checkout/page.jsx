import { auth } from "@/auth";
import CheckoutForm from "@/components/checkout/CheckoutForm";
import OrderSummary from "@/components/checkout/OrderSummary";
import BreadCrumb from "@/components/shared/BreadCrumb";
import { redirect } from "next/navigation";
import { getDictionary } from "../_dictionaries/getDictionary";

export async function generateMetadata() {
  return {
    title: "Checkout",
    description: "Checkout",
  };
}

const Checkout = async ({ params: { lang } }) => {
  const session = await auth();
  if (!session?.user) {
    return redirect("/login");
  }
  const cartList = await fetch(
    `https://lwskart-bice.vercel.app/api/cart/${session?.user?.id}`,
    {
      next: {
        tags: ["cartItems"],
      },
    }
  );
  const data = await cartList.json();
  const totalPrice = data?.items?.reduce(
    (sum, item) => item?.product_id?.price * item?.quantity + sum,
    0
  );
  const {
    checkout: { labels, orderSummary },
  } = await getDictionary(lang);
  return (
    <>
      <BreadCrumb name={"checkout"} />
      <div className="container grid grid-cols-8 items-start pb-16 pt-4 gap-6">
        <CheckoutForm lang={labels} totalPrice={totalPrice} session={session} />
        <OrderSummary totalPrice={totalPrice} data={data} />
      </div>
    </>
  );
};

export default Checkout;
