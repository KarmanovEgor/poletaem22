import { useEffect, useState } from "react";
import "./Burger.css";

const Burger = () => {
  const [activeBurger, setActiveBurger] = useState(false);

  const handleClickBurger = () => {
    setActiveBurger(!activeBurger);
  };

  const handleLinkClick = () => {
    setActiveBurger(false);
  };

  useEffect(() => {
    if (!activeBurger) return;

    const handleESC = (e) => {
      if (e.key === "Escape") {
        setActiveBurger(false);
      }
    };

    const handleClickOutside = (e) => {
      if (!e.target.closest(".header__lists") && !e.target.closest(".burger")) {
        setActiveBurger(false);
      }
    };

    document.addEventListener("keydown", handleESC);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("keydown", handleESC);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [activeBurger]);

  return (
    <nav className="header__navigation">
      <ul
        className={`header__lists ${
          activeBurger ? "header__lists_active" : ""
        }`}
      >
        <li className="header__links">
          <a href="#main" className="header__link" onClick={handleLinkClick}>
            Главная
          </a>
        </li>
        <li className="header__links">
          <a href="#offers" className="header__link" onClick={handleLinkClick}>
            Предложения
          </a>
        </li>
        <li className="header__links">
          <a href="#about" className="header__link" onClick={handleLinkClick}>
            О нас
          </a>
        </li>
      </ul>
      <div
        className={`header__overlay ${
          activeBurger ? "header__overlay-active" : ""
        }`}
      ></div>
      <div
        onClick={handleClickBurger}
        className={`burger header__button${
          activeBurger ? " burger_active" : ""
        }`}
      >
        <div
          className={`burger-line ${activeBurger ? " burger-first-line" : ""}`}
        ></div>
        <div
          className={`burger-line ${activeBurger ? " burger-second-line" : ""}`}
        ></div>
        <div
          className={`burger-line ${activeBurger ? " burger-third-line" : ""}`}
        ></div>
      </div>
    </nav>
  );
};

export default Burger;