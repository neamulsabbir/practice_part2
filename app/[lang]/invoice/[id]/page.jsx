import InvoicePdf from "@/components/invoice/InvoicePdf";
import OrderModel from "@/schema/orderModel";
import { Suspense } from "react";

export async function generateMetadata(){
  return {
    title: "Invoice",
    description: "Invoice",
    openGraph: {
      title: "Invoice",
      description: "Invoice",
    },
  };
}

const InvoicePage = async ({ params: { id } }) => {
  const data = await OrderModel.findById(id).populate("items.product_id");
  const dataJson = JSON.stringify(data);
  return (
    <div>
      <Suspense fallback={<p>Please wait</p>}>
        <InvoicePdf id={id} dataJson={dataJson} />
      </Suspense>
    </div>
  );
};

export default InvoicePage;
