import { Route, Routes } from "react-router-dom";
import "./App.css";
import Blog from "./component/Blog";
import Nav from "./component/Nav";
import Question from "./component/Question";
import Story from "./component/Story";

function App() {
  return (
    <>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<Blog />} />
          <Route path="/question" element={<Question />} />
          <Route path="/story" element={<Story />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
