import BreadCrumb from "@/components/shared/BreadCrumb";
import Drawer from "@/components/shop/Drawer";
import DrawerToggle from "@/components/shop/DrawerToggle";
import Products from "@/components/shop/Products";
import Sidebar from "@/components/shop/Sidebar";

export async function generateMetadata() {
  return {
    title: "Shop",
    description: "Shop",
  };
}

const ShopPage = ({ searchParams }) => {
  return (
    <>
      <BreadCrumb />
      <div className="container grid md:grid-cols-4 grid-cols-2 gap-6 pt-4 pb-16 items-start">
        <DrawerToggle />
        <Drawer />
        <Sidebar />
        <Products searchParams={searchParams} />
      </div>
    </>
  );
};

export default ShopPage;
