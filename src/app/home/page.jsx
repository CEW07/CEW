"use client";
import React, { useEffect, useState } from "react";
import { useData } from "@/app/contextapi/contextData";
import ProductCard from "@/custom_components/product-ui/ProductCard";
import { mainProductImages } from "@/staticdata/static";
import HeroMain from "@/custom_components/home-ui/hero-main/page";
import { services } from "@/staticdata/static";
import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const HomeContent = () => {
  // Destructuring Context Data from contextData.js
  const { productData, loading } = useData();
  return (
    <main>
      <section>
        <HeroMain />
        <section className="bg-newgold pt-20 pb-20 md:px-20 px-10">
          <h1 className="text-2xl md:text-4xl text-center text-white font-semibold ">
            About us
          </h1>
          <div className="flex flex-col justify-center items-center text-white">
          <p className="max-smallest:text-xs text-sm sm:text-base lg:text-lg mt-3 text-justify max-w-6xl ">
                Crown Engineering Works, an ISO 9001:2015 certified company,
                specializes in manufacturing hose assemblies and fluid
                connectors, including FDA-approved, Hydraulic, Stainless Steel
                Flexible, Thermoplastic, PTFE, Industrial, Composite, Silicone,
                and PVC hoses. Our commitment to upholding the highest standards
                guarantees that every product meets stringent quality standards.We have formed trusted partnerships with key corporations in the
                pharmaceutical, food, defense, oil, industrial manufacturing,
                and renewable energy sectors. Our success is built on strong
                relationships and a deep understanding of our clients' needs,
                allowing us to provide tailored solutions. Crown Engineering
                Works is more than just a supplier; we are partners in our
                clients' success, dedicated to providing businesses globally
                with persistent, high-performance solutions they can trust.
              </p>
          </div>
        </section>
        <div className="w-full ">
          <Image
            src="/assests/icons/WaveBottom.png"
            alt="waves"
            width={500}
            height={400}
            className="w-full -mb-[4px]"
          />
        </div>
        <h1 className="text-3xl text-center text-newgold font-semibold">
          Our Products
        </h1>
        <div className="lg:pt-12 pt-16 flex justify-center mx-20">
          <div className=" grid xl:grid-cols-4 lg:grid-cols-3 gap-6 grid-cols-1 sm:grid-cols-2">
            {loading
              ? "loading..."
              : productData?.mainCategory?.map((item, index) => {
                  const correspondingImage = mainProductImages[index];

                  return (
                    <ProductCard
                      key={item.product_id}
                      keyId={item.product_id}
                      name={item.product_name}
                      href={`/${item.product_name_id}`}
                      imageSrc={correspondingImage?.image}
                      imageAlt={correspondingImage?.alt}
                    />
                  );
                })}
          </div>
        </div>
      </section>
      <section className="grid xl:grid-cols-2 my-20 gap-6 mx-10 md:mx-20">
        <div className="relative aspect-video ">
          <Image
            src="/assests/images/Qualities.jpg"
            fill
            alt="Quality"
            className="rounded-md"
          />
          <div className="absolute inset-0 bg-black opacity-50  "></div>
          <p className="absolute bottom-2 font-semibold text-offwhite ml-3">Experience the Difference with us</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <h1 className="max-smallest:text-xl text-2xl font-semibold text-newgold mb-3">
                Industry Experts
              </h1>
              <p className="max-smallest:text-xs text-sm md:text-base text-justify xl:text-sm">
                With decades of expertise, our seasoned professionals bring
                unparalleled knowledge and skill to every project, ensuring
                exceptional results.
              </p>
            </div>
            <div>
              <h1 className="max-smallest:text-xl text-2xl font-semibold text-newgold mb-3">
                Diverse Products
              </h1>
              <p className="max-smallest:text-xs text-sm md:text-base text-justify xl:text-sm">
                Our extensive selection of premium products, coupled with
                reasonable pricing, guarantees the best value without
                compromising quality.
              </p>
            </div>
            <div>
              <h1 className="max-smallest:text-xl text-2xl font-semibold text-newgold mb-3">
                Customer Support
              </h1>
              <p className="max-smallest:text-xs text-sm md:text-base text-justify xl:text-sm">
                Our dedicated support team is always ready to assist, ensuring
                our customers experience seamless service and complete
                satisfaction.
              </p>
            </div>
            <div>
              <h1 className="max-smallest:text-xl text-2xl font-semibold text-newgold mb-3">
                Investment in R&D
              </h1>
              <p className="max-smallest:text-xs text-sm md:text-base text-justify xl:text-sm">
                We continuously invest in research and development to drive
                innovation, ensuring we deliver cutting-edge solutions that meet
                evolving industry needs.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-newgold grid small:grid-cols-2  md:grid-cols-4 gap-6 py-10 text-offwhite px-10 md:px-20">
        <div className="text-center font-semibold text-xl xl:text-2xl">
          <p className="text-2xl xl:text-3xl">45+</p>
          <p>Years of Experience</p>
        </div>
        <div className="text-center font-semibold text-xl xl:text-2xl">
          <p className="text-2xl xl:text-3xl">135+</p>
          <p>Products in Portfolio</p>
        </div>
        <div className="text-center font-semibold   text-xl xl:text-2xl">
          <p className="text-2xl xl:text-3xl">15+</p>
          <p>Countries Served</p>
        </div>
        <div className="text-center font-semibold   text-xl xl:text-2xl">
          <p className="text-2xl xl:text-3xl">10+</p>
          <p>Industries Served</p>
        </div>
      </section>
      <section>
        <div className="mt-20 xl:mx-32  max-sm:mx-5 sm:mx-10 mb-20">
          <h1 className="text-newgold text-3xl mb-6 text-center font-semibold">
            Our Services
          </h1>
          <div className="  grid small:grid-cols-2 md:grid-cols-3 gap-6 ">
            {services.slice(0, 3)?.map((service, index) => (
              <div key={index} className="">
                <div className=" h-full rounded-md ">
                  <Accordion
                    type="single"
                    collapsible
                    className="w-full bg-lightgrey rounded-md px-4 shadow-xl"
                  >
                    <AccordionItem value={service.name}>
                      <AccordionTrigger className="hover:no-underline ">
                        <h1 className="text-newgold max-galaxyFold:text-base  text-lg  z-10  px-4">
                          {service.name}
                        </h1>
                      </AccordionTrigger>
                      <AccordionContent>
                        <div className=" px-4">
                          <li className="mt-3">{service.subPoint1}</li>
                          <li className="mt-3">{service.subPoint2}</li>
                          <li
                            className={`mt-3 ${
                              service.subPoint3 ? "" : "hidden"
                            } `}
                          >
                            {service.subPoint3}
                          </li>
                          <li
                            className={`mt-3 ${
                              service.subPoint4 ? "" : "hidden"
                            } `}
                          >
                            {service.subPoint4}
                          </li>
                          <li
                            className={`mt-3 ${
                              service.subPoint5 ? "" : "hidden"
                            } `}
                          >
                            {service.subPoint5}
                          </li>
                          <li
                            className={`mt-3 ${
                              service.subPoint6 ? "" : "hidden"
                            } `}
                          >
                            {service.subPoint6}
                          </li>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default HomeContent;
