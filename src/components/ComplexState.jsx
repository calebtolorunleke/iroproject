import React, { useState } from "react";

const ComplexState = () => {
  const [user, setUser] = useState({
    name: "john",
    job: "frontend dev",
    location: "lagos",
  });
  return (
    <div className="heading text-center">
      <h2 className="text-3xl font-bold">COMPLEX STATE</h2>
      <p className="text-2xl">my name is {user.name}</p>
      <p className="text-2xl">job: {user.job}</p>
      <p className="text-2xl">i live in {user.location}</p>
      <button className="custom-btn">change user</button>
    </div>
  );
};

export default ComplexState;
