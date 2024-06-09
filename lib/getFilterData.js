"use server";

import filterData from "@/data/categoryFilterData";

const getFilterData = async (categoryName) => {
  return filterData[categoryName];
};

export default getFilterData;
