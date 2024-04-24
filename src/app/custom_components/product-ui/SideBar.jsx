import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { products } from "@/app/staticdata/static";
import Link from "next/link";

const SidebarProduct = ({ productData, loading }) => {
  // Destructuring ProductData
  const { productCategories, productTypes, productSubTypes } = productData;
  // console.log(productData, "products");
  // console.log(productCategories, "products");

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          {/* Mapping of product categories */}
          {productCategories.map((item) => (
            <div className="bg-offwhite" key={item.product_name_id}>
              <Accordion
                type="single"
                collapsible
                className="py-2 px-10"
                key={item.product_name_id}
              >
                <AccordionItem value={`item-1`} key={item.product_name_id}>
                  <AccordionTrigger className="hover:no-underline text-newgold">
                    {item.product_name}
                  </AccordionTrigger>
                  {/* Filtering & Mapping of product types & Subtypes */}
                  {productTypes
                    .filter(
                      (type) => type.product_name_id === item.product_name_id
                    )
                    .map((type) => (
                      <React.Fragment key={type.product_type_id}>
                        <AccordionContent className="text-[14px] font-medium">
                          {type.product_types}
                        </AccordionContent>
                        {productSubTypes
                          .filter(
                            (subType) =>
                              subType.product_type_id === type.product_type_id
                          )
                          .map((subType) => (
                            <AccordionContent
                              className="text-[12px] text-newgold font-semibold cursor-pointer "
                              key={subType.product_sub_type_id}
                            >
                              <Link
                                href={`/pages/products/${type.product_name_id}/productdetails/${subType.product_sub_type_id}`}
                              >
                                {subType.product_sub_type_name}  
                              </Link>
                            </AccordionContent>
                          ))}
                      </React.Fragment>
                    ))}
                </AccordionItem>
              </Accordion>
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default React.memo(SidebarProduct);

{
  /* <AccordionContent className="text-[12px]" key={item.product_type_id} >
{item.product_name_id === type.product_name_id
  ? type.product_types
  : "data here" +item.product_type_id }
</AccordionContent> */
}
