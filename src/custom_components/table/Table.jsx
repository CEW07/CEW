import React from "react";
import "./table.css";

const Table = ({ tableValues }) => {
  
  return <div dangerouslySetInnerHTML={{ __html: tableValues }}></div>;
};

export default Table;