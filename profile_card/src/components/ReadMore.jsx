import React from "react";

const ReadMore = ({ readmore }) => {
  // just show a dummy text and represents a the readmore section
  return (
    <div className="rounded-lg px-2 bg-gray-50  w-11/12 mx-auto font-mono shadow-lg my-2 p-1">
      {readmore}
    </div>
  );
};

export default ReadMore;
