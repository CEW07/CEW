"use client";
import React from "react";
import ProductCard from "@/custom_components/product-ui/ProductCard";
import { mainProducts } from "@/staticdata/static";

const Products = () => {
  return (
    <div className="text-center  select-none ">
      <h1 className="text-2xl md:text-4xl my-5 font-semibold text-newgold">Our Products</h1>
      <div className="flex justify-center">
        <div className="pt-10 grid small:max-md:grid-cols-2 mainProducts:grid-cols-2 xl:grid-cols-3 gap-6">
          {mainProducts.map((item) => (
            <ProductCard
              key={item.product_id}
              keyId={item.product_id}
              name={item.product_name}
              href={`/products/${item.product_name_id}`}
              imageSrc={item.image}
              imageAlt={item.alt}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
