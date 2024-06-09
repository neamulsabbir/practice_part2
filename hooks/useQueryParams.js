import { useState, useEffect, useMemo } from "react";
import { useRouter } from "next/router";
import { useSearchParams } from "next/navigation";

const useQueryParams = (queryName) => {
  const [query, setQuery] = useState([]);
  const searchParams = useSearchParams();
  const router = useRouter();
  const params = useMemo(
    () => new URLSearchParams(searchParams),
    [searchParams]
  );

  useEffect(() => {
    const query = params.get(queryName);

    if (query) {
      const decodedQuery = decodeURI(query);
      const queryValues = decodedQuery.split(",");
      setQuery(queryValues);
    }
  }, [queryName, params]);

  const updateQueryParams = (updatedQuery) => {
    params.delete(queryName);
    params.append(queryName, updatedQuery);
    router.push(`/shop?${params.toString()}`);
  };

  return { query, updateQueryParams };
};

export default useQueryParams;
