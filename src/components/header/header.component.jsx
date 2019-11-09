import React from "react";
import "./header.styles.scss";
import { Link } from "react-router-dom";
import Logo from "../../assets/icons8-vegan-food-64.png";

const Header = () => {
  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <img src={Logo} />
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          Shop
        </Link>
        <Link className="option" to="/shop">
          Contact
        </Link>
      </div>
    </div>
  );
};

export default Header;
