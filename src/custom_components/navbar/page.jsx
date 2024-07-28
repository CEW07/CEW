"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { usePathname } from "next/navigation";
import Loading from "../Loader/Loading";

const Navbar = () => {
  const [isOpenMenu, setisOpenMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchClicked, setIsSearchClicked] = useState(false);
  const [isSearchFocus, setIsSearchFocus] = useState(false);
  const [searchData, setSearchData] = useState(["Search products here"]);
  const [loading, setLoading] = useState(false);
  const searchInputRef = useRef(null);
  const searchListRef = useRef(null);

  useEffect(() => {
    function handleScroll() {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      setIsScrolled(scrollTop > 0);
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutsideSearch = (event) => {
      console.log("Entering the Click");
      if (
        searchInputRef.current &&
        !searchInputRef.current.contains(event.target) &&
        searchListRef.current &&
        !searchListRef.current.contains(event.target)
      ) {
        console.log("Input false");
        setIsSearchFocus(false);
      }
    };

    if (isSearchFocus) {
      document.addEventListener("mousedown", handleClickOutsideSearch);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutsideSearch);
    };
  }, [isSearchFocus]);

  const toggleMenu = () => {
    setisOpenMenu(!isOpenMenu);
  };

  const toggleSearch = () => {
    setIsSearchClicked(!isSearchClicked);
  };

  const handleInputFocus = () => {
    console.log("Input focused");
    setIsSearchFocus(true);
  };

  let timeoutFunc;

  const handleSearchInput = (e) => {
    const text = e.target.value;
    clearTimeout(timeoutFunc);
    if (text.length > 0) {
      timeoutFunc = setTimeout(() => {
        fetchSearchQuery(text);
      }, 1100);
    }

    if (text.length === 0) {
      setSearchData(["Search products here"]);
    }
  };

  const fetchSearchQuery = async (searchText) => {
    setLoading(true);
    try {
      await axios(
        `${process.env.NEXT_PUBLIC_FRONTEND_URL}/api/fetchProductDetails`,
        {
          params: {
            id: searchText,
            data: "search",
          },
        }
      )
        .then((res) => {
          if (res?.data?.message) {
            setSearchData(["No products available with this name"]);
          } else {
            setSearchData(res.data);
          }
        })
        .catch((err) => {
          setSearchData(["No products available with this name"]);
        });
    } catch (err) {
      console.log("Error while fetching data: ", err);
    } finally {
      setLoading(false);
    }
  };

  const pathname = usePathname();
  const styles = {
    position: "fixed",
    right: isOpenMenu ? 0 : "-100%",
    transition: "right 0.5s ease-in-out",
  };

  const Links = [
    { name: "Home", href: "/", index: "1" },
    { name: "Products", href: "/products", index: "2" },
    { name: "Services", href: "/services", index: "3" },
    { name: "Industries", href: "/industries", index: "4" },
    { name: "Quality", href: "/quality", index: "5" },
    { name: "About Us", href: "/about", index: "6" },
    { name: "Contact", href: "/contact", index: "7" },
  ];

  return (
    <main
      className={`w-full sticky top-0  z-30 bg-offwhite transition-all duration-500 ${
        isScrolled ? "-top-1" : "lg:pt-0 pt-18"
      } lg:border-b-2 lg:border-newgold`}
    >
      <section className="w-full">
        <div
          className={`transition-all duration-500 ${
            isScrolled ? "h-0 opacity-0" : "h-[8vh] opacity-100"
          } max-lg:hidden lg:flex`}
        >
          <div className="w-full flex justify-between items-center font-medium border-b-2 border-newgold lg:px-20">
            <div className=" items-center flex justify-evenly mx-3 gap-6">
              <div className="flex flex-row items-center ">
                <Image
                  alt="logo"
                  height={300}
                  width={300}
                  src="/assets/icons/whatsapp-icon.svg"
                  className="sm:w-8 w-16"
                />
                <span className="text-green-700">Call on +91 1234567890</span>
              </div>
              <Button variant="goldbtn">Enquiry</Button>
            </div>
            <div className="">
              {Links.slice(4, 8).map((item) => (
                <Link
                  href={item.href}
                  className={`mx-4 ${
                    pathname === item.href ? "text-newgold" : ""
                  } hover:text-newgold`}
                  key={item.index}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="sticky top-0 flex items-center justify-center w-full flex-row lg:border-0 border-b-2 border-newgold">
        <div className="flex flex-row justify-center w-full max-w-screen-2xl px-4 lg:px-20">
          <div className="flex items-center gap-4 w-[100%] justify-between lg:w-[auto] lg:gap-[125px] xl:gap-[216px] pr-4">
            <div className="flex items-center max-smallest:w-[20%] lg:w-[22%] w-full h-full">
              <Image
                alt="logo"
                height={300}
                width={300}
                src="/assets/images/cew-logo.png"
                className="sm:w-20 w-16"
              />
              <span className="border border-newgold max-smallest:hidden lg:min-w-[40px] mr-2 lg:mx-2 w-[20px] transform rotate-90"></span>
              <div className="flex flex-col w-full max-smallest:hidden">
                <button className="flex flex-col">
                  <span className="text-center font-semibold sm:text-xl sm:tracking-[1.1rem] tracking-[0.6rem]">
                    CROWN
                  </span>
                  <span className="sm:text-sm text-[0.6rem] ">
                    ENGINEERING WORKS
                  </span>
                </button>
              </div>
            </div>

            <div className="flex items-center flex-row justify-center h-full my-[1.2rem] relative">
              <div className="font-medium text-newbrown max-lg:hidden lg:flex w-auto ml-4 mr-10 justify-between items-center pb-2">
                {Links.slice(0, 4).map((item) => (
                  <Link
                    href={item.href}
                    className={`${
                      pathname === item.href ? "text-newgold" : ""
                    } hover:text-newgold text-center text-[1rem] mx-2`}
                    key={item.index}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>

              <div className=" flex items-center lg:flex lg:border lg:border-newgold lg:rounded-md w-auto justify-end lg:bg-white">
                <input
                  type="text"
                  className="lg:w-full bg-transparent p-2 mr-2 lg:rounded-md focus:outline-none lg:flex max-lg:hidden "
                  placeholder="Search Products"
                  onFocus={handleInputFocus}
                  onChange={handleSearchInput}
                  ref={searchInputRef}
                />
                <div
                  className="sm:h-12 sm:w-12 sm:mx-3 lg:h-10 flex justify-center items-center lg:mx-0 ml-4 h-8 w-8 mx-1 lg:bg-newgold cursor-pointer rounded-r-md"
                  onClick={() => toggleSearch()}
                >
                  <Search className="sm:h-8 sm:w-8 lg:h-6" />
                </div>
                <div
                  onClick={() => toggleMenu()}
                  className="h-8 mx-4 lg:hidden p-1 sm:h-12 sm:w-12 sm:mx-3 flex justify-center items-center"
                >
                  <Menu className="h-6 w-6 sm:h-8 sm:w-8" />
                </div>
              </div>
                  
              {isSearchFocus && (
                <div
                  ref={searchListRef}
                  className="absolute bg-[#F4F3EE] top-[3.9rem] rounded-[20px] left-[59%]  font-semibold leading-6  lg:min-w-[41%] lg:rounded-md h-auto max-lg:hidden"
                >
                  {loading ? (
                    <div className="text-center flex items-center justify-center p-1">
                      <Loading />{" "}
                    </div>
                  ) : (
                    searchData?.map((item, index) => (
                      <Link
                        href={`${item?.post_url}`}
                        className="flex flex-col text-[#C89F23] hover:text-[#F4F3EE] hover:bg-[#C89F23] border border-b-[#C89F23] text-[12px] p-[8px]"
                        key={index}
                      >
                        {item?.product_subTypes_name
                          ? item.product_subTypes_name
                          : item}
                      </Link>
                    ))
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

  

      <input
        type="text"
        className={`w-[70%]  bg-offwhite p-2 border  rounded-md focus:outline-none lg:hidden transition-all duration-500 absolute ${
          isSearchClicked ? "right-[14%]" : "right-[100%]"
        }`}
        onFocus={handleInputFocus}
        onChange={handleSearchInput}
        placeholder="Search Products"
        ref={searchInputRef}
      />
      <div className="relative">
        {isSearchFocus && (
          <section
            className={`bg-[#F4F3EE] w-[70%] lg:rounded-md h-[auto]  font-semibold leading-6  absolute top-11 lg:hidden ${
              isSearchClicked ? "right-[14%]" : "right-[100%]"
            }`}
            ref={searchListRef}
          >
            {loading ? (
              <div className="text-center flex items-center justify-center p-1">
                {" "}
                <Loading />{" "}
              </div>
            ) : (
              searchData?.map((item, index) => (
                <Link
                  href={`${item?.post_url}`}
                  className="flex flex-col text-[#C89F23] hover:text-[#F4F3EE] hover:bg-[#C89F23] border border-b-[#C89F23] text-[12px] p-[8px] "
                  key={index}
                  onClick={()=>setIsSearchClicked(false)}
                >
                  {item?.product_subTypes_name
                    ? item.product_subTypes_name
                    : item}
                </Link>
              ))
            )}
          </section>
        )}
      </div>
      <div
        className={`lg:hidden w-[70vw] small:w-[50vw] z-50 h-[100vh] bg-offwhite flex flex-col relative items-center gap-10 sm:gap-8 py-5 transition-all duration-500`}
        style={styles}
      >
        {Links.map((item) => (
          <Link
            href={item.href}
            className="mx-4 "
            onClick={() => toggleMenu()}
            key={item.index}
          >
            {item.name}
          </Link>
        ))}
      </div>
    </main>
  );
};

export default Navbar;
