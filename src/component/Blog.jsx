import React, { useEffect, useState } from "react";

function Blog() {
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    fetch("https://alibaraka.pythonanywhere.com/api/products/")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setBlog(data);
      });
  }, []);
  return (
    <div>
      {blog.map((item) => {
        return (
          <div key={item.id}>
            <h2>{item.name}</h2>
            <img src={item.image} alt="img" />
            <p>{item.text}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Blog;
