import React, { useState, useEffect, useRef } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";
import axios from "axios";
import LineLoading from "../Loader/LineLoading";
import Loading from "../Loader/Loading";
import { mainProducts, productTypes } from "@/staticdata/static";

const SidebarProduct = ({ productData }) => {
  // Destructuring ProductData
  const { mainCategory, subCategory } = productData;
  const [productsData, setProductsData] = useState({
    subCategory: productTypes,
    mainCategory: mainProducts,
  });
  const [isLoading, setIsLoading] = useState(true);
  const [expandedProductIds, setExpandedProductIds] = useState([]);
  const [spanStyle, setSpanStyle] = useState(false);
  // useEffect(() => {
  //   if (subCategory) {
  //     setProductsData((prev) => ({
  //       ...prev,
  //       subCategory: subCategory,
  //     }));
  //   }
  //   if (mainCategory) {
  //     setProductsData((prev) => ({
  //       ...prev,
  //       mainCategory: mainCategory,
  //     }));
  //   }

  //   console.log("useffect",productsData);
  // }, [subCategory, mainCategory]);

  const handleFilter = useRef(false);
  async function handleMainDropdown(params, id) {
    const selectedProduct = productsData.mainCategory.find(
      (product) => product.product_id === id
    );

    if (selectedProduct && selectedProduct.subProducts !== undefined) {
      if (expandedProductIds.includes(id)) {
        setExpandedProductIds(expandedProductIds.filter((pid) => pid !== id));
        setSpanStyle((prev) => ({ ...prev, [id]: false }));
      } else {
        setExpandedProductIds([...expandedProductIds, id]);
        setSpanStyle((prev) => ({ ...prev, [id]: true }));
      }
      return;
    }
    try {
      productsData.subCategory.filter((product) =>
        product.product_type_id === id
          ? product.subProducts !== undefined
            ? (handleFilter.current = true)
            : (handleFilter.current = false)
          : ""
      );
      // console.log(handleFilter.current, "current useRef");
      if (!handleFilter.current) {
        setExpandedProductIds((prevId) => [...prevId, id]);
        const response = await axios(
          `${process.env.NEXT_PUBLIC_FRONTEND_URL}/api/fetchSubCategoryType`,
          {
            params: {
              id: params,
              data: "main",
            },
          }
        );
        const res = await response;
        // console.log(res, "new fetch here");
        setProductsData((prev) => ({
          ...prev,
          mainCategory: prev.mainCategory.map((product) =>
            product.product_id === id
              ? { ...product, subProducts: res.data }
              : product
          ),
        }));

        setSpanStyle((prev) => ({ ...prev, [id]: true }));
      } else {
        console.log("already exist ");
      }
    } catch (err) {
      console.log(err);
    }
  }
  // function for dropdown which doesn't have subType
  async function handleSubTypeDropDown(params, id) {
    // console.log(params, id, "id here");
    const selectedProduct = productsData.subCategory.find(
      (product) => product.product_type_id === id
    );

    if (selectedProduct && selectedProduct.subProducts !== undefined) {
      if (expandedProductIds.includes(id)) {
        setExpandedProductIds(expandedProductIds.filter((pid) => pid !== id));
        setSpanStyle((prev) => ({ ...prev, [id]: false }));
      } else {
        setExpandedProductIds([...expandedProductIds, id]);
        setSpanStyle((prev) => ({ ...prev, [id]: true }));
      }
      return;
    }
    try {
      productsData.subCategory.filter((product) =>
        product.product_type_id === id
          ? product.subProducts !== undefined
            ? (handleFilter.current = true)
            : (handleFilter.current = false)
          : ""
      );
      // console.log(handleFilter.current, "current useRef");
      if (!handleFilter.current) {
        setExpandedProductIds((prevId) => [...prevId, id]);
        const response = await axios(
          `${process.env.NEXT_PUBLIC_FRONTEND_URL}/api/fetchSubCategoryType`,
          {
            params: {
              id: params,
              data: "sub",
            },
          }
        )
          .then((res) => {
            setProductsData((prev) => ({
              ...prev,
              subCategory: prev.subCategory.map((product) =>
                product.product_type_id === id
                  ? { ...product, subProducts: res.data }
                  : product
              ),
            }));
            setSpanStyle((prev) => ({ ...prev, [id]: true }));
          })
          .catch((err) => {
            console.log(err);
          });
        // const res = await response;
      } else {
        console.log("already exist ");
      }
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="sideBar:w-[250px] smallest:w-[300px]  select-none ">
      {
        productsData.mainCategory.map((item) => (
          <div className="bg-offwhite max-w-sm" key={item.product_id}>
            <Accordion
              type="single"
              collapsible
              className="px-[1rem]"
              key={item.product_id}
              onClick={
                item.product_types === "FALSE"
                  ? () =>
                      handleMainDropdown(item.product_name_id, item.product_id)
                  : undefined
              }
            >
              <AccordionItem
                value={`item-${item.product_id}`}
                key={item.product_id}
                className=" border-none"
              >
                <AccordionTrigger className="hover:no-underline border-none font-semibold text-[14px] text-newgold text-start">
                  {item.product_name}
                </AccordionTrigger>
                <AccordionContent className="pb-0">
                  {productsData.subCategory
                    .filter((type) => type.product_id === item.product_id)
                    .map((type, index) => (
                      <section className="relative" key={index}>
                        <div
                          style={{
                            marginBottom: "10px",
                            display: "flex",
                            alignItems: "flex-start",
                          }}
                        >
                          <span
                            style={{
                              cursor: "pointer",
                              color: "white",
                              padding: "2px 6px",
                              marginRight: "4px",
                              borderRadius: "2px",
                              display: "inline-block",
                              flexShrink: 0,
                            }}
                            className="bg-newgold "
                            onClick={() =>
                              handleSubTypeDropDown(
                                type.product_type_id,
                                type.product_type_id
                              )
                            }
                          >
                            {expandedProductIds.includes(type.product_type_id)
                              ? "-"
                              : "+"}
                          </span>
                          <span
                            className="font-medium cursor-pointer"
                            style={{
                              display: "inline-block",
                              verticalAlign: "middle",
                              marginLeft: "5px",
                            }}
                            onClick={() =>
                              handleSubTypeDropDown(
                                type.product_type_id,
                                type.product_type_id
                              )
                            }
                          >
                            {type.product_types !== undefined
                              ? type.product_types
                              : item.product_name}
                          </span>
                        </div>

                        {expandedProductIds.includes(type.product_type_id) &&
                          (type?.subProducts ? (
                            type?.subProducts?.map((subProduct) => (
                              <div
                                className={`py-2 border-b border-[#C89F23]  `}
                                style={
                                  {
                                    // paddingLeft: "20px",
                                  }
                                }
                                key={subProduct.product_sub_types_id}
                              >
                                {/* <span> {subProduct.product_sub_types} </span> */}
                                <Link
                                  title={subProduct.product_sub_types}
                                  href={`/products/${item.product_name_id}/${subProduct.product_sub_types_id}`}
                                  className="text-[12px] text-[#] font-medium p-0 "
                                >
                                  {subProduct.product_sub_types}
                                </Link>
                              </div>
                            ))
                          ) : (
                            <LineLoading />
                          ))}
                      </section>
                    ))}

                  {productsData.subCategory.filter(
                    (type) => type.product_id === item.product_id
                  ).length === 0 && (
                    <section className="relative" key={item.product_id}>
                      {expandedProductIds.includes(item.product_id) &&
                        (item.subProducts ? (
                          item.subProducts.map((subProduct) => (
                            <div
                              className={`py-2 border-b border-[#C89F23]  
                                `}
                              style={
                                {
                                  // paddingLeft: "20px",
                                }
                              }
                              key={subProduct.product_sub_types_id}
                              onClick={(e) => {
                                e.preventDefault();
                                e.stopPropagation();
                              }}
                            >
                              <Link
                                className="text-[12px] text-[#] font-medium "
                                title={subProduct.product_sub_types}
                                href={`/products/${item.product_name_id}/${subProduct.product_sub_types_id}`}
                              >
                                {subProduct.product_sub_types}
                              </Link>
                            </div>
                          ))
                        ) : (
                          <LineLoading />
                        ))}
                    </section>
                  )}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        ))

        /* )} */
      }
    </div>
  );
};

export default React.memo(SidebarProduct);
