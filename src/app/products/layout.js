"use client";
import SidebarProduct from "@/custom_components/product-ui/SideBar";
import React, { useState } from "react";

import { useData } from "@/app/contextapi/contextData";
export default function Layout({ children }) {
  // Destructuring Context Data from contextData.js
  const { productData, loading } = useData();
  // function testFunc() {
  //   console.log(productData);
  // }
  return (
    <div className="my-10 mx-14  space-x-14 flex min-h-[100vh] ">
      <SidebarProduct productData={productData} loading={loading} />
      {children}
    </div>
  );
}
