import React from "react";
import { Products } from "./products";
import { useState } from "react";
import SingleCartItem from "./SingleCartItem";

const Cart = () => {
  //   console.log(Products);
  const [cart, setCart] = useState(Products);
  const [cartibutton, setcartibutton] = useState();

  const handleClearCart = () => {
    setCart([]);
    setcartibutton(!cartibutton);
  };

  const getTotalPrice = cart.reduce((total, item) => total + item.price, 0);

  const handleRemoveItem = (itemid){
    console.log(itemid)
  }

  if (cart.length === 0) {
    return (
      <div className="w-[420px] rounded-md shadow-2xl p-7 m-7 mx-auto">
        <h1 className="text-center text-4xl my-4">Your Bag</h1>
        <p className="my-3 text-purple-600 ">Your bag is Empty</p>
        <button
          onClick={() => setCart(Products)}
          className="bg-purple-600 text-white rounded-md h-[40px] w[-150px] cursor-pointer p-2"
        >
          Continue Shopping
        </button>
      </div>
    );
  }
  return (
    <div className="w-[420px] rounded-md shadow-2xl p-7 m-7 mx-auto">
      <h1 className="text-center text-4xl my-4">Your Bag</h1>
      <p className="my-3 text-purple-600 ">
        {cart.length} Items left in the bag
      </p>
      <div className="flex flex-col gap-5">
        {cart.map((item) => {
          return <SingleCartItem key={item.id} {...item} handleRemoveItem={handleRemoveItem}/>;
        })}
      </div>
      <div className="flex justify-between items-center text-2xl">
        <p>Total</p>
        <p>#{getTotalPrice}</p>
      </div>
      {cartibutton ? (
        <button
          className="text-white  rounded-sm block bg-purple-600 w-[150px] h-[40px] mx-auto"
          onClick={handleClearCart}
        >
          Clear Cart
        </button>
      ) : (
        <button
          className="text-white  rounded-sm block bg-red-600 w-[150px] h-[40px] mx-auto"
          onClick={handleClearCart}
        >
          Clear Cart
        </button>
      )}
    </div>
  );
};

export default Cart;
