import "./App.css";
import { useState, useEffect } from "react";
import Test from "./Test";
function App() {
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
    <div className="App">
      {blog.map((item) => {
        return (
          <div key={item.id}>
            <h2>{item.name}</h2>
            <img src={item.image} alt="img" />
            <p>{item.text}</p>
          </div>
        );
      })}
      <Test />
    </div>
  );
}

export default App;
