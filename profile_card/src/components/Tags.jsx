import React from "react";

export const Tags = ({ tags }) => {
  // displays tags used on the component
  return (
    <div className="px-6 pt-4 pb-2 ">
      {tags.map((t) => (
        <span className="inline-block   bg-gray-200 rounded-full px-3 py-1 text-lg font-semibold text-gray-700 mr-2 mb-2">
          {t}
        </span>
      ))}
    </div>
  );
};
