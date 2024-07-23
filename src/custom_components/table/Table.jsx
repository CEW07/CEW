import React from 'react'

const Table = () => {
  return (
    // Table CEW56 
    // <div>
    //      <table className="table-auto border-collapse text-xs">
    //     <thead>
    //       <tr>
    //         <th
    //           className="px-4 py-2 border border-l-newgold bg-newgold "
    //           rowSpan="2"
    //         >
    //         Nominal hose size (inch)
    //         </th>
    //         <th className="px-4 py-2 border bg-newgold" rowSpan="2">
    //         Item code
    //         </th>
    //         <th className="px-4 py-2 border bg-newgold" rowSpan="2">
    //         Braid layers
    //         </th>
    //         <th className="px-4 py-2 border bg-newgold" rowSpan="2">
    //         Nominal OD
    //         </th>
    //         <th className="px-4 py-2 border bg-newgold" rowSpan="2">
    //         Nominal ID
    //         </th>
    //         <th className="px-4 py-2 border bg-newgold" colSpan="2">
    //           <div className="flex flex-col items-center">
    //             <span className="mt-2"> Minimum centerline bend radius (mm)</span>
    //           </div>
    //         </th>
    //         <th className="px-4 py-2 border bg-newgold" colSpan="3">
    //           <div className="flex flex-col items-center">
    //             <span className="mt-2">Pressure rating at 23⁰C (kg/m)</span>
    //           </div>
    //         </th>
    //         <th className="px-4 py-2 border bg-newgold" rowSpan="2">
    //         Weight (kg/m)
    //         </th>
    //       </tr>
    //       <tr>
    //         <th className="px-4 py-2 border bg-newgold">Static</th>
    //         <th className="px-4 py-2 border bg-newgold">Dynamic</th>
    //         <th className="px-4 py-2 border bg-newgold">Max working</th>
    //         <th className="px-4 py-2 border bg-newgold">Max test</th>
    //         <th className="px-4 py-2 border bg-newgold">Nominal burst</th>   
    //       </tr>
    //     </thead>
    //     <tbody >
    //         <tr  className="text-[12px] font-medium">
    //           <td className="px-4 py-2 text-center border border-gray-300">
    //            Data
    //           </td>
    //           <td className="px-4 py-2 text-center border border-gray-300">
    //             Data
    //           </td>
    //           <td className="px-4 py-2 text-center border border-gray-300">
    //             Data
    //           </td>
    //           <td className="px-4 py-2 text-center border border-gray-300">
    //             Data
    //           </td>
    //           <td className="px-4 py-2 text-center border border-gray-300">
    //             Data
    //           </td>
    //           <td className="px-4 py-2 text-center border border-gray-300">
    //             Data
    //           </td>
    //           <td className="px-4 py-2 text-center border border-gray-300">
    //             Data
    //           </td>
    //           <td className="px-4 py-2 text-center border border-gray-300">
    //             Data
    //           </td>
    //           <td className="px-4 py-2 text-center border border-gray-300">
    //             Data
    //           </td>
    //           <td className="px-4 py-2 text-center border border-gray-300">
    //             Data
    //           </td>
    //           <td className="px-4 py-2 text-center border border-gray-300">
    //             Data
    //           </td>
    //         </tr>
    //     </tbody>
    //   </table>
    // </div>




    // CEW57-JACKETED HJOSE
<div>
<table className="table-auto border-collapse text-xs">
<thead>
 <tr>
   <th className="px-4 py-2 border bg-newgold">
   Core (Internal hose)
   </th>
   <th className="px-4 py-2 border bg-newgold" >
     <div className="flex flex-col items-center">
       <span className="mt-2"> Jacket tracer conduit</span>
     </div>
   </th>
   <th className="px-4 py-2 border bg-newgold">
     <div className="flex flex-col items-center">
       <span className="mt-2">Threaded connection <br /> (Pipe thread) inches</span>
     </div>
   </th>
 </tr>

</thead>
<tbody >
   <tr  className="text-[12px] font-medium">
     <td className="px-4 py-2 text-center border border-gray-300">
      Data
     </td>
     <td className="px-4 py-2 text-center border border-gray-300">
       Data
     </td>
     <td className="px-4 py-2 text-center border border-gray-300">
       Data
     </td>
   </tr>
</tbody>
</table>
</div>




    // Table CEW66-SS  
    // <div>
    //      <table className="table-auto border-collapse text-xs">
    //     <thead>
    //       <tr>
    //         <th className="px-4 py-2 border bg-newgold" rowSpan="3">
    //         Item code
    //         </th>
    //         <th className="px-4 py-2 border bg-newgold" colSpan="1" rowSpan='2'>
    //           <div className="flex flex-col items-center">
    //             <span className="mt-2"> Nominal Bore</span>
    //           </div>
    //         </th>
    //         <th className="px-4 py-2 border bg-newgold" colSpan="2"  rowSpan='2'>
    //           <div className="flex flex-col items-center">
    //             <span className="mt-2">Length</span>
    //           </div>
    //         </th>
    //         <th className="px-4 py-2 border bg-newgold" colSpan="1" rowSpan='2'>
    //           <div className="flex flex-col items-center">
    //             <span className="mt-2">Max W.P</span>
    //           </div>
    //         </th>
    //         <th className="px-4 py-2 border bg-newgold" colSpan="3">
    //           <div className="flex flex-col items-center">
    //             <span className="mt-2">Movements</span>
    //           </div>
    //         </th>
    //         <th className="px-4 py-2 border bg-newgold" colSpan="1" rowSpan='2'>
    //           <div className="flex flex-col items-center">
    //             <span className="mt-2">Spring Rate</span>
    //           </div>
    //         </th>
    //         <th className="px-4 py-2 border bg-newgold" colSpan="1" rowSpan='2' >
    //           <div className="flex flex-col items-center">
    //             <span className="mt-2">Pressure Thrust</span>
    //           </div>
    //         </th>
    //       </tr>
    //       <tr>
    //         <th className="px-4 py-2 border bg-newgold">Axial</th>
    //         <th className="px-4 py-2 border bg-newgold">Lateral</th>   
    //         <th className="px-4 py-2 border bg-newgold">Angular</th>         
    //       </tr>
    //       <tr>
    //       <th className="px-4 py-2 border bg-newgold">(mm)</th>
    //       <th className="px-4 py-2 border bg-newgold">Flanged (mm)</th>
    //       <th className="px-4 py-2 border bg-newgold">Weld Ends (mm)</th>
    //       <th className="px-4 py-2 border bg-newgold">kPa</th> 
    //       <th className="px-4 py-2 border bg-newgold">(mm)</th> 
    //       <th className="px-4 py-2 border bg-newgold">(mm)</th> 
    //       <th className="px-4 py-2 border bg-newgold">(Deg)</th> 
    //       <th className="px-4 py-2 border bg-newgold">N/MM</th> 
    //         <th className="px-4 py-2 border bg-newgold">KN</th> 
    //       </tr>
    //     </thead>
    //     <tbody >
    //         <tr  className="text-[12px] font-medium">
    //           <td className="px-4 py-2 text-center border border-gray-300">
    //            Data
    //           </td>
    //           <td className="px-4 py-2 text-center border border-gray-300">
    //             Data
    //           </td>
    //           <td className="px-4 py-2 text-center border border-gray-300">
    //             Data
    //           </td>
    //           <td className="px-4 py-2 text-center border border-gray-300">
    //             Data
    //           </td>
    //           <td className="px-4 py-2 text-center border border-gray-300">
    //             Data
    //           </td>
    //           <td className="px-4 py-2 text-center border border-gray-300">
    //             Data
    //           </td>
    //           <td className="px-4 py-2 text-center border border-gray-300">
    //             Data
    //           </td>
    //           <td className="px-4 py-2 text-center border border-gray-300">
    //             Data
    //           </td>
    //           <td className="px-4 py-2 text-center border border-gray-300">
    //             Data
    //           </td>
    //           <td className="px-4 py-2 text-center border border-gray-300">
    //             Data
    //           </td>
    //         </tr>
    //     </tbody>
    //   </table>
    // </div>



    //  Table CEW67  
    // <div>
    //      <table className="table-auto border-collapse text-xs">
    //     <thead>
    //       <tr>
    //         <th className="px-4 py-2 border bg-newgold" rowSpan="3">
    //         Item code
    //         </th>
    //         <th className="px-4 py-2 border bg-newgold" colSpan="1" rowSpan='2'>
    //           <div className="flex flex-col items-center">
    //             <span className="mt-2"> Nominal Bore</span>
    //           </div>
    //         </th>
    //         <th className="px-4 py-2 border bg-newgold" colSpan="1"  rowSpan='2'>
    //           <div className="flex flex-col items-center">
    //             <span className="mt-2">Length</span>
    //           </div>
    //         </th>
    //         <th className="px-4 py-2 border bg-newgold" colSpan="1" rowSpan='2'>
    //           <div className="flex flex-col items-center">
    //             <span className="mt-2">Flare Diameter</span>
    //           </div>
    //         </th>
    //         <th className="px-4 py-2 border bg-newgold" colSpan="1" rowSpan='3'>
    //           <div className="flex flex-col items-center">
    //             <span className="mt-2">Max W.P (10⁰ C)</span>
    //           </div>
    //         </th>
    //         <th className="px-4 py-2 border bg-newgold" colSpan="2">
    //           <div className="flex flex-col items-center">
    //             <span className="mt-2">Movements</span>
    //           </div>
    //         </th>
            
    //         <th className="px-4 py-2 border bg-newgold" colSpan="1" rowSpan='2' >
    //           <div className="flex flex-col items-center">
    //             <span className="mt-2">Weight</span>
    //           </div>
    //         </th>
    //       </tr>
    //       <tr>
    //         <th className="px-4 py-2 border bg-newgold">± Maximum Travel </th>
    //         <th className="px-4 py-2 border bg-newgold">Maximum Misalignment </th>   
                  
    //       </tr>
    //       <tr>
    //       <th className="px-4 py-2 border bg-newgold">(mm)</th>
    //       <th className="px-4 py-2 border bg-newgold"> (mm)</th>
    //       <th className="px-4 py-2 border bg-newgold">(mm)</th>
    //       <th className="px-4 py-2 border bg-newgold">(mm)</th> 
    //       <th className="px-4 py-2 border bg-newgold">(mm)</th> 
    //       <th className="px-4 py-2 border bg-newgold">kg</th> 
    //       </tr>
    //     </thead>
    //     <tbody >
    //         <tr  className="text-[12px] font-medium">
    //           <td className="px-4 py-2 text-center border border-gray-300">
    //            Data
    //           </td>
    //           <td className="px-4 py-2 text-center border border-gray-300">
    //             Data
    //           </td>
    //           <td className="px-4 py-2 text-center border border-gray-300">
    //             Data
    //           </td>
    //           <td className="px-4 py-2 text-center border border-gray-300">
    //             Data
    //           </td>
    //           <td className="px-4 py-2 text-center border border-gray-300">
    //             Data
    //           </td>
    //           <td className="px-4 py-2 text-center border border-gray-300">
    //             Data
    //           </td>
    //           <td className="px-4 py-2 text-center border border-gray-300">
    //             Data
    //           </td>
    //           <td className="px-4 py-2 text-center border border-gray-300">
    //             Data
    //           </td>
            
    //         </tr>
    //     </tbody>
    //   </table>
    // </div>



     // CEW68-RUBBER EXPANSION JOINT
//      <div>
//      <table className="table-auto border-collapse text-xs">
//     <thead>
//       <tr>
//         <th className="px-4 py-2 border bg-newgold" rowSpan="3">
//         Item code
//         </th>
//         <th className="px-4 py-2 border bg-newgold" colSpan="1" rowSpan='2'>
//           <div className="flex flex-col items-center">
//             <span className="mt-2"> Nominal Bore</span>
//           </div>
//         </th>
//         <th className="px-4 py-2 border bg-newgold" colSpan="1"  rowSpan='2'>
//           <div className="flex flex-col items-center">
//             <span className="mt-2">Length</span>
//           </div>
//         </th>
//         <th className="px-4 py-2 border bg-newgold" colSpan="1" rowSpan='2'>
//           <div className="flex flex-col items-center">
//             <span className="mt-2">Max W.P</span>
//           </div>
//         </th>
        
//         <th className="px-4 py-2 border bg-newgold" colSpan="4">
//           <div className="flex flex-col items-center">
//             <span className="mt-2">Movements</span>
//           </div>
//         </th>
        
//         <th className="px-4 py-2 border bg-newgold" colSpan="1" rowSpan='2' >
//           <div className="flex flex-col items-center">
//             <span className="mt-2">Vacuum</span>
//           </div>
//         </th>
//       </tr>
//       <tr>
//         <th className="px-4 py-2 border bg-newgold">Axial Compression </th>
//         <th className="px-4 py-2 border bg-newgold">Axial Elongation </th>  
//         <th className="px-4 py-2 border bg-newgold">Lateral Deflection</th>
//         <th className="px-4 py-2 border bg-newgold">Angular Deflection </th>   
              
//       </tr>
//       <tr>
//       <th className="px-4 py-2 border bg-newgold">(mm)</th>
//       <th className="px-4 py-2 border bg-newgold"> (mm)</th>
//       <th className="px-4 py-2 border bg-newgold">kPa</th>
//       <th className="px-4 py-2 border bg-newgold">(mm)</th> 
//       <th className="px-4 py-2 border bg-newgold">(mm)</th> 
//       <th className="px-4 py-2 border bg-newgold">(mm)</th> 
//       <th className="px-4 py-2 border bg-newgold">(Deg)</th> 
//       <th className="px-4 py-2 border bg-newgold">Hg</th> 
//       </tr>
//     </thead>
//     <tbody >
//         <tr  className="text-[12px] font-medium">
//           <td className="px-4 py-2 text-center border border-gray-300">
//            Data
//           </td>
//           <td className="px-4 py-2 text-center border border-gray-300">
//             Data
//           </td>
//           <td className="px-4 py-2 text-center border border-gray-300">
//             Data
//           </td>
//           <td className="px-4 py-2 text-center border border-gray-300">
//             Data
//           </td>
//           <td className="px-4 py-2 text-center border border-gray-300">
//             Data
//           </td>
//           <td className="px-4 py-2 text-center border border-gray-300">
//             Data
//           </td>
//           <td className="px-4 py-2 text-center border border-gray-300">
//             Data
//           </td>
//           <td className="px-4 py-2 text-center border border-gray-300">
//             Data
//           </td>
        
//         </tr>
//     </tbody>
//   </table>
// </div>



    
  )
}

export default Table