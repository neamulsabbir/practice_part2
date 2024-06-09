"use server";

import Template from "@/components/email/Template";
import connectMongo from "@/lib/connectDb";
import cartModel from "@/schema/cartModel";
import OrderModel from "@/schema/orderModel";
import { revalidateTag } from "next/cache";
import { Resend } from "resend";

const placeOrder = async (data) => {
  await connectMongo();
  const newOrder = await OrderModel.create(data);
  if (newOrder?.email) {
    const removeToCart = await cartModel.deleteOne({ email: newOrder?.email });
    revalidateTag("cartLength");
  }
  const resend = new Resend("re_cg7oddd4_M9V5HDPKZrRRrNAPTWx5jH3g");

  const getOrder = await OrderModel.findById(newOrder._id).populate(
    "items.product_id"
  );

  try {
    const resendRes = await resend.emails.send({
      from: "LWSkart <onboarding@resend.dev>",
      to: "miremon5222@gmail.com",
      subject: "Your order has been placed successfully",
      react: Template({ data: getOrder }),
    });
  } catch (error) {
    console.error("Error sending email:", error);
  }

  return {
    message: "Order created successfully",
    status: "success",
    id: newOrder._id.toString(),
  };
};

export default placeOrder;
