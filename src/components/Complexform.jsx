import React from "react";
import { useState } from "react";

const Complexform = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    location: "",
  });

  const handleChnage = (e) => {
    console.log(e.target.name, e.target.value);
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user);
  };

  return (
    <div>
      <form
        className="w-[400px] p-3 shadow-2xl mx-auto my-9 rounded-2xl "
        onSubmit={handleSubmit}
      >
        <h1 className="text-3xl">Register with us @</h1>
        <label htmlFor="name">Full Name</label>
        <input
          type="text"
          className="w-full h-[40px] p-2 border-2 border-gray-300 rounded-lg block my-2"
          placeholder="full name"
          id="name"
          name="name"
          value={user.name}
          onChange={handleChnage}
        />
        <label htmlFor="email">Email Address</label>
        <input
          type="email"
          className="w-full h-[40px] p-2 border-2 border-gray-300 rounded-lg block my-2"
          placeholder="email address"
          id="email"
          name="email"
          value={user.email}
          onChange={handleChnage}
        />
        <label htmlFor="address">Locations</label>
        <textarea
          name="location"
          id="address"
          placeholder="Enter your address"
          className="w-full h-[70px] p-2 border-2 border-gray-300 rounded-lg block my-2"
          value={user.location}
          onChange={handleChnage}
        ></textarea>
        {/* <p className="text-red-500">{error}</p> */}
        <button className="w-full h-[40px] bg-purple-600 rounded-lg text-white font-bold block my-2">
          Register
        </button>
      </form>
    </div>
  );
};

export default Complexform;
