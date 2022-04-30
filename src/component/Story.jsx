import React, { useEffect, useState } from "react";
import "./style.css";
function Story() {
  const [story, setStory] = useState([]);

  useEffect(() => {
    fetch("https://alibaraka.pythonanywhere.com/api/stories/")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setStory(data);
      });
  }, []);
  return (
    <section className="story">
      <div className="container">
        <h1>Story</h1>

        <div className="story_grid">
          {story?.map((item) => {
            return (
              <div className="story_item" key={item.id}>
                <div className="d_flex">
                  <h2>{item.name}</h2>
                  <p>{item.text}</p>
                </div>
                <div className="story_img">
                  <img src={item.image} alt="story" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Story;
