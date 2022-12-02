import React from "react";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import Menu from "../Menu/Menu";

import s from "./MainPage.module.css";

function MainPage({ Link }) {
  const items = [
    { value: "_hello", href: "./" },
    { value: "_about-me", href: "./AboutMe" },
    { value: "_projects", href: "./projects" },
    { value: "_contact-me", href: "./contacts" },
  ];

  return (
    <div className={s.wrapper}>
      <Header items={items} Link={Link} />
      <Main />
      <Menu header={"Burger"} items={items} Link={Link} />
      <Footer />
    </div>
  );
}

export default MainPage;
