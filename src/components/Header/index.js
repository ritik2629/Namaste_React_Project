import { useState ,useContext} from "react";
import { Link } from "react-router-dom";
import foodlogo from "../../assets/foodlogo.jpg";
import useOnline from "../../utils/useOnline";
import UserContext from "../../utils/UserContext";

export const Header = () => {

  const [loggedIn, setLoggedIn] = useState(false);
  const isOnline =useOnline()

  const user =useContext(UserContext)
  console.log(user);
  return (
    <div className=" flex justify-between bg-blue-400 shadow-lg">
      <a href="/">
        <img src={foodlogo} alt="foodvilla" className=" w-32 h-24 p-1" />
      </a>
      <div>
        <ul className="flex py-10 text-white font-semibold text-md">
          <li className="px-3">
            <Link to="/">Home</Link>
          </li>
          <li className="px-3">
            <Link to="/about">About</Link>
          </li> 
          <li className="px-3">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="px-3">
            <Link to="/instamart">Instamart</Link>
          </li>
          <li className="px-3">
            <Link to="/cart">Cart</Link>
          </li>
        </ul>
      </div>
      {isOnline ? <h1 className=" py-10">online🟢</h1> :<h1>offline💥</h1> }
      {<h2 className=" py-10 first-letter:uppercase text-lg font-semibold text-white">{user.name}</h2>}
      {loggedIn ? (
        <div className=" border rounded-md" >
          <button onClick={() => setLoggedIn(false)}>Logout</button>
        </div>
        ) : (
          <button onClick={() => setLoggedIn(true)}>Login</button>
        )}
    </div>
  );
};
