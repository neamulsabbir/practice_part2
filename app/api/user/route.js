import connectMongo from "@/lib/connectDb";
import userModel from "@/schema/userModel";
import { NextResponse } from "next/server";

export async function GET(req) {
  await connectMongo();
  const query = req?.nextUrl?.searchParams;
  const user = await userModel.findOne({ email: query.get("email") });
  if (!user) {
    return NextResponse.json({ message: "No user found", status: "404" });
  }
  return NextResponse.json(user);
}
