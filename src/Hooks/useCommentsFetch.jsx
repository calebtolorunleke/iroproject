import { useEffect, useState } from "react";

export const useCommentsFetch = (url) => {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const getComments = async () => {
      try {
        const data = await fetch(url);
        const result = await data.json();
        setComments(result);
        console.log(result);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    getComments();
  }, [url]);
  return { comments, loading };
};
