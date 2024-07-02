import Image from "next/image";
import React from "react";
import BP from "/public/assests/images/SizeChart/BP.png";
import BR from "/public/assests/images/SizeChart/BR.png";
import W from "/public/assests/images/SizeChart/W.png";
import ID from "/public/assests/images/SizeChart/ID.png";
import OD from "/public/assests/images/SizeChart/OD.png";
import WP from "/public/assests/images/SizeChart/WP.png";

const SizeChart = () => {
  return (
    <div className="max">
      <table className=" text-xs">
        <thead>
          <tr>
            <th className="px-4 py-2 border bg-newgold" rowSpan="2">
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
                <Image src={ID} width={40} height={40} alt="ID" />
                <span className="mt-2">ID</span>
              </div>
            </th>
            <th className="px-4 py-2 border bg-newgold" colSpan="2">
              <div className="flex flex-col items-center">
                <Image src={OD} width={40} height={40} alt="OD" />
                <span className="mt-2">OD</span>
              </div>
            </th>
            <th className="px-4 py-2 border bg-newgold" colSpan="2">
              <div className="flex flex-col items-center">
                <Image src={WP} width={40} height={40} alt="WP" />
                <span className="mt-2">WP</span>
              </div>
            </th>
            <th className="px-4 py-2 border bg-newgold" colSpan="2">
              <div className="flex flex-col items-center">
                <Image src={BP} width={40} height={40} alt="BP" />
                <span className="mt-2">BP</span>
              </div>
            </th>
            <th className="px-4 py-2 border bg-newgold" colSpan="2">
              <div className="flex flex-col items-center">
                <Image src={BR} width={40} height={40} alt="BR" />
                <span className="mt-2">BR/r</span>
              </div>
            </th>
            <th className="px-4 py-2 border bg-newgold" colSpan="2">
              <div className="flex flex-col items-center">
                <Image src={W} width={40} height={40} alt="W" />
                <span className="mt-2">W</span>
              </div>
            </th>
          </tr>
          <tr>
            <th className="px-4 py-2 border bg-newgold">inch</th>
            <th className="px-4 py-2 border bg-newgold">mm</th>
            <th className="px-4 py-2 border bg-newgold">inch</th>
            <th className="px-4 py-2 border bg-newgold">mm</th>
            <th className="px-4 py-2 border bg-newgold">psi</th>
            <th className="px-4 py-2 border bg-newgold">bar</th>
            <th className="px-4 py-2 border bg-newgold">psi</th>
            <th className="px-4 py-2 border bg-newgold">bar</th>
            <th className="px-4 py-2 border bg-newgold">inch</th>
            <th className="px-4 py-2 border bg-newgold">mm</th>
            <th className="px-4 py-2 border bg-newgold">kg/m</th>
          </tr>
        </thead>
        <tbody>
          <tr className="text-center">
            <td className="px-2 py-2 border-2 border-[#CDD3D5]">PH253-03</td>
            <td className="px-2 py-2 border-2 border-[#CDD3D5]">-03</td>
            <td className="px-2 py-2 border-2 border-[#CDD3D5]">05</td>
            <td className="px-2 py-2 border-2 border-[#CDD3D5]">3/16</td>
            <td className="px-2 py-2 border-2 border-[#CDD3D5]">5.1</td>
            <td className="px-2 py-2 border-2 border-[#CDD3D5]">0.45</td>
            <td className="px-2 py-2 border-2 border-[#CDD3D5]">11.5</td>
            <td className="px-2 py-2 border-2 border-[#CDD3D5]">3625</td>
            <td className="px-2 py-2 border-2 border-[#CDD3D5]">250</td>
            <td className="px-2 py-2 border-2 border-[#CDD3D5]">14500</td>
            <td className="px-2 py-2 border-2 border-[#CDD3D5]">1000</td>
            <td className="px-2 py-2 border-2 border-[#CDD3D5]">3.5</td>
            <td className="px-2 py-2 border-2 border-[#CDD3D5]">90</td>
            <td className="px-2 py-2 border-2 border-[#CDD3D5]">0.205</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default SizeChart;
