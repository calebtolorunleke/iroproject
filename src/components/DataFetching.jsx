import React, { useState } from "react";
import { useEffect } from "react";

const url = "https://jsonplaceholder.typicode.com/users";

const DataFetching = () => {
  const [users, setUser] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        setUser(data);
      } catch (error) {
        console.log(error);
      }
    };
    getUsers();

    //fetch req url using js fetch promises .then and async wait using asynch code... return future value to us
  }, []);

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
