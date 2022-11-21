import React from "react";
import { useState } from "react";
import s from "./MenuBurger.module.css";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { DiAngularSimple } from "react-icons/di";

function MenuBurger() {
  const [menuBurger, setMenuBurger] = useState(false);

  return (
    <nav className={s.menu}>
      <div onClick={() => setMenuBurger(true)} className={s.burgerbtn}>
        {/*{menuBurger ? setMenuBurger(true) : setMenuBurger(false)}*/}
        {/*<span className={s.line}></span>*/}
        {/*<AiOutlineMenu />*/}
        <AiOutlineClose />
        {/*<DiAngularSimple />*/}
        {
          <DiAngularSimple
            background-color="black"
            size={80}
            stroke="currentColor"
            strokeWidth=".3"
          />
        }
      </div>
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
        <li>
          <a className={s.link} href="#">
            _contact-me
          </a>
        </li>
      </ul>
    </nav>
  );
}
export default MenuBurger;
