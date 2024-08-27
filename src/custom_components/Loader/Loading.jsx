import React from "react";
import  './Loading.css'

const Loading = () => {
  return (
    <div>
      <svg className="loading" viewBox="25 25 50 50">
        <circle className="LoadingCircle" r="20" cy="50" cx="50"></circle>
      </svg>
    </div>
  );
};

export default Loading;
