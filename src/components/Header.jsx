import React from "react";

const Header = () => (
  <div className="top">
    <header className="header center">
      <div className="header__left">
        <a href="index.html">
          <img src="img/1h.png" alt="logo" />
        </a>
        <a href="#">
          <img src="img/2h.svg" alt="search" />
        </a>
      </div>
      <nav className="header__right">
        <label htmlFor="header__check">
          <img src="img/3h.svg" alt="menu" />
        </label>
        <a className="header__link-site" href="registration.html">
          <img src="img/4h.svg" alt="reg" />
        </a>
        <a className="header__link-site" href="cart.html">
          <img src="img/5h.svg" alt="cart" />
        </a>
      </nav>
    </header>
  </div>
);

export default Header;
