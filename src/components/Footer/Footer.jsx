import React from "react";
import tg from "./icon-social/tg.svg";
import whatsapp from "./icon-social/whatsapp.svg";
import github from "./icon-social/github.svg";

import s from "./Footer.module.css";

function Footer() {
  return (
    <footer className={s.footer}>
      <div className={s.container}>
        <div className={s.wrapper}>
          <div className={s.items}>
            <h3 className={s.name}>find me in</h3>
            <nav className={s.navigation}>
              <ul className={s.list}>
                <li>
                  <a className={s.link} target="_blank" href="@teacher_cheater">
                    <img className={s.icon} src={tg} alt="tg" />
                  </a>
                </li>
                <li>
                  <a
                    className={s.link}
                    target="_blank"
                    href="https://api.whatsapp.com/send? phone=9650889868"
                  >
                    <img className={s.icon} src={whatsapp} alt="whatsapp" />
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          <div className={s.contact}>
            <a target="_blank" href="https://github.com/teacher-cheater">
              <span>teacher-cheater</span>
              <img className={s.icon} src={github} alt="github" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
