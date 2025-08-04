import React, { useState } from "react";
import { useEffect } from "react";
import { RingLoader } from "react-spinners";
import { useFetchDayone } from "../Hooks/useFetchDayone";

const api = "https://jsonplaceholder.typicode.com/todos";

const DayOneuseEffect = () => {
  //   const [todos, setTodos] = useState([]);
  //   const [loading, setLoading] = useState(true);

  //   useEffect(() => {
  //     const getTodos = async () => {
  //       try {
  //         const data = await fetch(api);
  //         const result = await data.json();
  //         console.log(result);
  //         setTodos(result);
  //         setLoading(true);
  //       } catch (error) {
  //         console.log(error);
  //       }
  //     };
  //     getTodos();
  //   }, []);

  const { todos, loading } = useFetchDayone(api);

  if (loading) {
    return (
      <div className="flex items-center justify-center mx-auto h-screen text-[5rem]">
        <p>Loading....</p>
        <RingLoader size={72} />
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-10">
      {todos.map((todo, index) => (
        <h1 key={todo.id}>{todo.title}</h1>
      ))}
    </div>
  );
};

export default DayOneuseEffect;
