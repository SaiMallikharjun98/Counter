import React from "react";
import { useState } from "react";
function Counter() {
  const [counter, setCounter] = useState(0);
  const incrementHandler = () => {
    setCounter((prev) => prev + 1);
  };
  const decrementHandler = () => {
    setCounter((prev) => prev - 1);
  };
  const resetHandler = () => {
    setCounter((prev) => prev * 0);
  };

  return (
    <>
      <div className="w-full max-w-md mx-auto mt-16">
        <h1 className="text-2xl font-bold">This is a Simple Counter App</h1>
        <p className="text-xl">
          The Counter App is a basic web application that allows users to
          increase, decrease, or reset a number displayed on the screen.
        </p>
        <h2 className="text-4xl">{counter}</h2>
        <div className="flex gap-2">
          <button
            onClick={incrementHandler}
            className="bg-green-600 hover:bg-green-700 text-xs text-white w-28 rounded-md cursor-pointer"
          >
            Increment
          </button>
          <button
            onClick={resetHandler}
            className="bg-violet-500 hover:bg-violet-700 text-xs text-white w-28 rounded-md cursor-pointer"
          >
            Reset
          </button>
          <button
            onClick={decrementHandler}
            className="bg-red-500 hover:bg-red-700 text-xs text-white w-28 rounded-md cursor-pointer"
          >
            Decrement
          </button>
        </div>
      </div>
    </>
  );
}

export default Counter;
