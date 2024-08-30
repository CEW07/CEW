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
import Link from "next/link";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import { PiCertificate } from "react-icons/pi";
import { FaLocationDot } from "react-icons/fa6";
const Footer = () => {
  return (
    <footer className="bg-offwhite w-[100%] md:px-[80px] px-[38px]  flex items-center justify-center border-t border-newgold  select-none ">
      <section className="w-[100%] max-w-[74rem] py-10 relative flex flex-col justify-between lg:flex-row items-start h-[100%]">
        <section className=" border-gray-800 flex  justify- flex-col w-[100%] lg:w-[30%] xl:w-[22%]">
          <div className=" h-[auto] flex ml-3 flex-row ">
            <Image
              alt="logo"
              height={100}
              width={100}
              src="/assets/icons/fullLogo.png"
              className="lg:w-[50%]"
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
            pakhadi Road, Byculla west, Mumbai, Maharashtra 400 011, India
          </p>
        </section>

        <section className="w-[20%] xl:block max-xl:hidden">
          <h1 className="text-xl font-semibold text-newgold">Contact us at</h1>
          <div>
            <header className="m-0  font-semibold mt-4 flex flex-row gap-2 items-center">
              <FaPhoneAlt color="#C89F23" className="text-[18px]" />
              <div className="flex flex-col">
                <Link
                  href="tel:+9820382786"
                  className="m-0 text-[14px]  font-medium border-b border-newgold "
                >
                  +91 9820382786
                </Link>
                <Link
                  href="tel:+9820786752"
                  className="m-0 text-[14px]  font-medium"
                >
                  +91 9820786752
                </Link>
              </div>
            </header>
          </div>

          <Link
            href="https://mail.google.com/mail/?view=cm&fs=1&to=cewtech2024@gmail.com"
            target="_blank"
          >
            <header className="m-0  font-semibold mt-4 flex flex-row gap-2 pt-1 items-center">
              <MdOutlineMarkEmailRead color="#C89F23" className="text-[24px]" />
              <p className="m-0 text-[14px]  font-medium">
                cewtech2024@gmail.com
              </p>
            </header>
          </Link>

          <header className="m-0 text-[16px] font-semibold mt-4 flex flex-row gap-2 pt-1 items-center">
            <FaCalendarAlt color="#C89F23" className="text-[18px]" />
            <p className="m-0 text-[14px]  font-medium">
              Monday - Saturday <br />9 am - 6 : 30 pm
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
                  Tank pakhadi Road, Byculla west, Mumbai, Maharashtra 400 011,
                  India
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
                  <Link href="tel:+12346567890">
                    <header className="m-0 text-[16px] font-semibold flex flex-row gap-4 items-center">
                      <FaPhoneAlt color="#C89F23" className="text-[18px]" />

                      <p className="m-0 text-[14px] font-medium flex gap-2">
                        <Link
                          href="tel:+9820382786"
                          className="m-0 text-[14px]  font-medium"
                        >
                          +91 9820382786
                        </Link>
                        <Link
                          href="tel:+9820786752"
                          className="m-0 text-[14px]  font-medium"
                        >
                          +91 9820786752
                        </Link>
                      </p>
                    </header>
                  </Link>
                </div>

                <div className="flex flex-row gap-4 items-center">
                  <Link
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=cewtech2024@gmail.com"
                    target="_blank"
                  >
                    <header className="m-0 text-[16px] font-semibold mt-4 flex flex-row gap-4 pt-1 items-center">
                      <MdOutlineMarkEmailRead
                        color="#C89F23"
                        className="text-[18px]"
                      />

                      <p className="m-0 text-[14px] font-medium">
                        cewtech2024@gmail.com{" "}
                      </p>
                    </header>
                  </Link>
                </div>

                <div className="flex flex-row gap-4 items-center">
                  <header className="m-0 text-[16px] font-semibold mt-4 flex flex-row gap-4 pt-1 items-center">
                    <FaCalendarAlt color="#C89F23" className="text-[18px]" />

                    <p className="m-0 text-[14px] font-medium">
                      Monday - Saturday (9 am - 6 : 30 pm)
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
                <div className="flex flex-row justify-between items-center flex-wrap gap-4 mt-2">
                  <div>
                    <img
                      alt="iccon"
                      src="/assets/icons/fdalogo.svg"
                      className=" mix-blend-multiply w-[50px]"
                    />
                  </div>
                  <div>
                    <img
                      alt="iccon"
                      src="/assets/icons/isologo.svg"
                      className=" mix-blend-multiply w-[80px]"
                    />
                  </div>
                  <div>
                    <img
                      alt="iccon"
                      src="/assets/icons/certificate/ROHS.svg"
                      className=" mix-blend-multiply w-[50px]"
                    />
                  </div>
                  <div>
                    <img
                      alt="iccon"
                      src="/assets/icons/certificate/iso_0993.svg"
                      className=" mix-blend-multiply w-[50px]"
                    />
                  </div>
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
          <div className="flex justify-between flex-row gap-2 mt-2">
            <img
              alt="iccon"
              src="/assets/icons/certificate/ROHS.svg"
              className=" mix-blend-multiply w-[50px] lg:w-[80px]"
            />
            <img
              alt="iccon"
              src="/assets/icons/certificate/iso_0993.svg"
              className=" mix-blend-multiply object-cover w-[50px] lg:w-[80px]"
            />
          </div>
        </section>

        {/* mobile screen footer */}
      </section>
    </footer>
  );
};

export default Footer;
