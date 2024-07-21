"use client";
import React, { useState } from "react";
import ProductCard from "@/custom_components/product-ui/ProductCard";
import { mainProductImages, mainProducts } from "@/staticdata/static";
import Image from "next/image";
const Products = () => {
  return (
    <div className="">
      <h1 className="text-3xl my-5 font-semibold text-center text-newgold">Our Products</h1>
      <div className=" pt-10 grid sm:max-md:grid-cols-2  mainProducts:grid-cols-2 xl:grid-cols-3 gap-6  ">
        {mainProducts.map((item, index) => {
              return (
                <ProductCard
                  key={item.product_id}
                  keyId={item.product_id}
                  name={item.product_name}
                  href={`/${item.product_name_id}`}
                  imageSrc={item.image}
                  imageAlt={item.alt}
                />
              );
            })}
      </div>
    </div>
  );
};

export default Products;
