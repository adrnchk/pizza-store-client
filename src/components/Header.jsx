import React from "react";
import logo from "../resourses/img/Pizza-logo.png";
import HeaderCart from "./HeaderCart";
import { Link } from "react-router-dom";
function Header(props) {
  return (
    <div className="header">
      <div className="container">
        <Link to="/">
          <div className="header__logo">
            <img width="80" src={logo} alt="Pizza logo" />
            <div>
              <h1>Sunday Pizza</h1>
              <p>мережа піцерій № 1 у Львові</p>
            </div>
          </div>
        </Link>
        <div>
          <p>(+380) 99-648-24-62</p>
          <small>дзвінки безкоштовні на території України</small>
        </div>

        <HeaderCart />
      </div>
    </div>
  );
}

export default Header;
