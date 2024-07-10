import React from "react";
import { services } from "@/app/staticdata/static";
import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
const Services = () => {
  return (
    <section className="">
      <div className="relative w-full  lg:h-[100vh] overflow-hidden">
        <Image
          fill
          src="/assests/images/service.jpg"
          className="w-full h-full object-cover shadow-md"
          alt="Hero Background"
        />
        <div className="absolute inset-0 bg-black opacity-50  "></div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center  text-white ">
          <h2 className="text-2xl lg:text-6xl font-bold">
            Services at Crown Engineering Works
          </h2>
          <p className="max-w-6xl text-base mt-6">
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

      <div className="mt-20 xl:mx-32  max-sm:mx-5 sm:mx-10 mb-20">
        <h1 className="text-newgold text-3xl mb-6 text-center font-semibold">
          Our Services
        </h1>
        <div className="  grid small:grid-cols-2 md:grid-cols-3 gap-6 ">
          {services?.map((service, index) => (
            <div key={index} className="">
              <div className=" ">
                <Accordion
                  type="single"
                  collapsible
                  className="w-full bg-lightgrey rounded-md px-4 shadow-xl"
                >
                  <AccordionItem value={service.name}>
                    <AccordionTrigger className="hover:no-underline">
                      <h1 className="text-newgold  max-galaxyFold:text-base  text-lg  z-10 items-center px-4">
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
  );
};

export default Services;
