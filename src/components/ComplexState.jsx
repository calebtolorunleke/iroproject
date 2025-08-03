import React, { useState } from "react";

const ComplexState = () => {
  const [user, setUser] = useState({
    name: "john",
    job: "frontend dev",
    location: "lagos",
  });

  //spread operator
  const handleUserChange = () => {
    setUser({ ...user, location: "london", job: "backend engiineer" });
  };

  //arrays are complex data type that can change

  const [products, setProducts] = useState(["fruits", "bag", "jean"]);
  const clearCart = () => {
    setProducts([]);
  };
  return (
    <div className="heading text-center">
      <h2 className="text-3xl font-bold">COMPLEX STATE</h2>
      <p className="text-2xl">my name is {user.name}</p>
      <p className="text-2xl">job: {user.job}</p>
      <p className="text-2xl">i live in {user.location}</p>
      <button className="custom-btn" onClick={() => handleUserChange()}>
        change user
      </button>
      {products.map((product, index) => (
        <li key={index}>{products}</li>
      ))}

      <button onClick={clearCart} className="cutom-btn">
        Clear Cart
      </button>
    </div>
  );
};

export default ComplexState;
