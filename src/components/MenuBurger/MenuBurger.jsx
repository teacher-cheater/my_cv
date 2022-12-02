import React from "react";
//import { useState } from "react";
import s from "./MenuBurger.module.css";
//import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
//import { DiAngularSimple } from "react-icons/di";

function MenuBurger() {
  //const [menuBurger, setMenuBurger] = useState(false);

  return (
    <nav className={s.menu}>
      <div className={s.burgerbtn}>
        {/*{menuBurger ? <AiOutlineClose /> : <AiOutlineMenu />}*/}
        <span className={s.line}></span>
      </div>
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
        <li>
          <a className={s.link} href="#">
            _contact-me
          </a>
        </li>
      </ul>*/}
    </nav>
  );
}
export default MenuBurger;
