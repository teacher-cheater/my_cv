import React from "react";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";

import s from "./MainPage.module.css";

function MainPage() {
  return (
    <div className={s.wrapper}>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default MainPage;
