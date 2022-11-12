import React from "react";
import s from "./MenuBurger.module.css";

function MenuBurger() {
  return (
    <nav className={s.menu}>
      <div className={s.burgerbtn}>
        <span className={s.line}></span>
      </div>
    </nav>
  );
}
export default MenuBurger;
