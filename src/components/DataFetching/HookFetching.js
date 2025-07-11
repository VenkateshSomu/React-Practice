import React, { useState, useEffect } from "react";
import axios from "axios";
function HookFetching() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    console.log("useEffect called");
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        console.log(res);
        setPosts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      Hooks - Posts List
      <ul>
        {posts?.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </>
  );
}
export default HookFetching;
