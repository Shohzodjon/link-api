import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
function Nav() {
  return (
    <nav className="navbar">
      <div className="container">
        <ul>
          <li>
            <Link to="/">Product</Link>
          </li>
          <li>
            <Link to="/question">Questions</Link>
          </li>
          <li>
            <Link to="story">Story</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
