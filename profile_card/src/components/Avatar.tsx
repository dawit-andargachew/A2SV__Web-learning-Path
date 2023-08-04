import React from "react";
interface Props {
  imageURL: string;
}

function Avatar({ imageURL }: Props) {
  // this component return the image to be displayed on the card component
  return (
    <div className=" w-8/12 flex justify-center mx-auto my-4 rounded-md">
      <img
        className="w-30 h-auto rounded-lg"
        src={imageURL}
        alt="Sunset in the mountains"
      />
    </div>
  );
}

export default Avatar;
