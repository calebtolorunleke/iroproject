import React from "react";
import { useState } from "react";

const Simpleform = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() && !email.trim()) {
      //   console.log("please fill the form");
      setError("Please provide name and email");
    } else console.log("form submitted: " + name + email);
    setName("");
    setEmail("");
  };

  return (
    <div>
      <form
        className="w-[400px] p-3 shadow-2xl mx-auto my-9 rounded-2xl "
        onSubmit={handleSubmit}
      >
        <h1 className="text-3xl">Register with us</h1>
        <label htmlFor="name">Full Name</label>
        <input
          type="text"
          className="w-full h-[40px] p-2 border-2 border-gray-300 rounded-lg block my-2"
          placeholder="full name"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="email">Email Address</label>
        <input
          type="email"
          className="w-full h-[40px] p-2 border-2 border-gray-300 rounded-lg block my-2"
          placeholder="email address"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <p className="text-red-500">{error}</p>
        <button className="w-full h-[40px] bg-purple-600 rounded-lg text-white font-bold block my-2">
          Register
        </button>
      </form>
    </div>
  );
};

export default Simpleform;
