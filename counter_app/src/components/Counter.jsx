import React, { useEffect, useRef, useState } from "react";

const Counter = () => {
  const [val, setval] = useState(0);

  let title = useRef("Here is the value being updated : " + val);

  // everytime the value of val is changed, title updated too 
  // so the useEffect hook will be executed
  useEffect(() => {
    title.current = `Here is the value being updated : ${val}`;
  }, [val]);

  return (
    <div className="font-mono w-8/12 rounded-lg flex-col bg-gray-300 my-4 h-[30rem] mx-auto flex justify-center p-2">
      <div className="text-center bg-gray-100 rounded-md shadow-xl my-5  p-3 py-6 w-9/12 mx-auto text-3xl font-bold text-blue-500">
        <span className="text-4xl text-gray-500 mx-4"  >Title:-</span>{title.current}
      </div>

      <div className="p-3 w-8/12 mx-auto flex justify-center gap-x-10 items-center  ">

        {/* button which increments the counter */}
        <p>
          <button
            onClick={() => setval(val - 1)}
            className="bg-blue-600  rounded-lg  px-5 py-2 flex justify-center items-center text-5xl text-white font-extrabold"
          >
            <span> - </span>
          </button>
        </p>

        {/* displays the counter value */}
        <p className="text-gray-600 font-bold text-7xl"> {val} </p>


        {/* button which decrements the counter */}
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
