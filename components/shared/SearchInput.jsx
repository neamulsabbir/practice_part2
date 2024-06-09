"use client";
import { FaSearch } from "react-icons/fa";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";
const SearchInput = ({ lang }) => {
  const [search, setSearch] = useState("");
  const searchParams = useSearchParams();
  const router = useRouter();
  const params = new URLSearchParams(searchParams);
  useEffect(() => {
    const q = params.get("q");
    if (q) setSearch(q);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const handlerSearch = () => {
    params.delete("q");
    params.append("q", search);
    router.push(`/shop?${params.toString()}`);
  };

  return (
    <div className=" max-w-xl md:w-[576px] relative flex ">
      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-lg text-gray-400">
        <FaSearch />
      </span>
      <input
        type="text"
        name="search"
        id="search"
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
          handlerSearch();
        }}
        className="w-full border border-primary border-r-0 pl-12 py-3 pr-3 rounded-l-md focus:outline-none hidden md:flex"
        placeholder={lang}
      />
      <button
        onClick={handlerSearch}
        className="bg-primary border border-primary text-white px-8 rounded-r-md hover:bg-transparent hover:text-primary transition hidden md:flex items-center"
      >
        {lang}
      </button>
    </div>
  );
};

export default SearchInput;
