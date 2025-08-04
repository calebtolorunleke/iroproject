import { useEffect, useState } from "react";

export const useFetchDayone = (url) => {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getTodos = async () => {
      try {
        const data = await fetch(url);
        const result = await data.json();
        console.log(result);
        setTodos(result);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    getTodos();
  }, [url]);

  return { todos, loading };
};
