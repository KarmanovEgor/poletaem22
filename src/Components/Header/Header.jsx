import React, { useState } from "react";
import Burger from "../Burger/Burger";
import "./Header.css";
import { Link, useLocation } from "react-router-dom";


export default function Header({openPopup}) {
  const [activeBurger, setActiveBurger] = useState(false);
  const { pathname } = useLocation();


  function handleClickBurger() {
    setActiveBurger(!activeBurger);
  }

  
  return (
    <header
      className={`header page__header ${activeBurger ? "header_active" : ""} ${pathname=== '/' ? "header__color-none" : "header__color"}`}
    >
      <div className="header__container">
      <Link to="/" className="header__link-home"></Link>
        <>
          <Burger
            activeBurger={activeBurger}
            handleClickBurger={handleClickBurger}
          />
        </>
  
      </div>
    </header>
  );
}