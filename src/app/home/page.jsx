"use client";
import CountUp from "react-countup";
import React, { useEffect, useState } from "react";
import ProductCard from "@/custom_components/product-ui/ProductCard";
import { mainProductImages, mainProducts } from "@/staticdata/static";
import HeroMain from "@/custom_components/home-ui/hero-main/page";
import { services } from "@/staticdata/static";
import Link from "next/link";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Table from "@/custom_components/table/Table";
import CustomAccordian from "@/custom_components/CustomAccordian/CustomAccordian";

const HomeContent = () => {
  // Destructuring Context Data from contextData.js
  // const { productData, loading } = useData();
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger animation only once
    threshold: 0.1, // Trigger when 10% of the section is in view
  });

  return (
    <main>
      <section className=" select-none ">
        <HeroMain />
        <section className="bg-offwhite pt-20 pb-20 ">
          <h1 className="text-2xl md:text-4xl text-center text-newgold font-semibold ">
            About us
          </h1>
          <div className="flex flex-col justify-center items-center  text-black">
            <p className="max-smallest:text-xs  select-none  text-sm sm:text-base lg:text-lg mt-3 text-justify max-smallest:mx-5 smallest:max-sm:mx-10  max-xl:mx-20 max-w-[74rem]">
              Crown Engineering Works, an ISO 9001:2015 certified company,
              specializes in manufacturing hose assemblies and fluid connectors,
              including FDA-approved, Hydraulic, Stainless Steel Flexible,
              Thermoplastic, PTFE, Industrial, Composite, Silicone, and PVC
              hoses. Our commitment to upholding the highest standards
              guarantees that every product meets stringent quality standards.
              We have formed trusted partnerships with key corporations in the
              pharmaceutical, food, defense, oil, industrial manufacturing, and
              renewable energy sectors. Our success is built on strong
              relationships and a deep understanding of our clients' needs,
              allowing us to provide tailored solutions. Crown Engineering Works
              is more than just a supplier; we are partners in our clients'
              success, dedicated to providing businesses globally with
              persistent, high-performance solutions they can trust.
            </p>
          </div>
        </section>
        <div className="w-full ">
          <Image
            src="/assets/icons/WaveTop-1.png"
            alt="waves"
            width={500}
            height={400}
            className="w-full -mb-[4px]"
          />
        </div>
        <h1 className="text-2xl md:text-4xl text-center text-newgold font-semibold">
          Our Products
        </h1>
        <div className="lg:pt-12 pt-16   flex items-center justify-center mx-5 ">
          <div className=" grid xl:grid-cols-4 lg:grid-cols-3 gap-6 grid-cols-1 sm:grid-cols-2">
            {/* {loading
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
            })} */}

            {mainProducts?.map((item, index) => {
              return (
                <ProductCard
                  key={item.product_id}
                  keyId={item.product_id}
                  name={item.product_name}
                  href={`/products/${item.product_name_id}`}
                  imageSrc={item?.image}
                  imageAlt={item?.alt}
                />
              );
            })}
          </div>
        </div>
      </section>

      {/* <section className="flex justify-center  max-smallest:px-5 smallest:max-sm:px-10  max-xl:px-20 bg-offwhite mt-20 ">
        <div className="grid smallest:grid-cols-2 small:grid-cols-3 lg:grid-cols-6 gap-6 py-10 max-w-[74rem] w-full">
          <div className="flex max-smallest:justify-center">

          <img
            src="/assets/icons/certificate/USP.svg"
            alt=""
            className=" mix-blend-multiply w-20"
          />
          </div>

          <div className="flex max-smallest:justify-center smallest:justify-end small:justify-center">
            <img
              src="/assets/icons/certificate/sanitary.svg"
              alt=""
              className=" mix-blend-multiply w-20"
            />
          </div>

          <div className="flex max-smallest:justify-center smallest:justify-end small:justify-center">
            <img
              src="/assets/icons/certificate/sanitary.svg"
              alt=""
              className=" mix-blend-multiply w-20"
            />
          </div>

       

          <div className="flex max-smallest:justify-center small:justify-end lg:justify-center">
            <img
              src="/assets/icons/certificate/european.svg"
              alt=""
              className=" mix-blend-multiply w-20"
            />
          </div>

          <div className="flex max-smallest:justify-center smallest:justify-end small:justify-center">
            <img
              src="/assets/icons/fdalogo.svg"
              alt=""
              className=" mix-blend-multiply w-20"
            />
          </div>

          <div className="flex max-smallest:justify-center smallest:max-small:justify-end lg:justify-center">
            <img
              src="/assets/icons/certificate/iso_0993.svg"
              alt=""
              className=" mix-blend-multiply w-20"
            />
          </div>

          <div className="flex  max-smallest:justify-center small:justify-center">
            <img
              src="/assets/icons/isologo.svg"
              alt=""
              className=" mix-blend-multiply w-32 "
            />
          </div>

          <div className="flex max-smallest:justify-center smallest:justify-end items-end">
            <img
              src="/assets/icons/certificate/ROHS.svg"
              alt=""
              className=" mix-blend-multiply w-20"
            />
          </div>
        </div>
      </section> */}

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
                src="/assets/icons/fdalogo.svg"
                alt=""
                className="mix-blend-multiply h-[80px] smallest:h-[100px] object-contain"
              />
              <img
                src="/assets/icons/certificate/iso_0993.svg"
                alt=""
                className="mix-blend-multiply h-[80px] smallest:h-[100px] object-contain"
              />
              <img
                src="/assets/icons/isologo.svg"
                alt=""
                className="mix-blend-multiply h-[80px] smallest:h-[100px] object-contain"
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
                src="/assets/icons/fdalogo.svg"
                alt=""
                className="mix-blend-multiply h-[80px] smallest:h-[100px] object-contain"
              />
              <img
                src="/assets/icons/certificate/iso_0993.svg"
                alt=""
                className="mix-blend-multiply h-[80px] smallest:h-[100px] object-contain"
              />
              <img
                src="/assets/icons/isologo.svg"
                alt=""
                className="mix-blend-multiply h-[80px] smallest:h-[100px] object-contain"
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

      <div className="flex justify-center">
        <section className="grid xl:grid-cols-2 my-20 gap-6 max-smallest:mx-5 smallest:max-sm:mx-10  max-xl:mx-20 max-w-[74rem]">
          <div className="relative aspect-video ">
            <Image
              src="/assets/images/Qualities.jpg"
              fill
              alt="Quality"
              className="rounded-md"
            />
            <div className="absolute inset-0 bg-black opacity-50  "></div>
            <p className="absolute bottom-2 galaxyFold:bottom-4 small:text-2xl text-offwhite ml-3">
              Experience the Difference with us
            </p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <h1 className="max-smallest:text-lg text-xl font-semibold text-newgold mb-3">
                  Industry Experts
                </h1>
                <p className="max-smallest:text-xs text-sm md:text-base text-justify xl:text-sm">
                  With decades of expertise, our seasoned professionals bring
                  unparalleled knowledge and skill to every project, ensuring
                  exceptional results.
                </p>
              </div>
              <div>
                <h1 className="max-smallest:text-lg text-xl font-semibold text-newgold mb-3">
                  Diverse Products
                </h1>
                <p className="max-smallest:text-xs text-sm md:text-base text-justify xl:text-sm">
                  Our extensive selection of premium products, coupled with
                  reasonable pricing, guarantees the best value without
                  compromising quality.
                </p>
              </div>
              <div>
                <h1 className="max-smallest:text-lg text-xl font-semibold text-newgold mb-3">
                  Customer Support
                </h1>
                <p className="max-smallest:text-xs text-sm md:text-base text-justify xl:text-sm">
                  Our dedicated support team is always ready to assist, ensuring
                  our customers experience seamless service and complete
                  satisfaction.
                </p>
              </div>
              <div>
                <h1 className="max-smallest:text-lg text-xl font-semibold text-newgold mb-3">
                  Investment in R&D
                </h1>
                <p className="max-smallest:text-xs text-sm md:text-base text-justify xl:text-sm">
                  We continuously invest in research and development to drive
                  innovation, ensuring we deliver cutting-edge solutions that
                  meet evolving industry needs.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

      <section
        ref={ref}
        className=" max-largest:bg-offwhite  small:grid-cols-2 flex items-center justify-center w-full md:grid-cols-4 gap-6  text-black max-smallest:px-5 smallest:max-sm:px-10 max-xl:px-20"
      >
        <div className="w-full max-w-[74rem] flex flex-row largest:bg-offwhite py-10  2xl:px-10 justify-center sm:justify-between gap-6 flex-wrap items-center lg:flex-nowrap ">
          <div className="py-2 text-center text-xl xl:text-2xl">
            <p className="text-2xl xl:text-3xl font-semibold">
              {inView ? <CountUp end={45} duration={2} /> : 0}+
            </p>
            <p>Years of Experience</p>
          </div>
          <div className="py-2 text-center text-xl xl:text-2xl">
            <p className="text-2xl xl:text-3xl font-semibold">
              {inView ? <CountUp end={135} duration={2} /> : 0}+
            </p>
            <p>Products in Portfolio</p>
          </div>
          <div className="py-2 text-center text-xl xl:text-2xl">
            <p className="text-2xl xl:text-3xl font-semibold">
              {inView ? <CountUp end={15} duration={2} /> : 0}+
            </p>
            <p>Countries Served</p>
          </div>
          <div className="py-2 text-center text-xl xl:text-2xl">
            <p className="text-2xl xl:text-3xl font-semibold">
              {inView ? <CountUp end={10} duration={2} /> : 0}+
            </p>
            <p>Industries Served</p>
          </div>
        </div>
      </section>

      <section className="flex justify-center">
        <div className="my-20 max-smallest:mx-5 smallest:max-sm:mx-10  max-xl:mx-20 max-w-[74rem]">
          <h1 className="text-2xl md:text-4xl text-newgold font-semibold flex justify-center items-center gap-1">
            Our Services
            <Link href="/services">
              <div className="mt-2 hover:cursor-pointer">
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
                    d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                  />
                </svg>
              </div>
            </Link>
          </h1>
          <div className=" grid small:grid-cols-2 lg:grid-cols-3 gap-6  mt-6">
            {services.slice(0, 3)?.map((service, index) => (
              <div
                className=" bg-offwhite hover:scale-105 transform transition-transform duration-300 text-newgold cursor-pointer px-4 py-4 h-full  shadow-lg hover:bg-newgold hover:text-offwhite"
                key={index}
              >
                <h1 className="  max-galaxyFold:text-base xl:text-nowrap text-[16px] lg:text-[18px] font-semibold z-10  px-4">
                  {service.name}
                </h1>
                <ul className="list-disc  text-[14px] px-8">
                  {service?.subPoint1 && (
                    <li className="mt-3">{service?.subPoint1}</li>
                  )}
                  {service?.subPoint2 && (
                    <li className="mt-3">{service?.subPoint2}</li>
                  )}
                  {service?.subPoint3 && (
                    <li
                      className={`mt-3 ${service?.subPoint3 ? "" : "hidden"} `}
                    >
                      {service?.subPoint3}
                    </li>
                  )}
                  {service?.subPoint4 && (
                    <li
                      className={`mt-3 ${service?.subPoint4 ? "" : "hidden"} `}
                    >
                      {service?.subPoint4}
                    </li>
                  )}
                  {service?.subPoint5 && (
                    <li
                      className={`mt-3 ${service?.subPoint5 ? "" : "hidden"} `}
                    >
                      {service?.subPoint5}
                    </li>
                  )}
                  {service?.subPoint6 && (
                    <li
                      className={`mt-3 ${service?.subPoint6 ? "" : "hidden"} `}
                    >
                      {service?.subPoint6}
                    </li>
                  )}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default HomeContent;
