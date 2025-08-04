import { useState, useEffect } from "react";

export const useFetch = (api) => {
  const [data, setData] = useState([]);
  const [loading, setIsLoading] = useState(true);

  useEffect(() => {
    //get data in the api
    const getData = async () => {
      try {
        const res = await fetch(api);
        const result = await res.json();
        setData(result);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [api]);

  return {
    data,
    loading,
  };
};
