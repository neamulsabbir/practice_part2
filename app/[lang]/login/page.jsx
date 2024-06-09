import { auth } from "@/auth";
import LoginForm from "@/components/login/LoginForm";
import { redirect } from "next/navigation";
import { getDictionary } from "../_dictionaries/getDictionary";

export async function generateMetadata() {
  return {
    title: "Login",
    description: "Login",
    openGraph: {
      title: "Login",
      description: "Login",
    },
  };
}

const Login = async ({  }) => {
  const session = await auth();
  if (session?.user) {
    return redirect("/");
  }
  return (
    <>
      <LoginForm />
    </>
  );
};

export default Login;
