import React from "react";
// import { productGrid } from "@/app/staticdata/static";
import Image from "next/image";
import ProductCard from "./ProductCard";
const ProductGrid = ({ productData, loading, cardId }) => {

  return (
    <>
    <div className="grid xl:grid-cols-4 lg:grid-cols-3 gap-6 grid-cols-1 sm:grid-cols-2 ">

      {cardId}
    </div>
    </>
  );
};

export default ProductGrid;
