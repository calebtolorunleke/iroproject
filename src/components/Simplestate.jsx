import React from "react";
import { useState } from "react";

//initial value, function to update initial value
const Simplestate = () => {
  const [count, setCount] = useState(0);

  const handleIncreaseCount = () => {
    setCount(count + 1);
  };

  const handledecreaseCount = () => {
    setCount(count - 1);
  };

  const [user, setUser] = useState("user");
  return (
    <div>
      <h1 className="text-4xl">Use State Basics </h1>
      <p className="text-3xl">The Current Count is : {count}</p>
      <p className="text-3xl">Welcome {user}</p>
      <button
        className="bg-blue-600 text-white w-[120px] h-[40px] border-r rounded-lg p-1"
        onClick={() => setUser("John")}
      >
        Login John
      </button>
      <br /> <br />
      <button
        className="bg-blue-600 text-white w-[120px] h-[40px] border-r rounded-lg p-1"
        onClick={handleIncreaseCount}
      >
        Increase Count
      </button>
      <button
        className="bg-red-600 text-white  h-[40px] border-r rounded-lg p-1"
        onClick={handledecreaseCount}
      >
        Decrease Count
      </button>
    </div>
  );
};

export default Simplestate;
