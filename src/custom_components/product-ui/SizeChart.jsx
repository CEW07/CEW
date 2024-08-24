import Image from "next/image";
import React from "react";
import BP from "/public/assets/images/SizeChart/BP.png";
import BR from "/public/assets/images/SizeChart/BR.png";
import W from "/public/assets/images/SizeChart/W.png";
import ID from "/public/assets/images/SizeChart/ID.png";
import OD from "/public/assets/images/SizeChart/OD.png";
import WP from "/public/assets/images/SizeChart/WP.png";

const SizeChart = ({ productSizeChart }) => {
  return (
    <>
      <table className="table-auto border-collapse text-xs">
        <thead>
          <tr className="text-offwhite">
            <th
              className="px-4 py-2 border border-l-newgold bg-newgold "
              rowSpan="2"
            >
              Item Code
            </th>
            <th className="px-4 py-2 border bg-newgold" rowSpan="2">
              Dash size
            </th>
            <th className="px-4 py-2 border bg-newgold" rowSpan="2">
              DN
            </th>
            <th className="px-4 py-2 border bg-newgold" colSpan="2">
              <div className="flex flex-col items-center">
                <Image src={ID} width={30} height={30} alt="ID" />
                <span className="mt-2 text-offwhite">ID</span>
              </div>
            </th>
            <th className="px-4 py-2 border bg-newgold" colSpan="2">
              <div className="flex flex-col items-center">
                <Image src={OD} width={30} height={30} alt="OD" />
                <span className="mt-2 text-offwhite">OD</span>
              </div>
            </th>
            <th className="px-4 py-2 border bg-newgold" colSpan="2">
              <div className="flex flex-col items-center">
                <Image src={WP} width={30} height={30} alt="WP" />
                <span className="mt-2 text-offwhite">WP</span>
              </div>
            </th>
            <th className="px-4 py-2 border bg-newgold" colSpan="2">
              <div className="flex flex-col items-center">
                <Image src={BP} width={30} height={30} alt="BP" />
                <span className="mt-2 text-offwhite">BP</span>
              </div>
            </th>
            <th className="px-4 py-2 border bg-newgold" colSpan="2">
              <div className="flex flex-col items-center">
                <Image src={BR} width={30} height={30} alt="BR" />
                <span className="mt-2 text-offwhite">BR/r</span>
              </div>
            </th>
            <th className="px-4 py-2 border bg-newgold" colSpan="1">
              <div className="flex flex-col items-center">
                <Image src={W} width={30} height={30} alt="W" />
                <span className="mt-2 text-offwhite">W</span>
              </div>
            </th>

            <th className="px-4 py-2 border bg-newgold" rowSpan="2">
              Vaccum
            </th>
            <th className="px-4 py-2 border bg-newgold" rowSpan="2">
              Wall thickness
            </th>
            <th className="px-4 py-2 border bg-newgold" rowSpan="2">
              MAX WORKING PRESSURE (IN BAR) @ 27°C
            </th>
            <th className="px-4 py-2 border bg-newgold" rowSpan="2">
              MIN BURST PRESSURE
            </th>
            <th className="px-4 py-2 border bg-newgold" rowSpan="2">
              VACCUM Hg @ 70°F/27°C (IN MM)
            </th>
            <th className="px-4 py-2 border bg-newgold" rowSpan="2">
              Max WP @ 23°C
            </th>
            <th className="px-4 py-2 border bg-newgold" rowSpan="2">
              Max BP @ 23°C
            </th>
            <th className="px-4 py-2 border bg-newgold" rowSpan="2">
              W g/m
            </th>
            <th className="px-4 py-2 border bg-newgold" rowSpan="2">
            MIN WP bar
            </th>
          </tr>
          <tr>
            <th className="px-4 py-2 border bg-newgold text-offwhite">inch</th>
            <th className="px-4 py-2 border bg-newgold text-offwhite">mm</th>
            <th className="px-4 py-2 border bg-newgold text-offwhite">inch</th>
            <th className="px-4 py-2 border bg-newgold text-offwhite">mm</th>
            <th className="px-4 py-2 border bg-newgold text-offwhite">psi</th>
            <th className="px-4 py-2 border bg-newgold text-offwhite">bar</th>
            <th className="px-4 py-2 border bg-newgold text-offwhite">psi</th>
            <th className="px-4 py-2 border bg-newgold text-offwhite">bar</th>
            <th className="px-4 py-2 border bg-newgold text-offwhite">inch</th>
            <th className="px-4 py-2 border bg-newgold text-offwhite">mm</th>
            <th className="px-4 py-2 border  text-offwhite bg-newgold">kg/m</th>
          </tr>
        </thead>
        <tbody>
          {productSizeChart?.map((details, index) => (
            <tr key={index} className="text-[10px] font-medium">
              <td className="px-4 py-2 text-center border text-nowrap border-newgold">
                {details["product_item_code"]
                  ? details["product_item_code"]
                  : "--"}
              </td>
              <td className="px-4 py-2 text-center border border-newgold">
                {details["product_dash_size"]
                  ? details["product_dash_size"]
                  : "--"}
              </td>
              <td className="px-4 py-2 text-center border border-newgold">
                {details["product_DN"] ? details["product_DN"] : "--"}
              </td>
              <td className="px-4 py-2 text-center border border-newgold">
                {details["product_ID_inch"] ? details["product_ID_inch"] : "--"}
              </td>
              <td className="px-4 py-2 text-center border border-newgold">
                {details["product_ID_mm"] ? details["product_ID_mm"] : "--"}
              </td>
              <td className="px-4 py-2 text-center border border-newgold">
                {details["product_OD_inch"] ? details["product_OD_inch"] : "--"}
              </td>
              <td className="px-4 py-2 text-center border border-newgold">
                {details["product_OD_mm"] ? details["product_OD_mm"] : "--"}
              </td>
              <td className="px-4 py-2 text-center border border-newgold">
                {details["product_WP_psi"] ? details["product_WP_psi"] : "--"}
              </td>
              <td className="px-4 py-2 text-center border border-newgold">
                {details["product_WP_bar"] ? details["product_WP_bar"] : "--"}
              </td>
              <td className="px-4 py-2 text-center border border-newgold">
                {details["product_BP_psi"] ? details["product_BP_psi"] : "--"}
              </td>
              <td className="px-4 py-2 text-center border border-newgold">
                {details["product_BP_bar"] ? details["product_BP_bar"] : "--"}
              </td>
              <td className="px-4 py-2 text-center border border-newgold">
                {details["product_BR/r_inch"]
                  ? details["product_BR/r_inch"]
                  : "--"}
              </td>
              <td className="px-4 py-2 text-center border border-newgold">
                {details["product_BR/r_mm"] ? details["product_BR/r_mm"] : "--"}
              </td>
              <td className="px-4 py-2 text-center border border-newgold">
                {details["product_W_kgm"] ? details["product_W_kgm"] : "--"}
              </td>
              <td className="px-4 py-2 text-center border border-newgold">
                {details["product_v"] ? details["product_v"] : "--"}
              </td>
              <td className="px-4 py-2 text-center border border-newgold">
                {details["product_WT"] ? details["product_WT"] : "--"}
              </td>
              <td className="px-4 py-2 text-center border border-newgold">
                {details["product_Max_WP_bar_@_27°C"]
                  ? details["product_Max_WP_bar_@_27°C"]
                  : "--"}
              </td>
              <td className="px-4 py-2 text-center border border-newgold">
                {details["product_Min_BP_bar_@_27°C"]
                  ? details["product_Min_BP_bar_@_27°C"]
                  : "--"}
              </td>
              <td className="px-4 py-2 text-center border border-newgold">
                {details["product_vacuum_hg_@_70°F/27°C_mm"]
                  ? details["product_vacuum_hg_@_70°F/27°C_mm"]
                  : "--"}
              </td>
              <td className="px-4 py-2 text-center border border-newgold">
                {details["product_Max_WP_@_23°C"]
                  ? details["product_Max_WP_@_23°C"]
                  : "--"}
              </td>
              <td className="px-4 py-2 text-center border border-newgold">
                {details["product_Max_BP_@_23°C"]
                  ? details["product_Max_BP_@_23°C"]
                  : "--"}
              </td>
              <td className="px-4 py-2 text-center border border-newgold">
                {details["product_W_g/m"] ? details["product_W_g/m"] : "--"}
              </td>
              <td className="px-4 py-2 text-center border border-newgold">
                {details["product_Min_WP_bar"] ? details["product_Min_WP_bar"] : "--"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default SizeChart;
