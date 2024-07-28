"use client";
import React, { useEffect, useState } from "react";
import ProductCard from "@/custom_components/product-ui/ProductCard";
import { mainProductImages, mainProducts } from "@/staticdata/static";
import HeroMain from "@/custom_components/home-ui/hero-main/page";
import { services } from "@/staticdata/static";
import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useData } from "../contextapi/contextData";
import Table from "@/custom_components/table/Table";
import CustomAccordian from "@/custom_components/CustomAccordian/CustomAccordian";

const HomeContent = () => {
  // Destructuring Context Data from contextData.js
  // const { productData, loading } = useData();
  return (
    <main>
      <section>
        <HeroMain />
        <section className="bg-newgold pt-20 pb-20 ">
          <h1 className="text-2xl md:text-4xl text-center text-white font-semibold ">
            About us
          </h1>
          <div className="flex flex-col justify-center items-center  text-white">
          <p className="max-smallest:text-xs text-sm sm:text-base lg:text-lg mt-3 text-justify max-smallest:mx-5 smallest:max-sm:mx-10  max-xl:mx-20 max-w-[74rem]">
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
            src="/assets/icons/WaveBottom.png"
            alt="waves"
            width={500}
            height={400}
            className="w-full -mb-[4px]"
          />
        </div>
        <h1 className="text-3xl text-center text-newgold font-semibold">
          Our Products
        </h1>
        <div className="lg:pt-12 pt-16 flex items-center justify-center max-smallest:mx-5 ">
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

             { mainProducts?.map((item, index) => {
                  return (
                    <ProductCard
                      key={item.product_id}
                      keyId={item.product_id}
                      name={item.product_name}
                      href={`/${item.product_name_id}`}
                      imageSrc={item?.image}
                      imageAlt={item?.alt}
                    
                    />
                  );
                })}
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
      </div>


      <section className="bg-newgold grid small:grid-cols-2  md:grid-cols-4 gap-6 py-10 text-offwhite ">
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

      
      <section className="flex justify-center">
        <div className="mt-20 max-smallest:mx-5 smallest:max-sm:mx-10  max-xl:mx-20 max-w-[74rem]">
          <h1 className="text-newgold text-3xl mb-6 text-center font-semibold">
            Our Services
          </h1>
          <div className="  grid small:grid-cols-2 md:grid-cols-3 gap-6 mb-20">
            {services.slice(0, 3)?.map((service, index) => (
              <CustomAccordian key={index} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default HomeContent;
