import { loginWithGoogle } from "@/actions/user";

const GoogleLogButton = () => {
  return (
    <form action={loginWithGoogle} className="w-1/2">
      <button
        type="submit"
        className="w-full py-2 text-center text-white bg-red-600 rounded uppercase font-roboto font-medium text-sm hover:bg-red-500"
      >
        google
      </button>
    </form>
  );
};

export default GoogleLogButton;
