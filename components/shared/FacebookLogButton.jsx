import { loginWithFacebook } from "@/actions/user";

const FacebookLogButton = () => {
  return (
    <form action={loginWithFacebook} className="w-1/2">
      <button
        type="submit"
        className="w-full py-2 text-center text-white bg-blue-800 rounded uppercase font-roboto font-medium text-sm hover:bg-blue-700"
      >
        facebook
      </button>
    </form>
  );
};

export default FacebookLogButton;
