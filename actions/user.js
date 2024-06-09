"use server";
import { signIn, signOut } from "@/auth";
import { redirect } from "next/navigation";
import { isRedirectError } from "next/dist/client/components/redirect";
import connectMongo from "@/lib/connectDb";
import bcrypt from "bcrypt";
import userModel from "@/schema/userModel";
const login = async (prevState, formData) => {
  const { email, password } = Object.fromEntries(formData);
  try {
    await connectMongo();
    const user = await userModel.findOne({ email });
    if (!user) return null;
    const matchPass = await bcrypt.compare(password, user.password);
    if (!matchPass) return null;
    signIn("credentials", {
      id: user?._id,
      name: user?.name,
      image: user?.image,
      email,
      redirect: false,
      redirectTo: "/",
    });
    redirect("/");
  } catch (error) {
    if (isRedirectError(error)) {
      throw error;
    } else {
      return {
        error: true,
        message: error.message || "Something went wrong",
      };
    }
  }
};

const loginWithFacebook = async () => {
  await signIn("facebook", { callbackUrl: "http://localhost:3000" });
};

const loginWithGoogle = async () => {
  await signIn("google", { callbackUrl: "http://localhost:3000" });
};

const register = async (prevState, formData) => {
  const { name, email, password, confirm } = Object.fromEntries(formData);
  try {
    await connectMongo();

    if (password !== confirm) {
      return { error: true, message: "Passwords do not match" };
    }
    const hashedPassword = await bcrypt.hash(password, 10);

    await userModel.create({ name, email, password: hashedPassword });
    redirect("/login");
  } catch (error) {
    if (isRedirectError(error)) {
      throw error;
    } else {
      return { error: true, message: error.message || "Something went wrong" };
    }
  }
};

const logout = async () => {
  await signOut();
};

export { login, loginWithFacebook, loginWithGoogle, logout, register };
