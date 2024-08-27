import React, { useState, useEffect, useRef } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";
import LineLoading from "../Loader/LineLoading";
import { mainProducts, productTypes } from "@/staticdata/static";
import { subproduct } from "@/staticdata/subproduct/subproduct";

const SidebarProduct = ({ productData }) => {
  // Destructuring ProductData
  const { mainCategory, subCategory } = productData;
  const [productsData, setProductsData] = useState({
    subCategory: productTypes,
    mainCategory: mainProducts,
  });
  const [expandedProductIds, setExpandedProductIds] = useState([]);
  const [spanStyle, setSpanStyle] = useState({});

  // Update state with provided data
  useEffect(() => {
    if (subCategory) {
      setProductsData((prev) => ({
        ...prev,
        subCategory: subCategory,
      }));
    }
    if (mainCategory) {
      setProductsData((prev) => ({
        ...prev,
        mainCategory: mainCategory,
      }));
    }
  }, [subCategory, mainCategory]);

  const handleMainDropdown = (id) => {
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

    const subProducts = subproduct.filter(
      (product) => product.product_type_id === id
    );

    setExpandedProductIds((prevId) => [...prevId, id]);
    setProductsData((prev) => ({
      ...prev,
      mainCategory: prev.mainCategory.map((product) =>
        product.product_id === id ? { ...product, subProducts } : product
      ),
    }));
    setSpanStyle((prev) => ({ ...prev, [id]: true }));
  };

  const handleSubTypeDropDown = (id) => {
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

    const subProducts = subproduct.filter(
      (product) => product.product_type_id === id
    );

    setExpandedProductIds((prevId) => [...prevId, id]);
    setProductsData((prev) => ({
      ...prev,
      subCategory: prev.subCategory.map((product) =>
        product.product_type_id === id ? { ...product, subProducts } : product
      ),
    }));
    setSpanStyle((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <div className="sideBar:w-[250px] smallest:w-[300px] select-none">
      {productsData.mainCategory.map((item) => (
        <div className="bg-offwhite max-w-sm" key={item.product_id}>
          <Accordion
            type="single"
            collapsible
            className="py-2 px-[1rem]"
            key={item.product_id}
            onClick={
              item.product_types === "FALSE"
                ? () => handleMainDropdown(item.product_id)
                : undefined
            }
          >
            <AccordionItem
              value={`item-${item.product_id}`}
              key={item.product_id}
              className="border-none"
            >
              <AccordionTrigger className="hover:no-underline border-none font-semibold text-[14px] text-newgold text-start">
                {item.product_name}
              </AccordionTrigger>
              <AccordionContent className="pb-0">
                {productsData.subCategory
                  .filter((type) => type.product_id === item.product_id)
                  .map((type) => (
                    <section className="relative" key={type.product_type_id}>
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
                            // display: "inline-block",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            flexShrink: 0,
                          }}
                          className="bg-newgold w-5"
                          onClick={() =>
                            handleSubTypeDropDown(type.product_type_id)
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
                            handleSubTypeDropDown(type.product_type_id)
                          }
                        >
                          {type.product_types || item.product_name}
                        </span>
                      </div>

                      {expandedProductIds.includes(type.product_type_id) &&
                        (type?.subProducts ? (
                          type.subProducts.map((subProduct) => (
                            <div
                              className={`pb-1 border-b border-[#C89F23] ${
                                spanStyle[type.product_type_id] ? "mb-4" : ""
                              }`}
                              key={subProduct.product_sub_types_id}
                            >
                              <Link
                                title={subProduct.product_sub_types}
                                href={`/products/${item.product_name_id}/${subProduct.product_sub_types_id}`}
                                className="text-[12px] text-[#] font-medium p-0"
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
                            className={`py-2 border-b border-[#C89F23] `}
                            key={subProduct.product_sub_types_id}
                            onClick={(e) => {
                              e.preventDefault();
                              e.stopPropagation();
                            }}
                          >
                            <Link
                              className="text-[12px] text-[#] font-medium"
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
      ))}
    </div>
  );
};

export default React.memo(SidebarProduct);
