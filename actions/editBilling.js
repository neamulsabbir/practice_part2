"use server";

import connectMongo from "@/lib/connectDb";
import userModel from "@/schema/userModel";
import { redirect } from "next/navigation";

const editBilling = async (data, email) => {
  await connectMongo();
  const updated = await userModel.updateOne(
    { email },
    { $set: { billing: data } }
  );
  redirect("/account");
  return updated;
};

export default editBilling;
