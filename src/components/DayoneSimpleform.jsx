import React, { useState } from "react";

const DayoneSimpleform = () => {
  const [fullName, setfullName] = useState("");

  return (
    <div className="flex justify-center h-screen items-center">
      <form className="flex flex-col  gap-5 shadow-xl  px-8 py-8 ">
        <h1 className="text-3xl text-purple-600">Registration Form</h1>
        <label htmlFor="name">Full Name</label>
        <input
          type="text"
          placeholder="Full Name"
          className="border px-2 py-2 focus:outline-red-300 rounded-sm"
          value={fullName}
          onChange={(e) => setfullName(fullName)}
        />
        <label htmlFor="email">Email Address</label>
        <input
          type="email"
          placeholder="Enter email address"
          className="border px-2 py-2 focus:outline-red-300 rounded-sm"
        />
        <button className="w-full bg-purple-600 py-2 rounded-sm mt-5 text-white">
          Submit
        </button>
      </form>
    </div>
  );
};

export default DayoneSimpleform;
