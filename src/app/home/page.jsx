"use client";
import React, { useEffect, useState } from "react";
import { useData } from "@/app/contextapi/contextData";
import ProductCard from "@/app/custom_components/product-ui/ProductCard";
import { mainProductImages } from "@/app/staticdata/static";
const HomeContent = () => {
  // Destructuring Context Data from contextData.js
  const { productData, loading } = useData();
  return (
    <main className="w-full relative">
      <section className="w-full relative">
        <HeroMain />
        <HeroSubMain />
        <div className="lg:pt-12 pt-16 flex justify-center mx-20">
          <div className=" grid xl:grid-cols-4 lg:grid-cols-3 gap-6 grid-cols-1 sm:grid-cols-2">
            {loading
              ? "loading..."
              : productData?.mainCategory?.map((item, index) => {
                  const correspondingImage = mainProductImages[index];

                  return (
                    <ProductCard
                      key={item.product_id}
                      keyId={item.product_id}
                      name={item.product_name}
                      href={`/pages/products/${item.product_id}`}
                      imageSrc={correspondingImage?.image}
                      imageAlt={correspondingImage?.alt}
                    />
                  );
                })}
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
