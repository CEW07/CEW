"use client";
import SidebarProduct from "@/custom_components/product-ui/SideBar";
import React, { useEffect, useState, useRef } from "react";
import { mainProducts, productTypes } from "@/staticdata/static";
import Head from "next/head";

export default function Layout({ children,props }) {
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
  console.log(children.props,'assssssssssssssssssssssssss');
  console.log(props,'fsdddddddddddddddddddddddddddddddddd');
  
  return (
    <div className="">
    {children}
    </div>
  );
}
