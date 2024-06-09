"use server";

import connectMongo from "@/lib/connectDb";
import userModel from "@/schema/userModel";
import { redirect } from "next/navigation";

const editShipping = async (data, email) => {
  await connectMongo();
  const updated = await userModel.updateOne(
    { email },
    { $set: { shipping: data } }
  );
  redirect("/account")
  return updated;
};

export default editShipping;
