import { Button } from "@/components/ui/button";
import React from "react";

const Contact = () => {
  return (
    <main className="pt-10 flex flex-col justify-center items-center py-5 w-full max-sm:px-5 sm:px-10 ">
      <div className="  flex lg:flex-row flex-col bg-offwhite rounded-sm lg:rounded-xl w-full max-w-[74rem] shadow-xl py-10 border items-center justify-center  ">
        <section className="lg:w-[50%]  w-[100%] h-auto flex flex-col items-center justify-evenly lg:border-b-0 py-3  border-newgold ">
          <div className=" w-[80%] flex flex-col">
            <heading className="lg:text-2xl text-[16px] font-medium lg:py-2">
              Address
            </heading>
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
              pakhadi Road, Byculla, Mumbai, Maharashtra 400 011, India
            </span>
          </div>
          <div className="w-[80%] max-small:flex-col max-lg:mt-4 max-lg:flex gap-3 small:max-lg:gap-10">
            <div className="  flex flex-col">
              <heading className="lg:text-2xl text-[16px] font-medium lg:py-3">
                Call us
              </heading>
              <span className="text-[14px]">+91 123456789</span>
            </div>
            <div className="  flex flex-col">
              <heading className="lg:text-2xl text-[16px] font-medium lg:py-3">
                Email
              </heading>
              <span className="text-[14px] ">crownengineering@gmail.com</span>
            </div>
          </div>
        </section>
        <section className="lg:w-[50%] w-[90%] h-auto flex flex-col items-center justify-evenly">
          <div className=" w-[90%] flex flex-col  lg:items-start">
            <div className="flex max-small:flex-col small:max-lg:gap-6 lg:flex-col w-full">
              <div className="flex flex-col">
                <heading className=" text-[14px] lg:text-[16px] font-medium py-2 lg:py-4">
                  Name
                </heading>
                <input
                  placeholder="Enter your name"
                  className=" lg:w-[70%] w-[100%] p-2 rounded-md border border-newgold focus:outline-none "
                />
              </div>

              <div className="flex flex-col">
                <heading className=" text-[14px] lg:text-[16px] font-medium py-2 lg:py-4">
                  Company Name
                </heading>
                <input
                  placeholder="Enter your company name"
                  className=" lg:w-[70%] w-[100%] p-2 rounded-md border border-newgold focus:outline-none "
                />
              </div>
            </div>

            <div className=" flex max-small:flex-col lg:flex-col  small:max-lg:gap-6  w-full">
              <div className="flex flex-col">
                <heading className=" text-[14px] lg:text-[16px] font-medium py-2 lg:py-4">
                  Email
                </heading>
                <input
                  placeholder="Enter your email"
                  className=" lg:w-[70%] w-[100%] p-2 rounded-md border border-newgold focus:outline-none "
                />
              </div>

              <div className="flex flex-col">
                <heading className=" text-[14px] lg:text-[16px] font-medium py-2 lg:py-4">
                  Contact number
                </heading>
                <input
                  placeholder="Enter your contact no"
                  type="number"
                  maxLength="10"
                  className=" lg:w-[70%] w-[100%] p-2 rounded-md border border-newgold focus:outline-none "
                />
              </div>
            </div>
            <label className="text-[14px] lg:text-[16px] font-medium py-2 lg:py-4">
              {" "}
              Enquiry Category
            </label>
            <select className="lg:w-[70%] w-[100%]  p-2 rounded-md border border-newgold text-gray-700   leading-tight focus:outline-none ">
              <option value="" disabled selected>
                Select enquiry type
              </option>
              <option value="Hose Assembly">Hose Assembly</option>
              <option value="Hose fitting">Hose fitting</option>
              <option value="Bare Hose">Bare Hose</option>
              <option value="General enquiry">General enquiry</option>
            </select>
            <heading className=" text-[14px] lg:text-[16px] font-medium py-2 lg:py-4">
              Details
            </heading>
            <textarea
              placeholder="Enter your message"
              className="lg:w-[70%] resize-none p-2 h-28 w-[100%] focus:outline-none border border-newgold rounded-md "
            />

            <Button className="my-4 lg:w-[70%] w-[100%]" variant="goldbtn">
              Send message
            </Button>
          </div>
        </section>
      </div>

      <div className="mt-20 mb-20 h-[100%]  smallest:w-[100%] flex justify-center">
        {/* <div className="grid grid-cols-1 max-w-[74rem] overflow-x-auto "> */}

        <iframe
          className="border-2 border-newgold rounded-md  smallest:w-[74rem] h-[500px]"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3773.0080428387796!2d72.8292141!3d18.975252200000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7ce69b9b7f711%3A0x4f9e67b0fbc590ea!2sCrown%20Engineering%20Works%20-%20FDA%20Hoses%20Suppliers%20-%20Mumbai!5e0!3m2!1sen!2sin!4v1722600233190!5m2!1sen!2sin"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        {/* </div> */}
      </div>
    </main>
  );
};

export default Contact;
