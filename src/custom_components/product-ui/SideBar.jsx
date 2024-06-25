import React, { useState, useEffect, useRef } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { products } from "@/staticdata/static";
import Link from "next/link";

const SidebarProduct = ({ productData }) => {
  // Destructuring ProductData
  const { mainCategory, subCategory } = productData;
  const [productsData, setProductsData] = useState({
    subCategory: [],
    mainCategory: [],
  });
  const [isLoading, setIsLoading] = useState(true)
  const [expandedProductIds, setExpandedProductIds] = useState([]);
  
  useEffect(() => {
    if (subCategory) {
      setProductsData((prev) => ({
        ...prev,
        subCategory: subCategory,
      }));
      setIsLoading(false)
      console.log('in sub ');
    } 
    if (mainCategory) {
      setProductsData((prev) => ({
        ...prev,
        mainCategory: mainCategory,
      }));
      console.log('in main');
      setIsLoading(false)
    }

    console.log('useffect',productData.subCategory);
  }, [subCategory, mainCategory]);

  const handleFilter = useRef(false);
  async function handleMainDropdown(id, params) {
    const selectedProduct = productsData.mainCategory.find(
      (product) => product.product_id === id
    );

    if (selectedProduct && selectedProduct.subProducts !== undefined) {
      if (expandedProductIds.includes(id)) {
        setExpandedProductIds(expandedProductIds.filter((pid) => pid !== id));
      } else {
        setExpandedProductIds([...expandedProductIds, id]);
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
        const response = await fetch(
          `http://localhost:3000/api/fetchSubCategoryType?id=${id}`
        );
        const res = await response.json();
        console.log(res, "new fetch here");
        setProductsData((prev) => ({
          ...prev,
          mainCategory: prev.mainCategory.map((product) =>
            product.product_id === id
              ? { ...product, subProducts: res }
              : product
          ),
        }));

        setExpandedProductIds((prevId) => [...prevId, id]);
      } else {
        console.log("already exist ");
      }
    } catch (err) {
      console.log(err);
    }
  }
  // function for dropdown which doesn't have subType
  async function handleSubTypeDropDown(id) {
    const selectedProduct = productsData.subCategory.find(
      (product) => product.product_type_id === id
    );

    if (selectedProduct && selectedProduct.subProducts !== undefined) {
      if (expandedProductIds.includes(id)) {
        setExpandedProductIds(expandedProductIds.filter((pid) => pid !== id));
      } else {
        setExpandedProductIds([...expandedProductIds, id]);
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
        const response = await fetch(
          `http://localhost:3000/api/fetchSubCategoryType?id=${id}`
        );
        const res = await response.json();
        console.log(res, "new fetch here");
        setProductsData((prev) => ({
          ...prev,
          subCategory: prev.subCategory.map((product) =>
            product.product_type_id === id
              ? { ...product, subProducts: res }
              : product
          ),
        }));
        setExpandedProductIds((prevId) => [...prevId, id]);
      } else {
        console.log("already exist ");
      }
    } catch (err) {
      console.log(err);
    }
  }
  useEffect(() => {
    console.log(expandedProductIds);
  }, [expandedProductIds]);

  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
          productsData?.mainCategory.map((item) => (
            <div className="bg-offwhite" key={item.product_id}>
              <Accordion
                type="single"
                collapsible
                className="py-2 px-10"
                key={item.product_id}
              >
                <AccordionItem
                  value={`item-${item.product_id}`}
                  key={item.product_id}
                >
                  <AccordionTrigger className="hover:no-underline text-newgold">
                    {item.product_name}
                  </AccordionTrigger>
                  <AccordionContent>
                    {productsData.subCategory
                      .filter((type) => type.product_id === item.product_id)
                      .map((type, index) => (
                        <React.Fragment key={type.product_type_id}>
                          <br />
                          <span
                            style={{
                              cursor: "pointer",
                              color: "white",
                              padding: "10px",
                            }}
                            className="bg-newgold"
                            onClick={() =>
                              handleSubTypeDropDown(type.product_type_id)
                            }
                          >
                            {expandedProductIds.includes(type.product_type_id)
                              ? "-"
                              : "+"}
                          </span>
                          <span>
                            {type.product_types !== undefined
                              ? type.product_types
                              : item.product_name}{" "}
                          </span>
                          {expandedProductIds.includes(type.product_type_id) &&
                            type.subProducts &&
                            type.subProducts.map((subProduct) => (
                              <div key={subProduct.product_sub_types_id}>
                                {/* <span> {subProduct.product_sub_types} </span> */}
                              <Link className="" title={subProduct.product_sub_types} href={`/products/productdetails/${subProduct.product_sub_types_id}`}>{subProduct.product_sub_types}</Link>
                              </div>
                            ))}
                        </React.Fragment>
                      ))}
                    {productsData.subCategory.filter(
                      (type) => type.product_id === item.product_id
                    ).length === 0 && (
                      <React.Fragment key={item.product_id}>
                        <br />
                        <span
                          style={{
                            cursor: "pointer",
                            color: "white",
                            padding: "10px",
                          }}
                          className="bg-newgold"
                          onClick={() => handleMainDropdown(item.product_id)}
                        >
                          {expandedProductIds.includes(item.product_id)
                            ? "-"
                            : "+"}
                        </span>
                        <span>{item.product_name}</span>
                        {expandedProductIds.includes(item.product_id) &&
                          item.subProducts &&
                          item.subProducts.map((subProduct) => (
                            <div key={subProduct.product_sub_types_id}>
                              {/* <span> {subProduct.product_sub_types} </span> */}
                              <Link className="" title={subProduct.product_sub_types} href={`/products/productdetails/${subProduct.product_sub_types_id}`}>{subProduct.product_sub_types}</Link>
                            </div>
                          ))}
                      </React.Fragment>
                    )}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          )))
      
      /* )} */}
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
