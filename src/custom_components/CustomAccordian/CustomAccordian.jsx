import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
export default function CustomAccordian({ service, index, header }) {
  return (
      <div key={index} className=" h-full rounded-md ">
        <Accordion
          type="single"
          collapsible
          className="w-full bg-offhwhite rounded-md  shadow-xl  border-2 border-newgold"
        >
          <AccordionItem value={service?.name} className="border-none">
            <AccordionTrigger className="hover:no-underline text-newgold hover:bg-newgold hover:text-offwhite  font-semibold px-4 ">
              <h1 className=" max-galaxyFold:text-base  text-[16px]   z-10 ">
                {service?.name && service?.name}
              </h1>
            </AccordionTrigger>

            <AccordionContent>
              
                <p className="my-2 ml-4 text-xs smallest:text-sm  lg:text-base">
                  {header}
                </p>
        
              <div className=" text-[14px] font-medium text-newgold ">
                <ul className="list-disc  px-8">

                {service?.subPoint1 && (
                  <li className="mt-3">{service?.subPoint1}</li>
                )}
                {service?.subPoint2 && (
                  <li className="mt-3">{service?.subPoint2}</li>
                )}
                {service?.subPoint3 && (
                  <li className={`mt-3 ${service?.subPoint3 ? "" : "hidden"} `}>
                    {service?.subPoint3}
                  </li>
                )}
                {service?.subPoint4 && (
                  <li className={`mt-3 ${service?.subPoint4 ? "" : "hidden"} `}>
                    {service?.subPoint4}
                  </li>
                )}
                {service?.subPoint5 && (
                  <li className={`mt-3 ${service?.subPoint5 ? "" : "hidden"} `}>
                    {service?.subPoint5}
                  </li>
                )}
                {service?.subPoint6 && (
                  <li className={`mt-3 ${service?.subPoint6 ? "" : "hidden"} `}>
                    {service?.subPoint6}
                  </li>
                )}
                </ul>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
  );
}
