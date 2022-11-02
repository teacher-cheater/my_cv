import React from "react";
import Header from "../Header/Header";
import InformationAboutMe from "../Information/InformationAboutMe";

import s from "./Main.module.css";

function Main() {
  return (
    <div className={s.wrapper}>
      <Header />
      <InformationAboutMe />
    </div>
  );
}

export default Main;
