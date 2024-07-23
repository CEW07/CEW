import React from "react";
import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { services, mainProducts } from "@/staticdata/static";
const Footer = () => {
  return (
    <footer className="bg-offwhite w-[100%] flex items-center flex-col border-t gap-4 border-newgold justify-between pt-20">
      <div className=" lg:flex lg:flex-row lg:justify-around lg:items-start w-[100%] lg:h-[80%] h-[auto] flex flex-col  items-center lg:gap-10 gap-3 border-red-500 ">
        <section className=" flex flex-col lg:gap-4 gap-1 lg:h-[auto] h-[auto] w-[90%] lg:w-[auto] lg:ml-0 pt-5  border-blue-800">
          <div className="lg:w-[100%] h-[auto] flex flex-row items-center border-red-500 ">
            <Image
              alt="logo"
              height={300}
              width={300}
              src="/assets/images/cew-logo.png"
              className="sm:w-20 w-16"
            />
            <span className="border border-newgold lg:min-w-[40px] mr-2 lg:mx-2 w-[30px] transform rotate-90"></span>
            <div className="w-80% flex flex-col ">
              <button className="text-center font-semibold sm:text-xl sm:tracking-[1.1rem] tracking-[0.6rem]">
                CROWN
              </button>
              <span className="sm:text-sm text-[0.6rem]">
                ENGINEERING WORKS
              </span>
            </div>
          </div>
          <div className="flex justify-start w-[full]  ">
            <Image
              alt="logo"
              height={300}
              width={300}
              src="/assets/icons/whatsapp-icon.svg"
              className="w-10 h-10 cursor-pointer  mx-2"
            />
            <Image
              alt="logo"
              height={300}
              width={300}
              src="/assets/icons/instagram-icon.svg"
              className="w-10 h-10 cursor-pointer mx-2 "
            />
            <Image
              alt="logo"
              height={300}
              width={300}
              src="/assets/icons/facebook-icon.svg"
              className="w-10 h-10 cursor-pointer mx-2 "
            />
          </div>
        </section>
        <section className="lg:flex max-lg:hidden lg:flex-col   gap-4">
          <header className="font-bold">Products</header>
          { mainProducts.map((product)=>(
          <span className="text-sm">{product.product_name}</span>
         )) }
        </section>
        <section className="lg:flex max-lg:hidden lg:flex-col   gap-4">
          <header className="font-bold">Services</header>
         { services.map((service)=>(
          <span className="text-sm">{service.name}</span>
         )) }
        </section>
        <section className="lg:flex max-lg:hidden lg:flex-col   gap-6">
          <div className=" border-blue-600 flex flex-col lg:gap-2 gap-1   font-medium ">
            <header className="font-bold">Contact us</header>
            <span className="text-[14px]">
              Location: Mumbai Maharastra, India{" "}
            </span>
            <span className="text-[14px]">
              Email - crownengineering@gmail.com{" "}
            </span>
            <span className="text-[14px]">Contact - +91 0123456789 </span>
            <span className="text-[14px]">
              Address - Mazgaon Dockyard road{" "}
            </span>
          </div>
        </section>

        <div className="lg:hidden h-[auto] w-[90%]  ">
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1" className="border-t ">
              <AccordionTrigger className="text-[12px] ">
                Products
              </AccordionTrigger>
              { mainProducts.map((product)=>(
         
              <AccordionContent className="text-[12px]">
                {product.product_name}
              </AccordionContent>
         )) }
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-[12px]">
                Contact us
              </AccordionTrigger>
              <AccordionContent className="text-[12px]">
                <div className=" border-blue-600 flex flex-col lg:gap-2 gap-1 text-[12px] sm:text-sm  font-medium ">
                  <span className="">Location: Mumbai Maharastra, India </span>
                  <span className="">Email - crownengineering@gmail.com </span>
                  <span className="">Contact - +91 0123456789 </span>
                  <span className="">Address - Mazgaon Dockyard road </span>
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-[12px]">
                Services
              </AccordionTrigger>
              { services.map((service)=>(
              <AccordionContent className="text-[12px]">
                {service.name}
              </AccordionContent>
         )) }
         </AccordionItem>
          </Accordion>
        </div>
      </div>
      <div className="bg-newgold w-[100%]  text-white">
      &#169; Copyright 2024
      </div>
    </footer>
  );
};

export default Footer;
