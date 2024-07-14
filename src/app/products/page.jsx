"use client";
import React, { useState } from "react";

import { useData } from "@/app/contextapi/contextData";
import ProductCard from "@/custom_components/product-ui/ProductCard";
import { mainProductImages } from "@/staticdata/static";
import Image from "next/image";
const Products = () => {
  // Destructuring Context Data from contextData.js
  const { productData, loading } = useData();
  // function testFunc()

  // console.log(productData, "data here");
  //
  return (
    <div className="">
      <h1 className="text-3xl my-5 font-semibold text-newgold">Our Products</h1>
      {/* <button onClick={()=>testFunc()} >test</button> */}
      {/* <ProductGrid productData={productData} /> */}
      <div className=" pt-10 grid sm:max-md:grid-cols-2  mainProducts:grid-cols-2 xl:grid-cols-3 gap-6  ">
        {loading
          ? "loading..."
          : productData.mainCategory.map((item, index) => {
              const correspondingImage = mainProductImages[index];

              return (
                <ProductCard
                  key={item.product_id}
                  keyId={item.product_id}
                  name={item.product_name}
                  href={`/${item.product_name_id}`}
                  imageSrc={correspondingImage?.image}
                  imageAlt={correspondingImage?.alt}
                />
              );
            })}
      </div>
    </div>
  );
};

export default Products;
