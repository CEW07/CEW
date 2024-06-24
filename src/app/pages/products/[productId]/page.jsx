"use client";
import { useData } from "@/app/contextapi/contextData";
import ProductCard from "@/app/custom_components/product-ui/ProductCard";
import axios from "axios";
import React, { useEffect, useState } from "react";
const ProductId = ({ params }) => {
  const { productData, loading } = useData();
  //   console.log(productData.productTypes, "id");
  const { productId, query } = params;
  console.log(productData.subCategory);
  const [subCategoryAll, setSubCategoryAll] = useState();
  useEffect(() => {
    axios("http://localhost:3000/api/fetchSubCategoryTypeAll")
      .then((res) => {
        setSubCategoryAll(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    if (subCategoryAll) {
      console.log(subCategoryAll[105], "all here");
    }
  }, [subCategoryAll]);

  return (
    <div className="">
      {/* {productId} */}
      {/* {query} */}
      {loading
        ? "loading..."
        : productData.subCategory.map((type) =>
            type.product_id == params.productId ? (
              <div className="">
                <span className="flex flex-col text-xl ">
                  {type.product_types}
                </span>
                <div className="grid xl:grid-cols-3 grid-cols-2 gap-3">
                  {subCategoryAll &&
                    subCategoryAll
                      .filter(
                        (filteredData) =>
                          filteredData.product_type_id === type.product_type_id
                      )
                      .map((data) => (
                        <ProductCard
                          keyId={data.product_type_id}
                          name={data.product_sub_types}
                          href={`/pages/products/${productId}/productdetails/${data.product_sub_types_id}`}
                        />
                      ))}
                  {/* {productData.subCategory.map((subType) =>
                    type.product_id === subType.product_id ? (
                      <ProductCard
                        keyId={subType.product_type_id}
                        name={subType.product_types}
                        href={`/pages/products/${params.productId}/productdetails/${subType.product_type_id}`}
                      />
                    ) : null
                  )} */}
                </div>
              </div>
            ) : null
          )}
    </div>
  );
};

export default ProductId;
