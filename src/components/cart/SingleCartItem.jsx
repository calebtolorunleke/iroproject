import React from "react";

const SingleCartItem = ({ id, img, name, price, handleRemoveItem }) => {
  return (
    <div className="flex justify-between items-center border-b-2 border-b-black pb-2">
      <img src={img} alt={name} className="h-[100px] w-[100px]" />
      <div className="w-[50%] flex justify-end flex-col ">
        <p>{name}</p>
        <p>${price}</p>
        <button
          className="custom-btn cursor-pointer mt-2.5"
          onClick={() => handleRemoveItem(id)}
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default SingleCartItem;
