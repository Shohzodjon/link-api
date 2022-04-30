import React, { useEffect, useState } from "react";
import "./style.css";
function Question() {
  const [question, setQuestion] = useState([]);

  useEffect(() => {
    fetch("https://alibaraka.pythonanywhere.com/api/questions/")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setQuestion(data);
      });
  }, []);

  return (
    <div className="question">
      <div className="container">
        <h1>Question</h1>

        <ul>
          {question.map((item) => {
            return (
              <li key={item.id}>
                <div className="f_flex">
                  <h5>Question : {item.question}</h5>
                  <p> Answer : {item.answer}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Question;
