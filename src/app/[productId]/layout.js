"use client";
import SidebarProduct from "@/custom_components/product-ui/SideBar";
import React, { useState } from "react";

import { useData } from "@/app/contextapi/contextData";
import { mainProducts, productTypes } from "@/staticdata/static";
export default function Layout({ children }) {
  // Destructuring Context Data from contextData.js
  // const { productData, loading } = useData();
  // function testFunc() {
  //   console.log(productData);
  // }
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavigation = () => {
    setIsOpen(!isOpen);
  };
  const productData = {
    mainCategory:mainProducts,
    subCategory:productTypes
  }
  return (
    <div className="my-5 mx-3 small:mx-14 relative space-x-6  flex ">
      <div className="md:hidden ">
        <button onClick={toggleNavigation}>
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          )}
        </button>
      </div>

      {isOpen && (
        <div className="flex flex-col  md:hidden  py-6   absolute z-10 w-full h-full top-0 left-0">
          <SidebarProduct productData={productData} />
        </div>
      )}

      <div className="max-md:hidden">
        <SidebarProduct productData={productData} />
      </div>

      {children}
    </div>
  );
}
