import React from "react";
import s from "./Header.module.css";

function Header() {
  return (
    <header className={s.header}>
      <div className={s.container}>
        <h3 className={s.name}>
          <a href="">teacher-cheater</a>
        </h3>
        <nav className={s.navigation}>
          <ul className={s.list}>
            <li>
              <a href="">_hello</a>
            </li>
            <li>
              <a href="">_about-me</a>
            </li>
            <li>
              <a href="">_projects</a>
            </li>
          </ul>
        </nav>
        <div className={s.contact}></div>
        <a href="">_contact-me</a>
      </div>
    </header>
  );
}

export default Header;
