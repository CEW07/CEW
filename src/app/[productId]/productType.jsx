"use client";
// import { useData } from "@/app/contextapi/contextData";
import ProductCard from "@/custom_components/product-ui/ProductCard";
import SideBar from "@/custom_components/product-ui/SideBar";
import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { useData } from "../contextapi/contextData";
import { useRouter } from "next/navigation";
import { mainProducts, productTypes } from "@/staticdata/static";
const ProductTypePage = ({ subCategory,params }) => {
  // const { productData, loading } = useData();
  const { productId, query } = params;
  const [subCategoryAll, setSubCategoryAll] = useState(subCategory);
  const router = useRouter();
  // console.log(subCategory,'sub category here');
  useEffect(() => {
    if(!subCategory){
      router.replace('/not-found')
    }
  }, [])
  return (
    <div className="">
      {productTypes.map(
            (type,index) =>
              type.product_name_id == params.productId && (
                <div className="" key={index}>
                  <span className="flex flex-col max-smallest:text-base smallest:text-xl mt-6 mb-3">
                    {type.product_types && type.product_types}
                  </span>
                  <div className="grid sm:max-md:grid-cols-2  mainProducts:grid-cols-2 xl:grid-cols-3 gap-6">
                    {subCategoryAll &&
                      subCategoryAll
                        .filter(
                          (filteredData) =>
                            filteredData.product_type_id ===
                            type.product_type_id
                        )
                        .map((data, index) => (
                          <div className="h-full">
                            <ProductCard
                              keyId={index}
                              name={data.product_sub_types}
                              href={`/${productId}/${data.product_sub_types_id}`}
                              imageSrc={data.ImageUrl}
                              imageAlt={data.product_type_name_id}
                              params="subproductImage"
                            />
                          </div>
                        ))}
                  </div>
                </div>
              )
      )}


      {mainProducts.map(
            (item,index) =>
              item.product_types === "FALSE" &&
              item.product_name_id === productId && (
                <div className="grid sm:max-md:grid-cols-2  mainProducts:grid-cols-2 xl:grid-cols-3 gap-6" key={index}>
                  {subCategoryAll &&
                    subCategoryAll
                      .filter(
                        (filteredData) =>
                          filteredData.product_type_name_id === productId
                      )
                      .map((data, index) => (
                        <ProductCard
                          keyId={index}
                          name={data.product_sub_types}
                          href={`/${productId}/${data.product_sub_types_id}`}
                          imageSrc={data.ImageUrl}
                          imageAlt={data.product_type_name_id}
                          params="subproductImage"
                        />
                      ))}
                </div>
              )
      )}

    </div>
  );
};

export default ProductTypePage;
