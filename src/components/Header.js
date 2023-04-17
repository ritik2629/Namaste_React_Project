import foodlogo from "../assets/foodlogo.jpg";

export const Header = () => {
  return (
    <div className="header">
      <a href="/">
        <img src={foodlogo} alt="foodvilla" className="logo" />
      </a>
      <div>
        <div  className="nav-items">
          <ul>
            <li className="">Home</li>
            <li className="">About</li>
            <li className="">Contact</li>
            <li className="">Instamart</li>
            <li> Cart : 0-item</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
