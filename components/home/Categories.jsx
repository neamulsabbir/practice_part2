import CategoryCard from "./CategoryCard";
import categoryData from "@/data/categoryLinks";
const Categories = ({lang}) => {
  return (
    <div className="container py-16">
      <h2 className="text-2xl font-medium text-gray-800 uppercase mb-6">
       {lang}
      </h2>
      <div className="grid grid-cols-3 gap-3">
        {categoryData.map(( category) => (
          <CategoryCard key={category.id} category={category} />
        ))}
      </div>
    </div>
  );
};

export default Categories;
