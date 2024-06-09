import Copyright from "@/components/shared/Copyright";
import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";
import Navbar from "@/components/shared/Navbar";

const Layout = ({ children, params: { lang } }) => {
  return (
    <>
      <Header lang={lang} />
      <Navbar lang={lang} />
      {children}
      <Footer lang={lang} />
      <Copyright lang={lang} />
    </>
  );
};

export default Layout;
