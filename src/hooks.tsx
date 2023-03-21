import { useState, useEffect } from "react";

const Hooks = () => {
  const [liked, setLiked] = useState(true);
  const [value, setValue] = useState("posts");
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${value}`)
    .then(response => response.json())
    .then(json => setItems(json))
  },[value])
  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={liked}
          onChange={() => setLiked(!liked)}
        />
        Like💖
      </label>
      <p>You {liked ? "liked 😍" : "did not like 😥"} this.</p>

      <button onClick={() => setValue("posts")}>Posts</button>
      <button onClick={() => setValue("users")}>Users</button>
      <button onClick={() => setValue("comments")}>Comments</button>
          
          
          <h1>{value}</h1>
          {items.map(item => {
              return <pre>
                   { JSON.stringify(item)}
              </pre>
          })}
    </div>
  );
};

export default Hooks;
