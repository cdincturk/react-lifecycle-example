import React from "react";
import { useState, useEffect } from "react";

function Lifecycle() {
  //   useEffect(() => {
  //     first;

  //     return () => {
  //       second;
  //     };
  //   }, [third]);

  //Eğer third parametresi hiç yazılmaz ise her render olduğunda çalışacaktır. (Update olduğunda.)
  //Eğer third parametresi yazılır ve boş bırakılırsa component ilk yüklendiğinde çalışacaktır . (Update olduğunda.)
  //Eğer second parametresi yazılırsa component destroy olduğunda(unmount olduğunda) çalışacaktır.

  const [postId, setPostId] = useState(1);
  const [post, setPost] = useState(false);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .then((res) => res.json())
      .then((data) => setPost(data));

    let interval = setInterval(() => console.log("Interval çalıştı!"), 1000);

    return () => {
      console.log("component destroyed");
      clearInterval(interval);
    };
  }, [postId]);

  return (
    <div>
      <h3>{postId}</h3>
      {post && JSON.stringify(post)}
      <button onClick={() => setPostId((postId) => postId + 1)}>
        Sonraki konu
      </button>
      {post.title}
    </div>
  );
}

export default Lifecycle;
