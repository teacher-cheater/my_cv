import React from "react";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import Menu from "../Menu/Menu";

import s from "./MainPage.module.css";

function MainPage({ Link }) {
  const items = [
    { value: "Main", href: "/MainPage" },
    { value: "_hello", href: "./Menu" },
    { value: "_about-me", href: "./AboutMe" },
    { value: "_projects", href: "./Footer" },
    { value: "_contact-me", href: "./Information" },
  ];

  return (
    <div className={s.wrapper}>
      <Header />
      <Main />
      <Menu header={"Burger"} items={items} Link={Link} />
      <Footer />
    </div>
  );
}

export default MainPage;
