"use client";
import React, { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";

const Enquiry = () => {
  const [isOpen, setIsOpen] = useState(false);

  const formRef = useRef(null);

  const handleOpenClick = () => {
    setIsOpen(true);
  };

  const handleCloseClick = () => {
    setIsOpen(false);
  };

  const handleClickOutside = (event) => {
    if (formRef.current && !formRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.body.classList.add("no-scroll");
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.classList.remove("no-scroll");
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.classList.remove("no-scroll");
    };
  }, [isOpen]);

  useEffect(() => {
    console.log("Component mounted");
  }, []);
  return (
    <>
      <div className="fixed -right-[60px] top-56 z-10">
        <button
          className={`${
            isOpen ? "hidden" : ""
          } -rotate-90 px-2 py-2 bg-newgold text-offwhite border-4 border-offwhite rounded`}
          onClick={handleOpenClick}
        >
          Business Enquiry
        </button>
      </div>
      {isOpen && <div className="fixed inset-0 bg-black opacity-50 z-30"></div>}
      <div
        className={`fixed ${isOpen ? "top-0" : "top-56"} z-30 right-0`}
        ref={formRef}
      >
        {isOpen && (
          <div
            className={`bg-offwhite  h-[100vh]  w-[100%] sm:w-[400px] lg:w-[500px] overflow-y-scroll`}
          >
            <button className="ml-3  mt-5" onClick={handleCloseClick}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            </button>

            <div>
              <section className="px-5 sm:px-12  flex flex-col items-center justify-center ">
                <div className="flex flex-col w-[100%] sm:w-[90%] h-auto">
                  <div className="flex flex-col">
                    <div className="flex flex-col">
                      <h1 className="text-[14px] lg:text-[16px] font-medium py-2 lg:py-4">
                        Name
                      </h1>
                      <input
                        placeholder="Enter your name"
                        className="w-[100%] p-2 rounded-md border border-newgold focus:outline-none"
                      />
                    </div>

                    <div className="flex flex-col">
                      <h1 className="text-[14px] lg:text-[16px] font-medium py-2 lg:py-4">
                        Company Name
                      </h1>
                      <input
                        placeholder="Enter your company name"
                        className="w-[100%] p-2 rounded-md border border-newgold focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col w-full">
                    <div className="flex flex-col">
                      <h1 className="text-[14px] lg:text-[16px] font-medium py-2 lg:py-4">
                        Email
                      </h1>
                      <input
                        placeholder="Enter your email"
                        className="w-[100%] p-2 rounded-md border border-newgold focus:outline-none"
                      />
                    </div>

                    <div className="flex flex-col">
                      <h1 className="text-[14px] lg:text-[16px] font-medium py-2 lg:py-4">
                        Contact number
                      </h1>
                      <input
                        placeholder="Enter your contact no"
                        type="number"
                        maxLength="10"
                        className="w-[100%] p-2 rounded-md border border-newgold focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col w-full">
                    <div className="flex flex-col relative text-left">
                      <label className="text-[14px] lg:text-[16px] font-medium py-2 lg:py-4"> Enquiry Category</label>
                      <select className=" w-full p-2 rounded-md border border-newgold text-gray-700   leading-tight focus:outline-none ">
                        <option value="" disabled selected>
                          Select enquiry type
                        </option>
                        <option value="Hose Assembly">Hose Assembly</option>
                        <option value="Hose fitting">Hose fitting</option>
                        <option value="Bare Hose">Bare Hose</option>
                        <option value="General enquiry">General enquiry</option>
                      </select>
                    </div>

                    <div className="flex flex-col">
                      <h1 className="text-[14px] lg:text-[16px] font-medium py-2 lg:py-4">
                        Details
                      </h1>
                      <textarea
                        placeholder="Enter your message"
                        className="resize-none p-2 h-28 w-[100%] focus:outline-none border border-newgold rounded-md"
                      />
                    </div>
                  </div>

                  <Button className="my-4 w-[100%]" variant="goldbtn">
                    Send message
                  </Button>
                </div>
              </section>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Enquiry;
