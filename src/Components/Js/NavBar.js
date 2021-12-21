import React from "react";
import "../Css/navbar.css";

function NavBar() {
  const menuClickHandler = (e) => {
    const target = e.target.closest(".nav-bar");
    const menu = e.target.closest("ion-icon");
    if (target.classList.contains("open")) {
      target.classList.remove("open");
      menu.name = "menu-outline";
      menu.style.transitionDelay = "0.3s";
      menu.style.color = "#000";
    } else {
      target.classList.add("open");
      menu.name = "close-outline";
      menu.style.color = "#fff";
      menu.style.transitionDelay = "0s";
    }
  };
  return (
    <nav className="nav-bar">
      <img src="./images/Logo.svg" alt="SuGo" className="logo" />
      {/* prettier-ignore */}
      <ul className="nav-links">
        <li>
          <a href="/" className="nav-link">About Me</a>
        </li>
        <li>
          <a href="/" className="nav-link">Expirence</a>
        </li>
        <li>
          <a href="/" className="nav-link">Projects</a>
        </li>
        <li>
          <a href="/" className="nav-link">Blogs</a>
        </li>
        <li>
          <a href="/" className="nav-link">Contact</a>
        </li>
        <li>
          <a href="/" className={`nav-link nav-cta cta`}>Resume</a>
        </li>
      </ul>
      <ion-icon
        name="menu-outline"
        className="menu"
        onClick={menuClickHandler}
      ></ion-icon>
    </nav>
  );
}

export default NavBar;
