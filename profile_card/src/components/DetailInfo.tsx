import React from "react";
import { Data } from "../models/model";
interface Props {
  detailInfo: Data["defailInfo"];
}

const DetailInfo = ({ detailInfo }: Props) => {
  return (
    // shows detail info
    <div className="px-6 py-4  bg-gray-200 rounded-md shadow-md  mx-2 my-5 ">
      <div className="font-bold text-xl mb-2 font-mono">{detailInfo.title}</div>
      <p className="text-gray-700 text-base"> {detailInfo.description}</p>
    </div>
  );
};

export default DetailInfo;
