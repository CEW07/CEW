import React from "react";
import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { services, mainProducts } from "@/staticdata/static";
import { FaPhoneAlt, FaCalendarAlt } from "react-icons/fa";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import { PiCertificate } from "react-icons/pi";
import { FaLocationDot } from "react-icons/fa6";
const Footer = () => {
  return (
    <footer className="bg-offwhite h-[] flex flex-col  justify-between border-t border-newgold  select-none ">
      <section className="w-[100%] py-10 relative flex flex-col lg:flex-row justify-evenly items-start h-[100%]">
        <section className=" border-gray-800 flex  justify-center flex-col w-[100%] lg:w-[30%] xl:w-[22%]">
          <div className=" h-[auto] flex lg:justify-center ml-3 flex-row ">
            <Image
              alt="logo"
              height={200}
              width={200}
              src="/assets/icons/fullLogo.png"
              className="lg:w-[60%]"
            />
          </div>
          <p className="m-0 text-[12px] mt-2 px-4 text-[] font-medium text-justify ">
            Crown Engineering Works specializes in the design, development, and
            production of premium hose assemblies and fittings. With a global
            reach, we deliver reliable fluid conveyance solutions across diverse
            industries.
          </p>
        </section>

        <section className="w-[24%] xl:block max-xl:hidden">
          <h1 className="text-xl font-semibold text-newgold">Find us at</h1>
          <header className="m-0 text-[16px] font-semibold mt-4">
            Registered Office
          </header>
          <p className="m-0 text-[14px] text-justify">
            Room no. 2, Municipal building no. 3, 71- Morland Road, Mumbai,
            Maharashtra 400 008, India
          </p>

          <header className="m-0 text-[16px] font-semibold mt-4">
            Factory
          </header>
          <p className="m-0 text-[14px] text-justify">
            Hose Assembly unit: 67/A, Factory No. 1, Suryaji compound, Tank
            pakhadi Road, Byculla, Mumbai, Maharashtra 400 011, India
          </p>
        </section>

        <section className="w-[16%] xl:block max-xl:hidden">
          <h1 className="text-xl font-semibold text-newgold">Contact us at</h1>
          <header className="m-0 text-[16px] font-semibold mt-4 flex flex-row gap-2 items-center">
            <FaPhoneAlt color="#C89F23" className="text-[18px]" />
            <p className="m-0 text-[14px]  font-medium">+91 12346567890</p>
          </header>

          <header className="m-0 text-[16px] font-semibold mt-4 flex flex-row gap-2 pt-1 items-center">
            <MdOutlineMarkEmailRead color="#C89F23" className="text-[24px]" />
            <p className="m-0 text-[14px]  font-medium">crowneng@gmail.com</p>
          </header>

          <header className="m-0 text-[16px] font-semibold mt-4 flex flex-row gap-2 pt-1 items-center">
            <FaCalendarAlt color="#C89F23" className="text-[18px]" />
            <p className="m-0 text-[14px]  font-medium">
              Monday - Saturday <br />
              10 am - 8 pm
            </p>
          </header>
        </section>

        <section className="w-[100%] lg:w-[50%] mt-4 px-6 xl:hidden max-xl:flex">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-black font-medium text-[14px] flex justify-between  ">
                <div className="flex items-center gap-4">
                  {/* <FaLocationDot color="#C89F23" /> */}
                  Find us at
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <header className="m-0 text-[14px] font-semibold ">
                  Registered Office
                </header>
                <p className="m-0 text-[14px] text-justify">
                  Room no. 2, Municipal building no. 3, 71- Morland Road,
                  Mumbai, Maharashtra 400 008, India
                </p>

                <header className="m-0 text-[14px] font-semibold mt-4">
                  Factory
                </header>
                <p className="m-0 text-[14px] text-[#0C0A09] text-justify">
                  Hose Assembly unit: 67/A, Factory No. 1, Suryaji compound,
                  Tank pakhadi Road, Byculla, Mumbai, Maharashtra 400 011, India
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger className="text-black font-medium text-[14px] ">
                <div className="flex items-center gap-4">
                  {/* <FaPhoneAlt color="#C89F23" /> */}
                  Contact us
                </div>
              </AccordionTrigger>
              <AccordionContent className="">
                <div className="flex flex-row gap-4 items-center">
                  <header className="m-0 text-[16px] font-semibold flex flex-row gap-4 items-center">
                    <FaPhoneAlt color="#C89F23" className="text-[18px]" />

                    <p className="m-0 text-[14px] font-medium">
                      +91 12346567890
                    </p>
                  </header>
                </div>

                <div className="flex flex-row gap-4 items-center">
                  <header className="m-0 text-[16px] font-semibold mt-4 flex flex-row gap-4 pt-1 items-center">
                    <MdOutlineMarkEmailRead
                      color="#C89F23"
                      className="text-[18px]"
                    />

                    <p className="m-0 text-[14px] font-medium">
                      crowneng@gmail.com
                    </p>
                  </header>
                </div>

                <div className="flex flex-row gap-4 items-center">
                  <header className="m-0 text-[16px] font-semibold mt-4 flex flex-row gap-4 pt-1 items-center">
                    <FaCalendarAlt color="#C89F23" className="text-[18px]" />

                    <p className="m-0 text-[14px] font-medium">
                      Monday - Saturday (10 am - 8 pm)
                    </p>
                  </header>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger className="text-black font-medium text-[14px] ">
                <div className="flex items-center gap-4">Certifications</div>
              </AccordionTrigger>
              <AccordionContent>
                <div className="flex flex-row gap-4 mt-2">
                  <img
                    alt="iccon"
                    src="/assets/icons/fdalogo.svg"
                    className=" mix-blend-multiply w-[50px]"
                  />
                  <img
                    alt="iccon"
                    src="/assets/icons/isologo.svg"
                    className=" mix-blend-multiply w-[50px]"
                  />
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>

        <section className="w-[16%] xl:block max-xl:hidden">
          <header className="m-0 xl:text-xl text-[16px] text-newgold font-semibold flex flex-row gap-2 items-center">
            {/* <PiCertificate color="#C89F23" className="" /> */}
            Certifications
          </header>
          <div className="flex flex-row gap-2 mt-2">
            <img
              alt="iccon"
              src="/assets/icons/fdalogo.svg"
              className=" mix-blend-multiply w-[50px] lg:w-[100px]"
            />
            <img
              alt="iccon"
              src="/assets/icons/isologo.svg"
              className=" mix-blend-multiply w-[50px] lg:w-[100px]"
            />
          </div>
        </section>

        {/* mobile screen footer */}
      </section>

      <section className="h-[] bg-newgold flex flex-row items-center p-4">
        <p className="bg- w-[100%] m-0  text-white text-[14px]">
          Copyright &#169; 2024 Crown Engineering. All rights reserved
        </p>
        {/* <p className="text-nowrap m-0 text-offwhite font-semibold text-[10px] md:text-[16px] xl:text-lg pr-4">
          PIONEERS IN FLUID CONVEYANCE SOLUTIONS.
        </p> */}
      </section>
    </footer>
  );
};

export default Footer;
