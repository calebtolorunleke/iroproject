import React from "react";
import { useEffect, useState } from "react";

const EffectBasics = () => {
  const [value, setValue] = useState(0);
  const [num, setNum] = useState(100);
  useEffect(() => {
    console.log("useEffect ran");
  }, [value]);
  return (
    <div className="w-[600px] h-[400px] mx-auto my-10 shadow-2xl">
      <h1 className="text-center text-4xl ">USE EFFECT BASICS</h1>
      <div className="text-center ">
        <h1 className="text-5xl">value: {value}</h1>
        <button className="custom-btn " onClick={() => setValue(value + 1)}>
          Chnage Value
        </button>
        <h1 className="text-5xl">Number: {num}</h1>
        <button className="custom-btn " onClick={() => setNum(num + 1)}>
          Chnage Number
        </button>
      </div>
    </div>
  );
};

export default EffectBasics;
