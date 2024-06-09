import { auth } from "@/auth";
import Register from "@/components/register/Register";
import { redirect } from "next/navigation";

export async function generateMetadata() {
  return {
    title: "Register",
    description: "Register",
    openGraph: {
      title: "Register",
      description: "Register",
      type: "website",
      site_name: "lwsKart",
    },
  };
}

const RegisterPage = async () => {
  const session = await auth();
  if (session?.user) {
    return redirect("/");
  }
  return (
    <>
      <Register />
    </>
  );
};

export default RegisterPage;
