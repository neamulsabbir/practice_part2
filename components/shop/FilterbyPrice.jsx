"use client";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
const FilterByPrice = () => {
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const searchParams = useSearchParams();
  const pathName = usePathname();
  const router = useRouter();
  const params = new URLSearchParams(searchParams);
  useEffect(() => {
    if (params.get("minPrice")) {
      setMinPrice(params.get("minPrice"));
    }
    if (params.get("maxPrice")) {
      setMaxPrice(params.get("maxPrice"));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const handleChange = (e) => {
    if (e.target.name === "minPrice") {
      if (e.target.value) {
        setMinPrice(e.target.value);
        params.delete("minPrice");
        params.append("minPrice", e.target.value);
      } else {
        setMinPrice(e.target.value);
        params.delete("minPrice");
      }
    } else if (e.target.name === "maxPrice") {
      if (e.target.value) {
        setMaxPrice(e.target.value);
        params.delete("maxPrice");
        params.append("maxPrice", e.target.value);
      } else {
        setMaxPrice(e.target.value);
        params.delete("maxPrice");
        params.append("maxPrice", e.target.value);
        console.log("maxPrice", e.target.value);
      }
    }
    router.push(`${pathName}?${params.toString()}`);
  };
  return (
    <div className="pt-4">
      <h3 className="text-xl text-gray-800 mb-3 uppercase font-medium">
        Price
      </h3>
      <div className="mt-4 flex items-center">
        <input
          type="text"
          name="minPrice"
          value={minPrice}
          onChange={handleChange}
          className="w-full border-gray-300 focus:border-primary rounded focus:ring-0 px-3 py-1 text-gray-600 shadow-sm"
          placeholder="min price"
        />
        <span className="mx-3 text-gray-500">-</span>
        <input
          type="text"
          name="maxPrice"
          value={maxPrice}
          onChange={handleChange}
          className="w-full border-gray-300 focus:border-primary rounded focus:ring-0 px-3 py-1 text-gray-600 shadow-sm"
          placeholder="max price"
        />
      </div>
    </div>
  );
};

export default FilterByPrice;
