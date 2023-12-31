import React, { useState } from "react";
import Avatar from "./Avatar";
import { Tags } from "./Tags";
import DetailInfo from "./DetailInfo";
import ReadMore from "./ReadMore";
import { Data } from "../models/model";

const Card = () => {
  
  // a dummy data based on Data interface
  const dummyData: Data = {
    defailInfo: {
      title: "The Coldest Sunset",
      description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
      quia, nulla! Maiores et perferendis eaque, exercitationem praesentium
      nihil. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      Voluptatibus quia,`,
    },
    image:
      "https://image.shutterstock.com/image-photo/young-handsome-man-beard-wearing-260nw-1768126784.jpg",
    readmore: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
    quia, nulla! Maiores et perferendis eaque, exercitationem praesentium
    nihil. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
    Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem
    praesentium nihil. Lorem ipsum dolor sit amet, consectetur adipisicing
    elit. Voluptatibus quia, nulla! Maiores et perferendis eaque,
    exercitationem praesentium nihil.`,
    tags: ["#photography", "  #travel", "#winter"],
  };

  /// contain other components and a state hook to display ReadMore section when the button is clicked
  const [isVisible, setVisible] = useState(false);
  return (
    <div className="  shadow-lg rounded-lg p  outline-[red] my-5 ">
      <div className="max-w-sm rounded p-2 overflow-hidden shadow-lg">
        <Avatar imageURL={dummyData.image} />
        <DetailInfo detailInfo={dummyData.defailInfo} />
        <Tags tags={dummyData.tags} />
        <div className=" m-2 ">
          <button
            onClick={() => setVisible(!isVisible)}
            className="px-4 py-3 font-mono text-lg rounded-md bg-blue-600 text-white m-2"
          >
            {!isVisible ? "Read More" : "See Less"}
          </button>
        </div>
        {isVisible && <ReadMore readmore={dummyData.readmore} />}
      </div>
    </div>
  );
};

export default Card;
