"use client";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import categoryLabels from "@/data/categoryLabels";

const FilterByCategory = ({ children }) => {
  const [query, setQuery] = useState([]);
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathName = usePathname();
  const params = new URLSearchParams(searchParams);

  useEffect(() => {
    const category = params.get("category");
    if (category) {
      const decodedCategory = decodeURI(category);
      const queryInCategory = decodedCategory.split(",");
      setQuery(queryInCategory);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);

  const handleChange = (e) => {
    if (e.target.checked) {
      setQuery([...query, e.target.name]);
      params.delete("category");
      params.append("category", [...query, e.target.name].join(","));
    } else {
      const remove = query.filter((item) => item !== e.target.name);
      setQuery(remove);
      params.delete("category");
      if (remove.length > 0) {
        params.append("category", remove);
      }
    } 
    router.push(`${pathName}?${params.toString()}`);
  };

  return (
    <div>
      <h3 className="text-xl text-gray-800 mb-3 uppercase font-medium">
        Categories
      </h3>
      <div className="flex justify-between ">
        <div className="space-y-2 ">
          {categoryLabels.map((label) => (
            <div key={label.id} className="flex items-center">
              <label
                htmlFor={label.name}
                className="text-gray-600 cursor-pointer "
              >
                <input
                  type="checkbox"
                  name={label.name}
                  id={label.name}
                  onChange={handleChange}
                  checked={query.includes(label.name)}
                  className="text-primary focus:ring-0 rounded-sm cursor-pointer mr-3"
                />

                {label.label}
              </label>
            </div>
          ))}
        </div>
        <div className="flex flex-col justify-evenly">{children}</div>
      </div>
    </div>
  );
};

export default FilterByCategory;
