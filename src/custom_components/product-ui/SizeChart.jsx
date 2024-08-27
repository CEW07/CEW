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
      { key: 'product_item_code', label: 'Item Code' },
      { key: 'product_dash_size', label: 'Dash size' },
      { key: 'product_DN', label: 'DN' },
      { key: 'product_ID_inch', label: 'ID', img: ID, subheaders: ['inch', 'mm'], keys: ['product_ID_inch', 'product_ID_mm'] },
      { key: 'product_OD_inch', label: 'OD', img: OD, subheaders: ['inch', 'mm'], keys: ['product_OD_inch', 'product_OD_mm'] },
      { key: 'product_WP_psi', label: 'WP', img: WP, subheaders: ['psi', 'bar'], keys: ['product_WP_psi', 'product_WP_bar'] },
      { key: 'product_BP_psi', label: 'BP', img: BP, subheaders: ['psi', 'bar'], keys: ['product_BP_psi', 'product_BP_bar'] },
      { key: 'product_BR/r_inch', label: 'BR/r', img: BR, subheaders: ['inch', 'mm'], keys: ['product_BR/r_inch', 'product_BR/r_mm'] },
      { key: 'product_W_kgm', label: 'W (kg/m)', img: W },
      { key: 'product_v', label: 'Vacuum' },
      { key: 'product_WT', label: 'Wall thickness' },
      { key: 'product_Max_WP_bar_@_27°C', label: 'MAX WORKING PRESSURE (IN BAR) @ 27°C' },
      { key: 'product_Min_BP_bar_@_27°C', label: 'MIN BURST PRESSURE' },
      { key: 'product_vacuum_hg_@_70°F/27°C_mm', label: 'VACUUM Hg @ 70°F/27°C (IN MM)' },
      { key: 'product_Max_WP_@_23°C', label: 'Max WP @ 23°C' },
      { key: 'product_Max_BP_@_23°C', label: 'Max BP @ 23°C' },
      { key: 'product_W_g/m', label: 'W g/m' },
      { key: 'product_Min_WP_bar', label: 'MIN WP bar' },
    ];

    return headers.filter(header => productSizeChart.some(detail => header.keys ? header.keys.some(key => detail[key]) : detail[header.key]));
  };

  const headers = getColumnHeaders();

  // Separate headers with subheaders
  const mainHeaders = headers.filter(header => header.subheaders);
  const singleHeaders = headers.filter(header => !header.subheaders);

  return (
    <>
      <table className="table-auto border-collapse text-xs">
        <thead>
          <tr className="text-offwhite">
            {singleHeaders.map((header, index) => (
              <th key={index} className={`px-4 py-2 border ${index === 0 ? 'border-l-newgold' : ''} bg-newgold`}>
                {header.img ? (
                  <div className="flex flex-col items-center">
                    <Image src={header.img} width={30} height={30} alt={header.label} />
                    <span className="mt-2 text-offwhite">{header.label}</span>
                  </div>
                ) : (
                  header.label
                )}
              </th>
            ))}
            {mainHeaders.map((header, index) => (
              <th key={index} colSpan={header.subheaders.length} className="px-4 py-2 border bg-newgold">
                {header.img && <Image src={header.img} width={30} height={30} alt={header.label} />}
                <div>{header.label}</div>
              </th>
            ))}
          </tr>

          <tr>
            {singleHeaders.map((header, index) => (
              <th key={index} className="px-4 py-2 border bg-newgold text-offwhite">
                --
              </th>
            ))}
            {mainHeaders.flatMap(header => header.subheaders.map((subheader, subIndex) => (
              <th key={subIndex} className="px-4 py-2 border bg-newgold text-offwhite">
                {subheader}
              </th>
            )))}
          </tr>
        </thead>
        <tbody>
          {productSizeChart?.filter(details => headers.some(header => header.keys ? header.keys.some(key => details[key]) : details[header.key])).map((details, index) => (
            <tr key={index} className="text-[10px] font-medium">
              {singleHeaders.map((header, headerIndex) => (
                <td key={headerIndex} className="px-4 py-2 text-center border border-newgold">
                  {details[header.key] || '--'}
                </td>
              ))}
              {mainHeaders.flatMap(header => header.keys.map((key, keyIndex) => (
                <td key={keyIndex} className="px-4 py-2 text-center border border-newgold">
                  {details[key] || '--'}
                </td>
              )))}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default SizeChart;
