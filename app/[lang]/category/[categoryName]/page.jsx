import ProductContainer from "@/components/category/ProductContainer";
import FilterByCategory from "@/components/shop/FilterByCategory";
import FilterBySize from "@/components/shop/FilterBySize";
import FilterByPrice from "@/components/shop/FilterbyPrice";
import filterData from "@/data/categoryFilterData";
import getFilterData from "@/lib/getFilterData";





const CategoryPage =async ({ params: { categoryName } }) => {
  const data = await getFilterData(categoryName)
 

  return (
    <>
      <div className="container grid md:grid-cols-4 grid-cols-2 gap-6 pt-4 pb-16 items-start">
        {/* drawer init and toggle */}
        {/* sidebar */}
        <div className="col-span-1 bg-white px-4 pb-6 shadow rounded overflow-hidden hidden md:block">
          <div className="divide-y divide-gray-200 space-y-5">
            {/* filter */}
            <FilterByCategory />
            <FilterByPrice />
            <FilterBySize />
          </div>
        </div>
        {/* products */}
        <ProductContainer categoryName={categoryName} />
      </div>
    </>
  );
};

export default CategoryPage;
