import categoryLabels from "@/data/categoryLabels";
import CategoryWisePDNum from "./CategoryWisePDNum";
import FilterByCategory from "./FilterByCategory";
import FilterByPrice from "./FilterbyPrice";

const Sidebar = () => {
  return (
    <div className="col-span-1 bg-white px-4 pb-6 shadow rounded overflow-hidden hidden md:block">
      <div className="divide-y divide-gray-200 space-y-5">
        {/* filter by category */}
        <FilterByCategory>
          {categoryLabels.map((item) => (
            <CategoryWisePDNum key={item.id} name={item.name} />
          ))}
        </FilterByCategory>
        {/* filter by price */}
        <FilterByPrice />
      </div>
    </div>
  );
};

export default Sidebar;
