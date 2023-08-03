import React, { useState } from "react";
import Avatar from "./Avatar";
import { Tags } from "./Tags";
import DetailInfo from "./DetailInfo";
import ReadMore from "./ReadMore";

const Card = () => {
  const [isVisible, setVisible] = useState(false);
  return (
    <div className="  shadow-lg rounded-lg p  outline-[red] my-5 ">
      <div className="max-w-sm rounded p-2 overflow-hidden shadow-lg">
        <Avatar />
        <DetailInfo />
        <Tags />
        <div className=" m-2 ">
          <button
            onClick={() => setVisible(!isVisible)}
            className="px-4 py-3 font-mono text-lg rounded-md bg-blue-600 text-white m-2"
          >
            {!isVisible ? "Read More" : "See Less"}
          </button>
        </div>
        {isVisible && <ReadMore />}
      </div>
    </div>
  );
};

export default Card;
