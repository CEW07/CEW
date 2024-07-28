"use client";
import SidebarProduct from "@/custom_components/product-ui/SideBar";
import React, { useState } from "react";

import { useData } from "@/app/contextapi/contextData";
import { mainProducts, productTypes } from "@/staticdata/static";
export default function Layout({ children }) {
  // Destructuring Context Data from contextData.js
  // const { productData, loading } = useData();
  const productData = {
    mainCategory: mainProducts,
    subCategory: productTypes,
  };
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavigation = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <div className=" mt-5 mx-5 sm:hidden relative z-20">
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
      <div className="max-sm:mb-5 sm:my-5  relative space-x-6  smallest:space-x-14 flex  justify-center">
        <div className="flex justify-center md:space-x-6 max-md:px-4 max-md:flex-col  max-w-[74rem]">
          <div className="max-sm:hidden md:hidden relative z-20">
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
          <>
            {isOpen && (
              <div className="fixed inset-0 bg-black opacity-50 z-10"></div>
            )}
            {isOpen && (
              <div className="flex flex-col  md:hidden  py-6   absolute z-10 w-full h-full top-0 left-6">
                <SidebarProduct productData={productData} />
              </div>
            )}
          </>

          <div className="max-md:hidden min-w-96">
            <SidebarProduct productData={productData} />
          </div>

          {children}
        </div>
      </div>
    </div>
  );
}
