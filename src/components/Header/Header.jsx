import React from "react";
import s from "./Header.module.css";

function Header() {
  return (
    <header className={s.header}>
      <div className={s.container}>
        <div className={s.wrapper}>
          <h3 className={s.name}>
            <a href="">teacher-cheater</a>
          </h3>
          <nav className={s.navigation}>
            <ul className={s.list}>
              <li>
                <a className={s.link} href="">
                  _hello
                </a>
              </li>
              <li>
                <a className={s.link} href="">
                  _about-me
                </a>
              </li>
              <li>
                <a className={s.link} href="">
                  _projects
                </a>
              </li>
            </ul>
          </nav>
          <div className={s.contact}>
            <a href="">_contact-me</a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
