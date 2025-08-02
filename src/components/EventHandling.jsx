import React from "react";

//element, event(oclick,onsubmit,onchnage), eventhandler - funtion

const EventHandling = () => {
  const handleClick = () => {
    console.log("user clicked");
  };

  const handleClickAgain = (name) => {
    console.log(name + "clicked the button");
  };
  return (
    <div>
      <button
        className="bg-blue-600 text-white w-[120px] h-[40px] border-r rounded-lg p-1"
        onClick={handleClick}
      >
        Click Me
      </button>

      <button
        className="bg-red-600 text-white w-[120px] h-[40px] border-r rounded-lg p-1"
        onClick={() => handleClickAgain("josh")}
      >
        Click
      </button>
    </div>
  );
};

export default EventHandling;
