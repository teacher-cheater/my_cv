import React from "react";
import MenuBurger from "../MenuBurger/MenuBurger";
import s from "./Header.module.css";

function Header({ Link }) {
  const items = [
    { value: "_hello", href: "./" },
    { value: "_about-me", href: "./AboutMe" },
    { value: "_projects", href: "./projects" },
    { value: "_contact-me", href: "./contacts" },
  ];

  return (
    <header className={s.header}>
      <div className={s.container}>
        <div className={s.wrapper}>
          <div className={s.cotent}>
            <h3 className={s.name}>
              <a href="#">teacher-cheater</a>
            </h3>
            <nav className={s.navigation}>
              <ul className={s.list}>
                {items.map((item, idx) => {
                  return (
                    <li key={`Link item ${idx}`} className={s.link}>
                      <a className={s.link} href={item.href}>
                        {item.value}
                      </a>
                    </li>
                  );
                })}
              </ul>

              {/*<ul className={s.list}>
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
              </ul>*/}
            </nav>
          </div>
          <div className={s.block}>
            <div className={s.contact}>
              <a href="#">_contact-me</a>
            </div>
            <MenuBurger />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
