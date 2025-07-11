import React, { useState, useEffect } from "react";
import axios from "axios";
function HookFetchingSinglePost() {
  const [id, setId] = useState(1);
  const [post, setPost] = useState({});
  const [buttonIdValue, setButtonIdValue] = useState(1);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => {
        setPost(res.data);
      })
      .catch((err) => console.log(err));
  }, [buttonIdValue]);

  const fetchPost = () => {
    setButtonIdValue(id);
  };
  return (
    <>
      <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
      <button onClick={() => fetchPost()}>Fetch post</button>
      <div>
        <h3>{post?.title}</h3>
      </div>
    </>
  );
}
export default HookFetchingSinglePost;
