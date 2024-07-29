import Image from "next/image";
import React from "react";
import BP from "/public/assets/images/SizeChart/BP.png";
import BR from "/public/assets/images/SizeChart/BR.png";
import W from "/public/assets/images/SizeChart/W.png";
import ID from "/public/assets/images/SizeChart/ID.png";
import OD from "/public/assets/images/SizeChart/OD.png";
import WP from "/public/assets/images/SizeChart/WP.png";

const SizeChart = ({ sizeChartDetails }) => {
  // sizeChartDetails.forEach((details) => {
  //   const {
  //     'product_BP_bar': product_BP_bar,
  //     'product_BP_psi': product_BP_psi,
  //     'product_BR/r_inch': product_BR_r_inch,
  //     'product_BR/r_mm': product_BR_r_mm,
  //     'product_DN': product_DN,
  //     'product_ID_inch': product_ID_inch,
  //     'product_ID_mm': product_ID_mm,
  //     'product_Max_BP_@_23°C': product_Max_BP_at_23C,
  //     'product_Max_WP_@_23°C': product_Max_WP_at_23C,
  //     'product_Max_WP_bar_@_27°C': product_Max_WP_bar_at_27C,
  //     'product_Min_BP_bar_@_27°C': product_Min_BP_bar_at_27C,
  //     'product_OD_inch': product_OD_inch,
  //     'product_OD_mm': product_OD_mm,
  //     'product_WP_bar': product_WP_bar,
  //     'product_WP_psi': product_WP_psi,
  //     'product_WT': product_WT,
  //     'product_W_g/m': product_W_g_per_m,
  //     'product_W_kgm': product_W_kgm,
  //     'product_dash_size': product_dash_size,
  //     'product_item code': product_item_code,
  //     'product_sub_types_id': product_sub_types_id,
  //     'product_v': product_v,
  //     'product_vacuum_hg_@_70°F/27°C_mm': product_vacuum_hg_at_70F_27C_mm
  //   } = details;

  //   // console.log(product_BP_bar, product_BP_psi, product_BR_r_inch, product_BR_r_mm, product_DN, product_ID_inch, product_ID_mm, product_Max_BP_at_23C, product_Max_WP_at_23C, product_Max_WP_bar_at_27C, product_Min_BP_bar_at_27C, product_OD_inch, product_OD_mm, product_WP_bar, product_WP_psi, product_WT, product_W_g_per_m, product_W_kgm, product_dash_size, product_item_code, product_sub_types_id, product_v, product_vacuum_hg_at_70F_27C_mm);
  // });

  return (
    <>
      <table className="table-auto border-collapse text-xs">
        <thead>
          <tr className="text-newgold">
            <th
              className="px-4 py-2 border border-l-newgold bg-offwhite "
              rowSpan="2"
            >
              Item Code
            </th>
            <th className="px-4 py-2 border bg-offwhite" rowSpan="2">
              Dash size
            </th>
            <th className="px-4 py-2 border bg-offwhite" rowSpan="2">
              DN
            </th>
            <th className="px-4 py-2 border bg-offwhite" colSpan="2">
              <div className="flex flex-col items-center">
                <Image src={ID} width={30} height={30} alt="ID" />
                <span className="mt-2 text-newgold">ID</span>
              </div>
            </th>
            <th className="px-4 py-2 border bg-offwhite" colSpan="2">
              <div className="flex flex-col items-center">
                <Image src={OD} width={30} height={30} alt="OD" />
                <span className="mt-2 text-newgold">OD</span>
              </div>
            </th>
            <th className="px-4 py-2 border bg-offwhite" colSpan="2">
              <div className="flex flex-col items-center">
                <Image src={WP} width={30} height={30} alt="WP" />
                <span className="mt-2 text-newgold">WP</span>
              </div>
            </th>
            <th className="px-4 py-2 border bg-offwhite" colSpan="2">
              <div className="flex flex-col items-center">
                <Image src={BP} width={30} height={30} alt="BP" />
                <span className="mt-2 text-newgold">BP</span>
              </div>
            </th>
            <th className="px-4 py-2 border bg-offwhite" colSpan="2">
              <div className="flex flex-col items-center">
                <Image src={BR} width={30} height={30} alt="BR" />
                <span className="mt-2 text-newgold">BR/r</span>
              </div>
            </th>
            <th
              className="px-4 py-2 border border-r-offwhite bg-offwhite"
              colSpan="2"
            >
              <div className="flex flex-col items-center">
                <Image src={W} width={30} height={30} alt="W" />
                <span className="mt-2 text-newgold">W</span>
              </div>
            </th>
          </tr>
          <tr>
            <th className="px-4 py-2 border bg-offwhite text-newgold">inch</th>
            <th className="px-4 py-2 border bg-offwhite text-newgold">mm</th>
            <th className="px-4 py-2 border bg-offwhite text-newgold">inch</th>
            <th className="px-4 py-2 border bg-offwhite text-newgold">mm</th>
            <th className="px-4 py-2 border bg-offwhite text-newgold">psi</th>
            <th className="px-4 py-2 border bg-offwhite text-newgold">bar</th>
            <th className="px-4 py-2 border bg-offwhite text-newgold">psi</th>
            <th className="px-4 py-2 border bg-offwhite text-newgold">bar</th>
            <th className="px-4 py-2 border bg-offwhite text-newgold">inch</th>
            <th className="px-4 py-2 border bg-offwhite text-newgold">mm</th>
            <th className="px-4 py-2 border  border-r-offwhite text-newgold bg-offwhite">
              kg/m
            </th>
          </tr>
        </thead>
        <tbody >
          {sizeChartDetails.map((details, index) => (
            <tr key={index} className="text-[12px] font-medium">
              <td className="px-4 py-2 text-center border border-newgold">
                {details["product_item code"]
                  ? details["product_item code"]
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
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default SizeChart;
