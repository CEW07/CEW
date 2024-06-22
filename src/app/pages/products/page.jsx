"use client";
import ProductGrid from "@/app/custom_components/product-ui/ProductGrid";
import SidebarProduct from "@/app/custom_components/product-ui/SideBar";
import React, { useState } from "react";

import { useData } from "@/app/contextapi/contextData";
import ProductCard from "@/app/custom_components/product-ui/ProductCard";
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
      <div className="lg:pt-12 pt-16 flex justify-center ">
        {loading
          ? "loading..."
          : productData.productCategories.map((item) => (
              <ProductCard
                keyId={item.product_name_id}
                name={item.product_name}
                href={`/pages/products/${item.product_name_id}`}
                // query={item.product_name_id}
              />
            ))}
      </div>
    </div>
  );
};

export default Products;
