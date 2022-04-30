import "./App.css";
import Blog from "./component/Blog";
// import { useState, useEffect } from "react";
import Test from "./Test";
function App() {
  // const [blog, setBlog] = useState(null);

  // useEffect(() => {
  //   fetch("https://alibaraka.pythonanywhere.com/api/products/")
  //     .then((res) => {
  //       return res.json();
  //     })
  //     .then((data) => {
  //       console.log(data);
  //       setBlog(data);
  //     });
  // }, []);

  return (
    <div className="App">
      {/* {blog.map((item) => {
        return (
          <div key={item.id}>
            <h2>{item.name}</h2>
            <img src={item.image} alt="img" />
            <p>{item.text}</p>
          </div>
        );
      })} */}
      <h2>App component </h2>
      <Test />
      <Blog />
    </div>
  );
}

export default App;
