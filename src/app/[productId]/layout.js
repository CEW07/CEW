"use client";
import SidebarProduct from "@/custom_components/product-ui/SideBar";
import React, { useEffect, useState, useRef } from "react";
import { mainProducts, productTypes } from "@/staticdata/static";

export default function Layout({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const sidebarRef = useRef(null);

  const toggleNavigation = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  const productData = {
    mainCategory: mainProducts,
    subCategory: productTypes,
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div>
      <div className="mt-5 mx-5 sm:hidden relative z-20">
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
            <img src="/assets/icons/CandyBox-1.svg" alt="HamBurger" className="w-6" />
          )}
        </button>
      </div>

      <div className="my-5 relative md:space-x-6 max-md:px-4 max-md:flex-col flex justify-center">
        <div className="flex justify-center md:space-x-6 max-md:px-4 max-md:flex-col max-w-[74rem]">
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
                <img src="/assets/icons/CandyBox-1.svg" alt="HamBurger" className="w-6" />
              )}
            </button>
          </div>

        
          {isOpen && (
            <div className=" inset-0 z-10" onClick={handleClickOutside}>
                <div className="fixed inset-0 bg-black opacity-50 z-10"></div>
              <div
                ref={sidebarRef}
                className="flex flex-col md:hidden py-6 absolute top-0 left-0  z-10"
                onClick={(e) => e.stopPropagation()}
              >
                <SidebarProduct productData={productData} />
              </div>
            </div>
          )}

          <div className="max-md:hidden min-w-96">
            {SidebarProduct ? <SidebarProduct productData={productData} /> : "Loading"}
          </div>

          {children}
        </div>
      </div>
    </div>
  );
}
