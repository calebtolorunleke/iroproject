import React, { useEffect, useState } from "react";
import { MoonLoader } from "react-spinners";
import { useCommentsFetch } from "../Hooks/useCommentsFetch";

const url = "https://jsonplaceholder.typicode.com/comments";
const CalebuseStateFetch = () => {
  //   const [comments, setComments] = useState([]);
  //   const [isLoading, setLoading] = useState(true);

  //   useEffect(() => {
  //     //function goes in here
  //     const getComments = async () => {
  //       const data = await fetch(url);
  //       const result = await data.json();
  //       setComments(result);
  //       console.log(result);
  //       setLoading(false);
  //     };
  //     getComments();
  //   }, []);

  const { comments: commentsData, loading: isLoading } = useCommentsFetch(url);

  if (isLoading) {
    return (
      <div className="flex flex-col gap-5 justify-center items-center h-screen text-5xl font-bold">
        <p>Loading.....</p>
        <MoonLoader />
      </div>
    );
  }

  return (
    <div>
      {commentsData.map((comment, index) => (
        <p key={comment.id}>{comment.name}</p>
      ))}
    </div>
  );
};

export default CalebuseStateFetch;
