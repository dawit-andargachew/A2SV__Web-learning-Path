import React from "react";

export const Tags = ({ tags }) => {
  // displays tags used on the component
  return (
    <div className="px-4 pt-4 pb-2 ">
      {tags.map((t) => (
        <span className="inline-block   bg-gray-300  shadow-lg rounded-full text-lg px-2 py-1  font-semibold text-gray-700 mr-2 mb-2">
          {t}
        </span>
      ))}
    </div>
  );
};
