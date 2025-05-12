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
      <div className="w-full mx-auto">
        <h1 className="text-2xl text-bold">This is a Simple Counter App</h1>
        <p className="text-xl">
          The Counter App is a basic web application that allows users to
          increase, decrease, or reset a number displayed on the screen.
        </p>
        <h2 className="text-4xl">{counter}</h2>
        <div className="flex gap-2">
          <button
            onClick={incrementHandler}
            className="bg-green-600 text-xs text-white w-20 rounded-md"
          >
            Increment
          </button>
          <button
            onClick={resetHandler}
            className="bg-violet-500 text-xs text-white w-15 rounded-md"
          >
            Reset
          </button>
          <button
            onClick={decrementHandler}
            className="bg-red-500 text-xs text-white w-20 rounded-md"
          >
            Decrement
          </button>
        </div>
      </div>
    </>
  );
}

export default Counter;
