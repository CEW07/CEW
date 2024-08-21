"use client";
import SidebarProduct from "@/custom_components/product-ui/SideBar";
import React, { useEffect, useState, useRef } from "react";
import { mainProducts, productTypes } from "@/staticdata/static";
import Head from "next/head";
import { useRouter } from "next/router";
import { usePathname } from "next/navigation";
import { FaAnglesRight } from "react-icons/fa6";
import Link from "next/link";

export default function Layout({ children, props }) {
  const [isOpen, setIsOpen] = useState(false);
  const sidebarRef = useRef(null);
  const router = usePathname();

  const toggleNavigation = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
      setIsOpen(false);
    }
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
  let routes = router.split("/");
  return (
    <div className="max-md:pt-10">
      <div className="flex max-lg:hidden  md:mt-0 mt-4 items-center text-[1rem] gap-[20px] mb-[20px]">
        <Link href={`/products/${routes[2]}`} className={`font-medium border-b-2 ${routes[3] === undefined && 'border-newgold'}`}>
          {routes[2]
            ?.replace(/-/g, " ")
            ?.toLowerCase()
            ?.replace(/\b\w/g, (char) => char.toUpperCase())}
        </Link>
        <FaAnglesRight className="text-newgold className='text-newgold font-semibold'" />
        <Link href={`/products/${routes[3]}`} className={`font-medium border-b-2 text-justify text-[0.9rem] ${routes[3] !== undefined && 'border-newgold'}`}>
          {routes[3]
            ?.replace(/-/g, " ").toUpperCase()}
        </Link>
      </div>
      {children}
    </div>
  );
}
