"use client";
import React, { useState } from "react";

import { useData } from "@/app/contextapi/contextData";
import ProductCard from "@/custom_components/product-ui/ProductCard";
const Products = () => {
  // Destructuring Context Data from contextData.js
  const { productData, loading } = useData();
  // function testFunc() {
  // console.log(productData, "data here");
  //
  return (
    <div className="my-10 mx-4  space-x-14 flex min-h-[100vh] ">
      {/* <button onClick={()=>testFunc()} >test</button> */}
      {/* <ProductGrid productData={productData} /> */}
      <div className="lg:pt-12 pt-16 grid mainProducts:grid-cols-2 xl:grid-cols-3 gap-6  ">
        {loading
          ? "loading..."
          : productData.mainCategory.map((item) => (
              <ProductCard
                keyId={item.product_id}
                name={item.product_name}
                href={`/products/${item.product_id}`}
              />
            ))}
      </div>
    </div>
  );
};

export default Products;
