import React, { useState, useEffect, useRef } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { products } from "@/staticdata/static";
import Link from "next/link";
import axios from "axios";

const SidebarProduct = ({ productData }) => {
  // Destructuring ProductData
  const { mainCategory, subCategory } = productData;
  const [productsData, setProductsData] = useState({
    subCategory: [],
    mainCategory: [],
  });
  const [isLoading, setIsLoading] = useState(true);
  const [expandedProductIds, setExpandedProductIds] = useState([]);
  const [spanStyle, setSpanStyle] = useState(false);

  useEffect(() => {
    if (subCategory) {
      setProductsData((prev) => ({
        ...prev,
        subCategory: subCategory,
      }));
      setIsLoading(false);
      console.log("in sub ");
    }
    if (mainCategory) {
      setProductsData((prev) => ({
        ...prev,
        mainCategory: mainCategory,
      }));
      console.log("in main");
      setIsLoading(false);
    }

    console.log("useffect", productData.subCategory);
  }, [subCategory, mainCategory]);

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
      console.log(handleFilter.current, "current useRef");
      if (!handleFilter.current) {
        const response = await axios(
          `${process.env.FRONTEND_URL}/api/fetchSubCategoryType`,
          {
            params:{
              id:params,
              data:'main'
            }
          }
        );
        const res = await response;
        console.log(res, "new fetch here");
        setProductsData((prev) => ({
          ...prev,
          mainCategory: prev.mainCategory.map((product) =>
            product.product_id === id
              ? { ...product, subProducts: res.data }
              : product
          ),
        }));

        setExpandedProductIds((prevId) => [...prevId, id]);
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
    console.log(params, id, "id here");
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
      console.log(handleFilter.current, "current useRef");
      if (!handleFilter.current) {
        const response = await axios(
          `${process.env.FRONTEND_URL}/api/fetchSubCategoryType`,
          {
            params:{
              id:params,
              data:"sub"
            }
          }
        );
        const res = await response
        console.log(res, "new fetch here");
        setProductsData((prev) => ({
          ...prev,
          subCategory: prev.subCategory.map((product) =>
            product.product_type_id === id
              ? { ...product, subProducts: res.data }
              : product
          ),
        }));
        setExpandedProductIds((prevId) => [...prevId, id]);
        setSpanStyle((prev) => ({ ...prev, [id]: true }));
      } else {
        console.log("already exist ");
      }
    } catch (err) {
      console.log(err);
    }
  }
  useEffect(() => {
    console.log(expandedProductIds);
    console.log(productsData);
  }, [expandedProductIds, productsData]);

  return (
    <div>
      {
        isLoading ? (
          <p>Loading...</p>
        ) : (
          productsData?.mainCategory.map((item) => (
            <div className="bg-offwhite max-w-sm" key={item.product_id}>
              <Accordion
                type="single"
                collapsible
                className="py-2 px-10"
                key={item.product_id}
                onClick={
                  item.product_types === "FALSE"
                    ? () =>
                        handleMainDropdown(
                          item.product_name_id,
                          item.product_id
                        )
                    : undefined
                }
              >
                <AccordionItem
                  value={`item-${item.product_id}`}
                  key={item.product_id}
                >
                  <AccordionTrigger className="hover:no-underline text-newgold text-start">
                    {item.product_name}
                  </AccordionTrigger>
                  <AccordionContent>
                    {productsData.subCategory
                      .filter((type) => type.product_id === item.product_id)
                      .map((type, index) => (
                        <React.Fragment key={type.product_type_id}>
                          <div
                            style={{
                              marginBottom: "20px",
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
                              className="text-red-700 "
                              style={{
                                display: "inline-block",
                                verticalAlign: "middle",
                                marginLeft: "5px",
                              }}
                            >
                              {type.product_types !== undefined
                                ? type.product_types
                                : item.product_name}{" "}
                            </span>
                          </div>
                          {expandedProductIds.includes(type.product_type_id) &&
                            type?.subProducts &&
                            type?.subProducts?.map((subProduct) => (
                              <div
                                className={`text-blue-800 underline decoration-slate-300 underline-offset-4 ${
                                  spanStyle ? " mb-5" : ""
                                }`}
                                style={{
                                  paddingLeft: "20px",
                                }}
                                key={subProduct.product_sub_types_id}
                              >
                                {/* <span> {subProduct.product_sub_types} </span> */}
                                <Link
                                  title={subProduct.product_sub_types}
                                  href={`/${item.product_name_id}/${subProduct.product_sub_types_id}`}
                                >
                                  {subProduct.product_sub_types}
                                </Link>
                              </div>
                            ))}
                        </React.Fragment>
                      ))}

                    {productsData.subCategory.filter(
                      (type) => type.product_id === item.product_id
                    ).length === 0 && (
                      <React.Fragment key={item.product_id}>
                        {expandedProductIds.includes(item.product_id) &&
                          item.subProducts &&
                          item.subProducts.map((subProduct) => (
                            <div
                              className={`underline decoration-slate-300 underline-offset-4 ${
                                spanStyle ? " mb-5" : ""
                              }`}
                              style={{
                                paddingLeft: "20px",
                              }}
                              key={subProduct.product_sub_types_id}
                            >
                              <Link
                                className=""
                                title={subProduct.product_sub_types}
                                href={`/${item.product_name_id}/${subProduct.product_sub_types_id}`}
                              >
                                {subProduct.product_sub_types}
                              </Link>
                            </div>
                          ))}
                      </React.Fragment>
                    )}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          ))
        )

        /* )} */
      }
    </div>
  );
};

export default React.memo(SidebarProduct);

{
  /* <AccordionContent className="text-[12px]" key={item.product_type_id} >
{item.product_name_id === type.product_name_id
  ? type.product_types
  : "data here" +item.product_type_id }
</AccordionContent> */
}
