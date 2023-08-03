import React, { useEffect, useRef, useState } from "react";

const Counter = () => {
  const [val, setval] = useState(0);

  let title = useRef("Here is the value being updated" + val);
  useEffect(() => {
    title.current = `Here is the value being updated ${val}`;
  }, [val]);

  return (
    <div className="rounded-lg flex-col bg-gray-300 my-4 h-[30rem] mx-auto flex justify-center p-2">
      <div className="text-center bg-gray-100 rounded-md shadow-xl my-5  p-3 py-6 w-6/12 mx-auto text-3xl font-bold text-blue-500">
        <span  >Title: {title.current}</span>
      </div>

      <div className="p-3 w-8/12 mx-auto flex justify-center gap-x-10 items-center  ">
        <p>
          <button
            onClick={() => setval(val - 1)}
            className="bg-blue-600  rounded-lg  px-5 py-2 flex justify-center items-center text-5xl text-white font-extrabold"
          >
            <span> - </span>
          </button>
        </p>
        <p className="text-gray-600 font-bold text-7xl"> {val} </p>
        <p>
          <button
            onClick={() => setval(val + 1)}
            className="bg-blue-600 rounded-lg  px-5 py-2 flex justify-center items-center text-5xl text-white font-extrabold"
          >
            +
          </button>
        </p>
        <p></p>
      </div>
    </div>
  );
};

export default Counter;
