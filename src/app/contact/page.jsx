"use client";
import { Button } from "@/components/ui/button";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import ToastMessage from "@/custom_components/Toast Message/ToastMessage";
import axios from "axios";

const Contact = () => {
  const [toastMessage, setToastMessage] = useState(false);
  const [checkData, setCheckData] = useState({
    userName: false,
    email: false,
    companyName: false,
    contactNumber: false,
    details: false,
    category: false,
  });

  const submitForm = async (formData) => {
    for (let [name, value] of formData.entries()) {
      if (formData.get(name).length === 0 || formData.get(name) === null) {
        setCheckData((prev) => ({
          ...prev,
          [name]: true,
        }));
      } else {
        setCheckData((prev) => ({
          ...prev,
          [name]: false,
        }));
      }
    }
    let data = {
      name: formData.get("userName") || "",
      company: formData.get("companyName"),
      category: formData.get("category") || "",
      details: formData.get("details"),
      contact: formData.get("contactNumber"),
      email: formData.get("email"),
    };

    // const res = await axios
    //   .post(`${process.env.NEXT_PUBLIC_FRONTEND_URL}/api/submitEmail`, {
    //    data
    //   })
    //   .then((res) => {
    //     console.log("This is the response", res);
    //   })
    //   .catch((error) => {
    //     console.log("There is an error", error);
    //   });
  };

  return (
    <main className="pt-10 flex flex-col justify-center items-center py-5 w-full max-sm:px-5 sm:px-10 relative">
      {/* <ToastMessage /> */}
      <section className="  flex lg:flex-row flex-col bg-offwhite rounded-sm lg:rounded-xl w-full max-w-[74rem] shadow-xl py-10 border items-center justify-center  ">
        <section className="lg:w-[50%]  w-[100%] h-auto flex flex-col items-center justify-evenly lg:border-b-0 py-3  border-newgold ">
          <div className=" w-[80%] flex flex-col">
            <p className="lg:text-2xl text-[16px] font-medium lg:py-2">
              Address
            </p>
            <header className="text-[16px] lg:text-[18px] font-medium  py-1 lg:py-2">
              Registered Office
            </header>
            <span className="text-[14px] max-lg:max-w-lg py-1 lg:py-2">
              Room no. 2, Municipal building no. 3, 71- Morland Road, Mumbai,
              Maharashtra 400 008, India
            </span>
            <header className="text-[16px] lg:text-[18px] font-medium  py-1 lg:py-2">
              Factory
            </header>
            <span className="text-[14px] max-lg:max-w-lg py-1 lg:py-2">
              Hose Assembly unit: 67/A , Factory No. 1, Suryaji compound, Tank
              pakhadi Road, Byculla west, Mumbai, Maharashtra 400 011, India
            </span>
          </div>
          <div className="w-[80%] max-small:flex-col max-lg:mt-4 max-lg:flex gap-3 small:max-lg:gap-10">
            <div className="  flex flex-col">
              <p className="lg:text-2xl text-[16px] font-medium lg:py-3">
                Call us
              </p>
              <Link href="tel:+12346567890">
                <span className="text-[14px]">+91 123456789</span>
              </Link>
            </div>
            <div className="  flex flex-col ">
              <p className="lg:text-2xl text-[16px] font-medium lg:py-3">
                Email
              </p>
              <Link
                href="https://mail.google.com/mail/?view=cm&fs=1&to=cewtech2024@gmail.com"
                target="_blank"
              >
                <span className="text-[14px] ">cewtech2024@gmail.com</span>
              </Link>
            </div>
          </div>
        </section>

        <form
          action={submitForm}
          className="lg:w-[50%] w-[90%] h-auto flex flex-col items-center justify-evenly"
        >
          <div className=" w-[90%] flex flex-col  lg:items-start">
            <div className="flex max-small:flex-col small:max-lg:gap-6 lg:flex-col w-full">
              <div className="flex flex-col">
                <p className=" text-[14px] lg:text-[16px] font-medium py-2 lg:py-4">
                  Name
                </p>
                <input
                  name="userName"
                  placeholder="Enter your name"
                  className=" lg:w-[70%] w-[100%] p-2 rounded-md border border-newgold focus:outline-none "
                />
              </div>

              <div className="flex flex-col">
                <p className=" text-[14px] lg:text-[16px] font-medium py-2 lg:py-4">
                  Company Name
                </p>
                <input
                  name="companyName"
                  placeholder="Enter your company name"
                  className=" lg:w-[70%] w-[100%] p-2 rounded-md border border-newgold focus:outline-none "
                />
                {checkData.companyName && (
                  <p className="text-red-600 text-[14px] pt-2">
                    Company name is required
                  </p>
                )}
              </div>
            </div>

            <div className=" flex max-small:flex-col lg:flex-col  small:max-lg:gap-6  w-full">
              <div className="flex flex-col">
                <p className=" text-[14px] lg:text-[16px] font-medium py-2 lg:py-4">
                  Email
                </p>
                <input
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  className=" lg:w-[70%] w-[100%] p-2 rounded-md border border-newgold focus:outline-none "
                />
                {checkData.email && (
                  <p className="text-red-600 text-[14px] pt-2">
                    Email is required
                  </p>
                )}
              </div>

              <div className="flex flex-col">
                <p className=" text-[14px] lg:text-[16px] font-medium py-2 lg:py-4">
                  Contact number
                </p>
                <input
                  name="contactNumber"
                  placeholder="Enter your contact no"
                  type="text"e
                  maxLength="10"
                  className=" lg:w-[70%] w-[100%] p-2 rounded-md border border-newgold focus:outline-none "
                />
                {checkData.contactNumber && (
                  <p className="text-red-600 text-[14px] pt-2">
                    Contact Number is required
                  </p>
                )}
              </div>
            </div>
            <label className="text-[14px] lg:text-[16px] font-medium py-2 lg:py-4">
              {" "}
              Enquiry Category
            </label>
            <select  name="category" className="lg:w-[70%] w-[100%]  p-2 rounded-md border border-newgold text-gray-700   leading-tight focus:outline-none ">
              <option value="" disabled selected>
                Select enquiry type
              </option>
              <option value="Hose Assembly">Hose Assembly</option>
              <option value="Hose fitting">Hose fitting</option>
              <option value="Bare Hose">Bare Hose</option>
              <option value="General enquiry">General enquiry</option>
            </select>
            <p className=" text-[14px] lg:text-[16px] font-medium py-2 lg:py-4">
              Message
            </p>
            <textarea
              name="details"
              placeholder="Enter your message"
              className="lg:w-[70%] resize-none p-2 h-28 w-[100%] focus:outline-none border border-newgold rounded-md "
            />
            {checkData.details && (
              <p className="text-red-600 text-[14px] pt-2">
                Please enter a Message{" "}
              </p>
            )}

            <Button className="my-4 lg:w-[70%] w-[100%]" variant="goldbtn">
              Send message
            </Button>
          </div>
        </form>
      </section>

      <div className="mt-20 mb-20 h-[100%]  smallest:w-[100%] flex justify-center">
        <iframe
          className="border-2 max-smallest:hidden border-newgold rounded-md  smallest:w-[74rem] h-[500px] "
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3773.0080428387796!2d72.8292141!3d18.975252200000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7ce69b9b7f711%3A0x4f9e67b0fbc590ea!2sCrown%20Engineering%20Works%20-%20FDA%20Hoses%20Suppliers%20-%20Mumbai!5e0!3m2!1sen!2sin!4v1722600233190!5m2!1sen!2sin"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>

        <div className="grid grid-cols-1 max-w-[74rem] overflow-x-auto smallest:hidden ">
          <iframe
            className="border-2 border-newgold rounded-md  smallest:w-[74rem] h-[500px] "
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3773.0080428387796!2d72.8292141!3d18.975252200000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7ce69b9b7f711%3A0x4f9e67b0fbc590ea!2sCrown%20Engineering%20Works%20-%20FDA%20Hoses%20Suppliers%20-%20Mumbai!5e0!3m2!1sen!2sin!4v1722600233190!5m2!1sen!2sin"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </main>
  );
};

export default Contact;
