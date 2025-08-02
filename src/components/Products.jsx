import React from "react";
import road from "../assets/unsplash.jpg";

const Products = ({ img, name, price, children }) => {
  //   const myName = "John Doe";
  //   const img =
  //     "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/13/8251093/1.jpg?7088";
  //   const name = "Genie's perfume";
  //   const price = "#20000";

  //   console.log(props);
  const handleAddToCart = (name) => {
    alert(name + " added to cart");
  };
  return (
    <div className="product-card">
      {/* <img
        src="https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/13/8251093/1.jpg?7088"
        alt="Product Image"
      /> */}
      {/* <h3 style={{ color: "blue", fontStyle: "italic" }}>Genie's perfume</h3>
      <p className="text-4xl text-red-500">#20000</p> */}
      {/* <img src={road} alt="road" /> */}
      {/* <h1 className="text-4xl">{1 + 1}</h1>
      <p>{myName}</p> */}
      <img src={img} alt="Product Image" />
      <h3 style={{ color: "blue", fontStyle: "italic" }}>{name}</h3>
      <p className="text-4xl text-red-500">{price}</p>
      <p className="text-green-500 text-3xl">{children}</p>
      <button
        className="bg-green-500 text-white w-full h-[40px] rounded-lg"
        onClick={() => handleAddToCart(name)}
      >
        Add to cart
      </button>
    </div>
  );
};

export default Products;
