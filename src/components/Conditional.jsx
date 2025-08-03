import React from "react";

//multiple rendering, ternary operator - condition, question mark, first action : second action, short circuit
//true && true --> ture
// true && false -- false
// false && true --- false

const Conditional = () => {
  const userLoggedIn = false;
  const isLoading = false;
  const isError = false;
  if (userLoggedIn) {
    return (
      <div>
        <button className="cutom-btn">Log Out</button>
      </div>
    );
  }
  return (
    <div>
      <h1 className="text-4xl font-bold uppercase">conditional rendering</h1>
      <button className="cutom-btn">Log In</button>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <h1>
          Main <data value=""></data>
        </h1>
      )}

      {isError && <h1>An error occured...</h1>}
    </div>
  );
};

export default Conditional;
