import React, { useEffect, useRef, useState } from "react";

const Counter = () => {
  // stores the value beging updated
  const [val, setVal] = useState<number>(0);

  // stores the title
  const title = useRef<string>(
    "Here is the value being updated : " + val.toString()
  );

  // everytime the value of val is changed, title updated too
  // so the useEffect hook will be executed
  useEffect(() => {
    // we need to add 1 to the user ref
    
    // why?
    // because when title.current in the useEffect hook inside useEffect hook, the component has already rendered 
    // with the previous value of title.current. 
    // This means that the updated title.current value will not be displayed until the component is re-rendered again.

    title.current = `Here is the value being updated : ${val + 1}`;
  }, [val]);

  return (
    <div className="font-mono w-10/12 rounded-lg flex-col bg-gray-300 my-4 h-[30rem] mx-auto flex justify-center p-2">
      <div className="text-center bg-gray-100 rounded-md shadow-xl my-5  p-3 py-6 w-9/12 mx-auto text-3xl font-bold text-blue-500">
        <span className="text-4xl text-gray-500 mx-4">Title:-</span>
        {title.current}
      </div>

      <div className="p-3 w-8/12 mx-auto flex justify-center gap-x-10 items-center  ">
        {/* button which decrement the counter */}
        <p
          className="cursor-pointer"
          onClick={() => setVal((prev) => prev - 1)}
        >
          <button className="bg-blue-600  rounded-lg  px-5 py-2 flex justify-center items-center text-5xl text-white font-extrabold">
            <span> - </span>
          </button>
        </p>

        {/* displays the counter value */}
        <p className="text-gray-600 font-bold text-7xl"> {val} </p>

        {/* button which increments the counter */}
        <p
          className="cursor-pointer"
          onClick={() => setVal((prev) => prev + 1)}
        >
          <button className="bg-blue-600 rounded-lg  px-5 py-2 flex justify-center items-center text-5xl text-white font-extrabold">
            +
          </button>
        </p>
        <p></p>
      </div>

      {/* <A /> */}
    </div>
  );
};

export default Counter;
