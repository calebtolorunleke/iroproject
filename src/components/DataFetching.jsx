import React, { useState } from "react";
import { useEffect } from "react";
import { PropagateLoader } from "react-spinners";

const url = "https://jsonplaceholder.typicode.com/users";

const DataFetching = () => {
  const [users, setUser] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        setUser(data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    getUsers();

    //fetch req url using js fetch promises .then and async wait using asynch code... return future value to us
  }, []);

  if (isLoading) {
    return (
      <div className="flex flex-col justify-center items-center h-screen">
        {/* <h1 className="text-center text-6xl font-bold">Loading....</h1> */}
        <PropagateLoader size={50} />
      </div>
    );
  }

  return (
    <div>
      <h1 className="text-3xl text-blue-600">List of Users</h1>
      {users.map((user) => (
        <div key={user.id}>
          <h3 className="text-2xl">{user.name}</h3>
          <p className="">{user.email}</p>
          <p>{user.website}</p>
        </div>
      ))}
    </div>
  );
};

export default DataFetching;
