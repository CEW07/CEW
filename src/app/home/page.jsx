"use client";
import React, { useEffect, useState } from "react";
import { useData } from "../contextapi/contextData";
import ProductCard from "@/custom_components/product-ui/ProductCard";
import HeroMain from "@/custom_components/home-ui/hero-main/page";
import HeroSubMain from "@/custom_components/home-ui/hero-submain/page";
const HomeContent = () => {
  // Destructuring Context Data from contextData.js
  const { productData, loading } = useData();
  console.log(productData, "contextt data here");
  function testFunc() {
    console.log(productData.productCategories);
  }
  return (
    <main className="w-full relative">
      <section className="w-full relative">
        <HeroMain />
        <HeroSubMain />
        <div className="lg:pt-12 pt-16 flex justify-center mx-20">
          <div className=" grid xl:grid-cols-4 lg:grid-cols-3 gap-6 grid-cols-1 sm:grid-cols-2">
            {loading
              ? "loading..."
              : productData?.mainCategory?.map((item) => (
                  <ProductCard
                    keyId={item.product_id}
                    name={item.product_name}
                    href={item.product_types ? `/products/${item.product_id}` : `/products/${item.product_id}`}
                  />
                ))}
          </div>
        </div>
      </section>
      <section className="h-[100vh] w-full flex justify-center mt-10">
        <div className="bg-offwhite w-[80%] lg:w-[50%] h-[80vh] border flex justify-center items-center rounded-md shadow-xl text-gray-700 font-medium">
          <span>Testimonials Coming soon...!!!</span>
        </div>
      </section>
    </main>
  );
};

export default HomeContent;