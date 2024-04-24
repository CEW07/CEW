"use client";
import { useData } from "@/app/contextapi/contextData";
import ProductCard from "@/app/custom_components/product-ui/ProductCard";
import React from "react";
const ProductId = ({ params }) => {
  const { productData, loading } = useData();
  //   console.log(productData.productTypes, "id");
  const {productId,query} = params
  // console.log(params)
  return (
    <div className="">
      {/* {productId} */}
      {/* {query} */}
      {loading
        ? "loading..."
        : productData.productTypes.map((type) =>
            type.product_name_id == params.productId ? (
              <div className="">
                <span className="flex flex-col text-xl ">{type.product_types}</span>
                <div className="grid xl:grid-cols-3 grid-cols-2 gap-3">
                  {productData.productSubTypes.map((subType) =>
                    type.product_type_id === subType.product_type_id ? (
                      <ProductCard
                        keyId={subType.product_sub_type_id}
                        name={subType.product_sub_type_name}
                        href={`/pages/products/${params.productId}/productdetails/${subType.product_sub_type_id}`}
                      />
                    ) : null
                  )}
                </div>
              </div>
            ) : null
          )}
    </div>
  );
};

export default ProductId;
