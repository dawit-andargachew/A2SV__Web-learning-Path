import React from "react";

const DetailInfo = ({ defailInfo }) => {
  return (
    // shows detail info
    <div className="px-6 py-4  bg-gray-200 rounded-md shadow-md  mx-2 my-5 ">
      <div className="font-bold text-xl mb-2 font-mono">{defailInfo.title}</div>
      <p className="text-gray-700 text-base"> {defailInfo.description}</p>
    </div>
  );
};

export default DetailInfo;
