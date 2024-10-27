import React from "react";

import { testing, Policies } from "@/staticdata/static";
import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import CustomAccordian from "@/custom_components/CustomAccordian/CustomAccordian";

const Quality = () => {
  return (
    <section className=" select-none  ">
      <div className="relative w-full h-[100vh] overflow-hidden">
        <Image
          fill
          src="/assets/images/Quality.jpg"
          className="w-full h-full object-cover shadow-md"
          alt="Hero Background"
        />
        <div className="absolute inset-0 bg-black opacity-50  "></div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center  text-white sm:px-10 px-5">
          <h2 className="text-xl smallest:text-3xl md:text-4xl lg:text-5xl font-bold">
            Quality Testing at Crown Engineering Works
          </h2>
          <p className="max-w-6xl text-xs smallest:text-sm  lg:text-base mt-6">
            At Crown Engineering Works, we pride ourselves on understanding and
            meeting your unique fluid conveyance needs. Our services are
            designed with you in mind, from custom hose assemblies and fittings
            to reliable global logistics and responsive customer support. With
            our expert technical guidance, rigorous quality assurance, and a
            comprehensive range of high-end hoses, we ensure you get the best
            solutions tailored to your industry. Discover how our dedicated team
            can support your business every step of the way.
          </p>
        </div>
      </div>

      <section className="mt-20 flex justify-center  max-smallest:px-5 smallest:max-sm:px-10  max-xl:px-20  mb-20">
        <div className=" max-w-[74rem]">
          <h1 className="text-2xl md:text-4xl text-center">Certification</h1>
          <div className="flex justify-center items-center ">
            <p className="text-xs smallest:text-sm  sm:text-base my-6 max-w-3xl text-center">
              Our ISO 9001:2015 certification confirms our dedication to
              quality. This certification demonstrates our adherence to
              international quality standards and our commitment to continuous
              improvement
            </p>
          </div>
          <div className="flex justify-center">
            <img
              src="/assets/images/ISO-Certificate.jpg"
              alt="certificate"
              className="w-[80%]"
            />
          </div>
        </div>
      </section>

      <section className="flex justify-center">
        <div className="logo py-20  overflow-hidden relative largest:max-w-[74rem] bg-offwhite mt-20">
          <div className="logo-slide-container  gap-[10%]">
            <div className="logo-slide gap-16">
              <img
                src="/assets/icons/certificate/USP.svg"
                alt=""
                className="mix-blend-multiply h-[80px] smallest:h-[100px] object-contain"
              />
              <img
                src="/assets/icons/certificate/sanitary.svg"
                alt=""
                className="mix-blend-multiply h-[80px] smallest:h-[100px] object-contain"
              />
              <img
                src="/assets/icons/certificate/european.svg"
                alt=""
                className="mix-blend-multiply h-[80px] smallest:h-[100px] object-contain"
              />
              <img
                src="/assets/icons/certificate/fda.png"
                alt=""
                className=" h-[80px] smallest:h-[100px] object-contain"
              />
              <img
                src="/assets/icons/certificate/iso_0993.svg"
                alt=""
                className="mix-blend-multiply h-[80px] smallest:h-[100px] object-contain"
              />
              <img
                src="/assets/icons/certificate/iso_9001.png"
                alt=""
                className=" h-[80px] smallest:h-[100px] object-contain"
              />
              <img
                src="/assets/icons/certificate/ROHS.svg"
                alt=""
                className="mix-blend-multiply h-[80px] smallest:h-[100px] object-contain"
              />
            </div>

            <div className="logo-slide gap-16">
              <img
                src="/assets/icons/certificate/USP.svg"
                alt=""
                className="mix-blend-multiply h-[80px] smallest:h-[100px] object-contain"
              />
              <img
                src="/assets/icons/certificate/sanitary.svg"
                alt=""
                className="mix-blend-multiply h-[80px] smallest:h-[100px] object-contain"
              />
              <img
                src="/assets/icons/certificate/european.svg"
                alt=""
                className="mix-blend-multiply h-[80px] smallest:h-[100px] object-contain"
              />
              <img
                src="/assets/icons/certificate/fda.png"
                alt=""
                className=" h-[80px] smallest:h-[100px] object-contain"
              />
              <img
                src="/assets/icons/certificate/iso_0993.svg"
                alt=""
                className="mix-blend-multiply h-[80px] smallest:h-[100px] object-contain"
              />
              <img
                src="/assets/icons/certificate/iso_9001.png"
                alt=""
                className=" h-[80px] smallest:h-[100px] object-contain"
              />
              <img
                src="/assets/icons/certificate/ROHS.svg"
                alt=""
                className="mix-blend-multiply h-[80px] smallest:h-[100px] object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mt-20 flex justify-center  max-smallest:px-5 smallest:max-sm:px-10  max-xl:px-20  mb-20 ">
        <div className="max-w-[74rem]">
          <h1 className="text-2xl md:text-4xl mb-6 text-center">
            Our Policies
          </h1>
          <div className="  grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6 ">
            {Policies.slice(0, 3)?.map((policy, index) => (
              <CustomAccordian
                key={index}
                service={policy}
                index={index}
                header={policy.detail}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="mt-20 flex justify-center  max-smallest:px-5 smallest:max-sm:px-10  max-xl:px-20  mb-20">
        <div className="max-w-[74rem]">
          <h1 className="text-2xl md:text-4xl  text-center">
            Testing and Inspection Procedures
          </h1>
          <div className="flex justify-center items-center ">
            <p className="text-xs smallest:text-sm  sm:text-base my-6 max-w-3xl text-center">
              Ensuring the quality and reliability of our products is essential.
              To achieve this, we conduct a series of rigorous tests on our hose
              assemblies, fittings, and other products.
            </p>
          </div>
          <div className=" grid small:grid-cols-2 lg:grid-cols-3 gap-6  ">
            {testing?.map((test, index) => (
              <div key={index} className="">
                <div className=" bg-offwhite hover:scale-105 transform transition-transform duration-300 text-newgold cursor-pointer px-4 py-4 h-full  shadow-lg hover:bg-newgold hover:text-offwhite">
                  <h1 className="  max-galaxyFold:text-base  text-[16px] lg:text-[18px] font-semibold z-10  px-4">
                    {test.name}
                  </h1>

                  <div className="mt-4 px-4">
                    <p className="mt-3 max-galaxyFold:text-xs text-[12px] galaxyFold:text-sm ">
                      {test.subPoint}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </section>
  );
};

export default Quality;
