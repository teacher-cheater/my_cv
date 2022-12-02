import React from "react";
import s from "./Menu.module.css";

function Menu({ header, items, Link }) {
  return (
    <div className={s.menu}>
      <div className={s.blur}>
        <div className={s.content}>
          <div className={s.header}>{header}</div>
          <ul className={s.list}>
            {items.map((item, idx) => {
              return (
                <li key={`Link item ${idx}`} className={s.link}>
                  <a href={item.href}>{item.value}</a>
                </li>
              );
            })}
          </ul>
          {/*<ul className={s.list}>
            <li className={s.link}>
              <Link to="/MainPage">Main</Link>
            </li>
            <li className={s.link}>
              <Link to="/Menu">_hello</Link>
            </li>
            <li className={s.link}>
              <Link to="/AboutMe">_about-me</Link>
            </li>
            <li className={s.link}>
              <Link to="/">_projects</Link>
            </li>
            <li className={s.link}>
              <Link to="/">_contact-me</Link>
            </li>
          </ul>*/}
        </div>
      </div>
    </div>
  );
}

export default Menu;
