"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { usePathname } from "next/navigation";
import Loading from "../Loader/Loading";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import { mainProducts } from "@/staticdata/static";

const Navbar = () => {
  const [isOpenMenu, setisOpenMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchClicked, setIsSearchClicked] = useState(false);
  // const [isSearchFocus, setIsSearchFocus] = useState(false);
  const [isSearchData, setIsSearchData] = useState(false);
  const [searchData, setSearchData] = useState({
    searchMainProducts: [],
    searchSubTypes: [],
  });
  const [loading, setLoading] = useState(false);
  const searchInputRef = useRef(null);
  const searchListRef = useRef(null);
  const navBarRef = useRef(null);
  const clickOriginRef = useRef(false);
  const [searchBarText, setSearchBarText] = useState("");
  const handleClickOutside = (event) => {
    if (navBarRef.current && !navBarRef.current.contains(event.target)) {
      setisOpenMenu(false);
    }
  };

  useEffect(() => {
    if (isOpenMenu) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpenMenu]);

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
      if (
        !clickOriginRef.current &&
        searchInputRef.current &&
        !searchInputRef.current.contains(event.target) &&
        searchListRef.current &&
        !searchListRef.current.contains(event.target)
      ) {
        setIsSearchData(false);
        // setTimeout(() => {
          //   setIsSearchData(false);
          // }, 150);
        }
        clickOriginRef.current = false;
    };

    if (isSearchData) {
      document.addEventListener("mousedown", handleClickOutsideSearch);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutsideSearch);
    };
  }, [isSearchData]);

  const toggleMenu = () => {
    setisOpenMenu(!isOpenMenu);
  };

  const toggleSearch = () => {
    setIsSearchClicked(!isSearchClicked);
  };

  const handleInputFocus = () => {
    console.log("Input focused");
  };

  let timeoutFunc;

  const handleSearchInput = (e) => {
    const text = e.target.value;
    if (!isSearchData) {
      setIsSearchData(true);
    }
    clearTimeout(timeoutFunc);
    if (text.length > 0) {
      timeoutFunc = setTimeout(() => {
        fetchSearchQuery(text);
      }, 1100);
    }

    if (text.length === 0) {
      // setSearchBarText("Search products !!");
      console.log("sdddddddddddd");
    }
  };

  const fetchSearchQuery = async (searchText) => {
    setLoading(true);
    const newArr = mainProducts.filter((item) =>
      item.product_name.toLocaleLowerCase().includes(searchText)
    );
    if (newArr.length > 0) {
      setSearchData((prev) => ({
        ...prev,
        searchMainProducts: newArr,
      }));
    } else {
      setSearchData((prev) => ({
        ...prev,
        searchMainProducts: [],
      }));
    }
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
            setSearchData((prev) => ({
              ...prev,
              searchSubTypes: [],
            }));
          } else {
            setSearchData((prev) => ({
              ...prev,
              searchSubTypes: res?.data,
            }));
          }
        })
        .catch((err) => {
          // setSearchData(["No products available with this name"]);
        });
    } catch (err) {
      console.log("Error while fetching data: ", err);
    } finally {
      setLoading(false);
      // if (
      //   searchData.searchMainProducts.length === 0 &&
      //   searchData.searchSubTypes.length === 0
      // ) {
      //   setSearchBarText("No Products Found");
      // }
    }
  };

  const pathname = usePathname();
  const styles = {
    position: "fixed",
    right: isOpenMenu ? 0 : "-100%",
    transition: "right 0.5s ease-in-out",
    zIndex: "50",
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
  const handleMouseDownInside = () => {
    clickOriginRef.current = true;
  };
  return (
    <main
      className={`w-full sticky top-0  z-30 bg-offwhite transition-all duration-200 ${
        isScrolled ? "-top-1" : "lg:pt-0 pt-18"
      } lg:border-b-2 lg:border-newgold`}
    >
      <section className="">
        <div
          className={`transition-all max-smallest:px-5 smallest:max-sm:px-10 max-xl:px-20 duration-500 flex justify-center  ${
            isScrolled ? "h-0 opacity-0 " : "h-[8vh] opacity-100"
          } max-lg:hidden lg:flex`}
        >
          <div className="py-6 flex justify-between items-center font-medium max-w-[74rem] w-full  relative">
            <div className=" items-center flex justify-evenly mx-3 gap-6">
              <div>
                <div className="flex flex-row items-center gap-2">
                  <FaPhoneAlt color="#C89F23" className="text-[18px]" />
                  <p className="m-0 text-[14px] font-medium flex flex-col ">
                  <Link href='tel:+9820382786' className="m-0 text-[14px]  font-medium border-b border-newgold">+91 9820382786</Link>
                  <Link href='tel:+9820786752' className="m-0 text-[14px]  font-medium">+91 9820786752</Link>
                  </p>
                </div>
              </div>
              <Link
                href="https://mail.google.com/mail/?view=cm&fs=1&to=cewtech2024@gmail.com"
                target="_blank"
              >
                <div className="flex flex-row items-center gap-2">
                  <MdOutlineMarkEmailRead
                    color="#C89F23"
                    className="text-[24px]"
                  />
                  <p className="m-0 text-[14px]  font-medium ">
                    cewtech2024@gmail.com
                  </p>
                </div>
              </Link>
            </div>

            <div className=" flex items-center lg:flex lg:border lg:border-newgold lg:rounded-md w-[41%] justify-end lg:bg-white">
              <input
                type="text"
                className="lg:w-full bg-transparent p-2 mr-2 lg:rounded-md focus:outline-none lg:flex max-lg:hidden "
                placeholder="Search Products"
                onFocus={handleInputFocus}
                onChange={handleSearchInput}
                // value={isSearchData}
                ref={searchInputRef}
              />
              <div
                className="  sm:h-12 sm:w-12 sm:mx-3 lg:h-10 flex justify-center items-center lg:mx-0 ml-4 h-8 w-8 mx-1 lg:bg-newgold cursor-pointer rounded-r-md"
                onClick={() => toggleSearch()}
              >
                <Search className="sm:h-8 sm:w-8 lg:h-6" />
              </div>
            </div>

            <div
              ref={searchListRef}
              onMouseDown={handleMouseDownInside}
              className={`${
                isSearchData ? "visible" : "hidden"
              }  absolute max-h-[300px] grid grid-row-1 overflow-y-auto bg-[#F4F3EE] top-[3.9rem] z-10 rounded-[20px] left-[59%]  font-semibold leading-6  lg:min-w-[41%] lg:rounded-md h-auto max-lg:hidden`}
            >
              <p>{searchBarText}</p>
              {searchData.searchMainProducts?.map((item, index) => (
                <Link
                  href={`/products/${item?.product_name_id}`}
                  className="flex flex-col text-[#C89F23] hover:text-[#F4F3EE] hover:bg-[#C89F23] border border-b-[#C89F23] text-[12px] p-[8px] "
                  key={index}
                  onClick={() => setIsSearchClicked(false)}
                >
                  {item?.product_name && item?.product_name.toUpperCase()}
                </Link>
              ))}
              {loading ? (
                <div className="text-center flex items-center justify-center p-1">
                  <Loading />{" "}
                </div>
              ) : (
                <>
                  {searchData.searchSubTypes?.map((item, index) => (
                    <Link
                      href={`/products${item?.post_url}`}
                      className="flex flex-col text-[#C89F23] hover:text-[#F4F3EE] hover:bg-[#C89F23] border border-b-[#C89F23] text-[12px] p-[8px] "
                      key={index}
                      onClick={() => setIsSearchClicked(false)}
                    >
                      {item?.product_subTypes_name
                        ? item?.product_subTypes_name
                        : item}
                    </Link>
                  ))}
                </>
              )}
            </div>
          </div>
        </div>

        <div
          className={` ${
            isScrolled ? `border-0` : "border-b-2 border-newgold"
          } max-lg:hidden lg:px-20`}
        ></div>
      </section>

      <section className="sticky top-0 flex items-center justify-center w-full flex-row lg:border-0 border-b-2 border-newgold">
        <div className="flex flex-row justify-center w-full max-w-screen-2xl ">
          <div className="flex items-center max-w-[74rem] w-full max-smallest:px-5 smallest:max-sm:px-10 max-xl:px-20 justify-between ">
            <div className="flex items-center max-smallest:w-[40%] lg:w-[22%] w-full h-full  justify-start">
              {isScrolled ? (
                <Link href="/">
                  <Image
                    alt="logo"
                    height={200}
                    width={200}
                    src="/assets/icons/shortIcon.png"
                    className="w-[100%] max-small:w-[80px] transition duration-400 ease-in-out small:max-md:w-[80px] md:w-[25%]"
                  />
                </Link>
              ) : (
                <Link href="/">
                  <Image
                    alt="logo"
                    height={200}
                    width={200}
                    src="/assets/icons/fullLogo.png"
                    className="w-[100%] max-small:w-[150px]  transition-all duration-500  small:max-lg:w-[150px] lg:w-[60%] my-3"
                  />
                </Link>
              )}
            </div>

            <div className="flex items-center flex-row justify-center h-full my-[1.2rem] relative ">
              <div className="font-medium text-newbrown max-lg:hidden lg:flex w-auto ml-4  justify-between items-center pb-2">
                {Links.map((item) => (
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

              <div className=" flex items-center lg:flex  lg:rounded-md w-auto justify-end lg:bg-white">
                <div
                  className="sm:h-12 sm:w-12 sm:mx-3 lg:h-10 flex justify-center items-center lg:mx-0 ml-4 h-8 w-8 mx-1 lg:hidden cursor-pointer rounded-r-md"
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
        {isSearchData && (
          <section
            className={`bg-[#F4F3EE] w-[70%] lg:rounded-md h-[auto] z-10 font-semibold leading-6 max-h-[300px] grid grid-row-1 overflow-y-auto  absolute top-11 lg:hidden ${
              isSearchClicked ? "right-[14%]" : "right-[100%]"
            }`}
            ref={searchListRef}
          >
            <p>{searchBarText}</p>
            {searchData.searchMainProducts?.map((item, index) => (
              <Link
                href={`/products/${item.product_name_id}`}
                className="flex flex-col text-[#C89F23] hover:text-[#F4F3EE] hover:bg-[#C89F23] border border-b-[#C89F23] text-[12px] p-[8px] "
                key={index}
                onClick={() => setIsSearchClicked(false)}
              >
                {item?.product_name && item?.product_name.toUpperCase()}
              </Link>
            ))}
            {loading ? (
              <div className="text-center flex items-center justify-center p-1">
                {" "}
                <Loading />{" "}
              </div>
            ) : (
              <>
                {searchData.searchSubTypes?.map((item, index) => (
                  <Link
                    href={`/products${item?.post_url}`}
                    className="flex flex-col text-[#C89F23] hover:text-[#F4F3EE] hover:bg-[#C89F23] border border-b-[#C89F23] text-[12px] p-[8px] "
                    key={index}
                    onClick={() => setIsSearchClicked(false)}
                  >
                    {item?.product_subTypes_name
                      ? item?.product_subTypes_name
                      : item}
                  </Link>
                ))}
              </>
            )}
            {}
            {/* {(searchData.searchMainProducts.length === 0  && searchData.searchSubTypes.length === 0) && (searchInputRef.current.value.length > 0 && <p className="border border-b-[#C89F23] text-[12px] p-[8px] ">"No product found !!"</p>)}
            {(searchData.searchMainProducts.length === 0  && searchData.searchSubTypes.length === 0) && (searchInputRef.current.value.length === 0 && <p className="border border-b-[#C89F23] text-[12px] p-[8px] ">"Search for products !!"</p>)} */}
          </section>
        )}
      </div>
      {isOpenMenu && (
        <div className="fixed inset-0 bg-black opacity-50 z-10"></div>
      )}
      <div
        className={`lg:hidden w-[70vw] top-0 small:w-[50vw]  h-[100vh] bg-offwhite flex flex-col relative items-center gap-10 sm:gap-8 py-5 transition-all duration-500`}
        style={styles}
        ref={navBarRef}
      >
        <div className="flex justify-end items-end w-full mr-10">
          <button onClick={() => toggleMenu()}>
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
          </button>
        </div>
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
