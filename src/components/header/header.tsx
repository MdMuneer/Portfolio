import React from "react";
import "./_header.css";
import icon from "./icon.png";
export const Header = () => {
  return (
    <header className="header__container">
      <nav className="header__content">
        <a href="https://www.youtube.com/watch?v=Fafk-6i37jI">
          <img src={icon} className="header__icon" alt="icon"></img>
        </a>
        <div className="header__links">
          <a href="#">About</a>

          <a href="#">Projects</a>

          <a href="#">Contact</a>
        </div>
      </nav>
    </header>
  );
};
