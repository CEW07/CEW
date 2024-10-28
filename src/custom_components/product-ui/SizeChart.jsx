import Image from "next/image";
import React from "react";
import BP from "/public/assets/images/SizeChart/BP.png";
import BR from "/public/assets/images/SizeChart/BR.png";
import W from "/public/assets/images/SizeChart/W.png";
import ID from "/public/assets/images/SizeChart/ID.png";
import OD from "/public/assets/images/SizeChart/OD.png";
import WP from "/public/assets/images/SizeChart/WP.png";

const SizeChart = ({ productSizeChart }) => {
  const getColumnHeaders = () => {
    const headers = [
      { key: "product_item_code", label: "Item Code" },
      {
        key: "product_ID",
        label: "ID",
        img: ID,
        subheaders: ["inch", "mm"],
        keys: ["product_ID_inch", "product_ID_mm"],
      },
      {
        key: "product_OD",
        label: "OD",
        img: OD,
        subheaders: ["inch", "mm"],
        keys: ["product_OD_inch", "product_OD_mm"],
      },
      { key: "product_WT", label: "Wall thickness" },
      {
        key: "product_WP",
        label: "WP",
        img: WP,
        subheaders: ["psi", "bar"],
        keys: ["product_WP_psi", "product_WP_bar"],
      },
      {
        key: "product_BP",
        label: "BP",
        img: BP,
        subheaders: ["psi", "bar"],
        keys: ["product_BP_psi", "product_BP_bar"],
      },
      { key: "product_v", label: "Vacuum" },
      {
        key: "product_BR",
        label: "BR/r",
        img: BR,
        subheaders: ["inch", "mm"],
        keys: ["product_BR_r_inch", "product_BR_r_mm"],
      },
      { key: "product_W_kgm", label: "W (kg/m)", img: W },

      { key: "product_dash_size", label: "Dash size" },
      { key: "product_DN", label: "DN" },
      {
        key: "product_Max_WP_bar_@_27°C",
        label: "MAX WORKING PRESSURE (IN BAR) @ 27°C",
      },
      { key: "product_Min_BP_bar_@_27°C", label: "MIN BURST PRESSURE" },
      {
        key: "product_vacuum_hg_@_70°F_27°C_mm",
        label: "VACUUM Hg @ 70°F/27°C (IN MM)",
      },
      { key: "product_Max_WP_@_23°C", label: "Max WP @ 23°C" },
      { key: "product_Max_BP_@_23°C", label: "Max BP @ 23°C" },
      { key: "product_W_g_m", label: "W g/m" },
      { key: "product_Min_WP_bar", label: "MIN WP bar" },
    ];

    return headers
      .map((header) => {
        if (header.keys) {
          // Filter out empty subcolumns and align subheaders
          const validKeys = header.keys.filter((key, index) =>
            productSizeChart.some((product) => product[key])
          );
          const validSubheaders = header.subheaders.filter((_, index) =>
            productSizeChart.some((product) => product[header.keys[index]])
          );

          if (validKeys.length > 0) {
            return {
              ...header,
              keys: validKeys,
              subheaders: validSubheaders,
            };
          }
          return null;
        } else {
          // Handle non-subcolumn headers
          return productSizeChart.some((product) => product[header.key])
            ? header
            : null;
        }
      })
      .filter(Boolean);
  };

  const headers = getColumnHeaders();

  return (
    <table className="table-auto border-collapse ">
      <thead className="bg-gray-100">
        <tr>
          {headers.map((header, index) => (
            <th
              key={header.key}
              className={`max-mainProducts:px-3 px-1 py-2 border border-gray-300 whitespace-normal break-words text-center mainProducts:w-[150px]  leading-tight
          ${index === 0 ? "border-l-newgold" : ""} 
          ${index === headers.length - 1 ? "border-r-newgold" : ""}`}
              colSpan={header.subheaders ? header.subheaders.length : 1}
              rowSpan={header.subheaders ? 1 : 2}
            >
              <div className="flex flex-col items-center">
                {header.img && (
                  <Image
                    src={header.img}
                    width={30}
                    height={30}
                    alt={header.label}
                  />
                )}
                <span className="mt-2 text-offwhite text-[13px]">
                  {header.label}
                </span>
              </div>
            </th>
          ))}
        </tr>
        {/* Subheadings */}
        <tr className="bg-gray-200">
          {headers.map(
            (header, index) =>
              header.subheaders &&
              header.subheaders.map((subheader, subIndex) => (
                <th
                  key={`${header.key}-${subIndex}`}
                  className={`max-mainProducts:px-3 px-1 py-2 border border-gray-300 whitespace-normal break-words text-[13px] 
              ${index === 0 && subIndex === 0 ? "border-l-newgold" : ""} 
              ${
                index === headers.length - 1 &&
                subIndex === header.subheaders.length - 1
                  ? "border-r-newgold"
                  : ""
              }`}
                >
                  {subheader}
                </th>
              ))
          )}
        </tr>
      </thead>

      <tbody>
        {productSizeChart.map((product, index) => (
          <tr key={index}>
            {headers.map((header) =>
              header.keys ? (
                header.keys.map((key) => (
                  <td
                    key={key}
                    className="max-mainProducts:px-3 px-1 py-2 border border-newgold  text-[13px]"
                  >
                    {product[key]}
                  </td>
                ))
              ) : (
                <td
                  key={header.key}
                  className="max-mainProducts:px-3 px-1 py-2 border border-newgold  text-[13px]"
                >
                  {product[header.key]}
                </td>
              )
            )}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default SizeChart;
