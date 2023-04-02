import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import "./style.css";

export const Header = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  return (
    <div className="container">
      <a href="/">
        <img src={logo} alt="foodvilla" className="logo" />
      </a>
      <div className="nav-item">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/cart">Cart</Link>
          </li>
        </ul>
      </div>
      {loggedIn ? (
        <button onClick={() => setLoggedIn(false)}>Logout</button>
      ) : (
        <button onClick={() => setLoggedIn(true)}>Login</button>
      )}
    </div>
  );
};
