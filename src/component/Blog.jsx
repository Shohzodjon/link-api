import React, { useEffect, useState } from "react";
import "./style.css";
function Blog() {
  const [blog, setBlog] = useState([]);

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
    <div className="blog">
      <div className="container">
        <div className="blog_grid">
          {blog?.map((item) => {
            return (
              <div key={item.id} className="item">
                <div className="d_flex">
                  <h2>{item.name}</h2>
                  <p>{item.text}</p>
                </div>

                <div className="item_img">
                  <img src={item.image} alt="img" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Blog;
