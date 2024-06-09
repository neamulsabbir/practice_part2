import Ads from "@/components/home/Ads";
import Banner from "@/components/home/Banner";
import Categories from "@/components/home/Categories";
import Features from "@/components/home/Features";
import NewArrival from "@/components/home/NewArrival";
import Product from "@/components/home/Product";
import CardSkeleton from "@/components/shared/CardSkeleton";
import { Suspense } from "react";
import { getDictionary } from "./_dictionaries/getDictionary";

export async function generateMetadata() {
  return {
    title: "Home",
    description: "Home Page",
  };
}

export default async function Home({ params: { lang } }) {
  const {home:{category,newArrival,trend}} = await getDictionary(lang);
  return (
    <>
      <Banner lang={lang} />
      <Features lang={lang} />
      <Categories lang={category} />
      <div className="container pb-16">
        <h2 className="text-2xl font-medium text-gray-800 uppercase mb-6">
        {newArrival}
        </h2>
        <Suspense
          fallback={
            <CardSkeleton
              num={4}
              style={"grid grid-cols-2 md:grid-cols-4 gap-6"}
            />
          }
        >
          <NewArrival />
        </Suspense>
      </div>
      <Ads />
      <div className="container pb-16">
        <h2 className="text-2xl font-medium text-gray-800 uppercase mb-6">
        {trend}
        </h2>
        <Suspense
          fallback={
            <CardSkeleton
              num={8}
              style={"grid grid-cols-2 md:grid-cols-4 gap-6"}
            />
          }
        >
          <Product />
        </Suspense>
      </div>
    </>
  );
}
