"use client";
import { useData } from "@/app/contextapi/contextData";
import ProductCard from "@/custom_components/product-ui/ProductCard";
import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
const ProductId = ({ params }) => {
  const { productData, loading } = useData();
  //   console.log(productData.productTypes, "id");
  const { productId, query } = params;
  console.log(productData.subCategory);
  const [subCategoryAll, setSubCategoryAll] = useState();
  useEffect(() => {
    axios(`http://localhost:3000/api/fetchSubCategoryTypeAll`)
      .then((res) => {
        setSubCategoryAll(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  // const productID = useRef()
  useEffect(() => {
    // productID.current = par
  }, [subCategoryAll]);

  return (
    <div className="">
      {loading
        ? "loading..."
        : productData.subCategory.map(
            (type) =>
              type.product_id == params.productId && (
                <div className="">
                  <span className="flex flex-col text-xl ">
                    {type.product_types}
                  </span>
                  <div className="grid xl:grid-cols-3 grid-cols-2 gap-3">
                    {subCategoryAll &&
                      subCategoryAll
                        .filter(
                          (filteredData) =>
                            filteredData.product_type_id ===
                            type.product_type_id
                        )
                        .map((data) => (
                          <ProductCard
                            keyId={data.product_type_id}
                            name={data.product_sub_types}
                            href={`/products/productdetails/${data.product_sub_types_id}`}
                          />
                        ))}
                  </div>
                </div>
              )
          )}
      {loading
        ? "loading...."
        : productData.mainCategory.map(
            (item) =>
              (item.product_types === 0 && item.product_id === parseInt(productId)) && (
                <div className="grid xl:grid-cols-3 grid-cols-2 gap-3">
                  {subCategoryAll &&
                    subCategoryAll.filter(
                        (filteredData) =>
                          filteredData.product_type_id === parseInt(productId) 
                      )
                      .map((data) => (
                        <ProductCard
                          keyId={data.product_type_id}
                          name={data.product_sub_types}
                          href={`/products/productdetails/${data.product_sub_types_id}`}
                        />
                      ))
                      }
                </div>
              )
          )}
    </div>
  );
};

export default ProductId;
