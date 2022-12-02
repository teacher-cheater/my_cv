import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import circle from "./icons-about/circle.svg";
//import details from "./icons-about/details.svg";
//import email from "./icons-about/email.svg";
//import folder1 from "./icons-about/folder1.svg";
//import folder2 from "./icons-about/folder2.svg";
//import folder3 from "./icons-about/folder3.svg";
import game from "./icons-about/game.svg";
import info from "./icons-about/info.svg";
//import phone from "./icons-about/phone.svg";
//import school from "./icons-about/school.svg";
//import star from "./icons-about/star.svg";

import s from "./AboutMe.module.css";

function AboutMe() {
  return (
    <div className={s.wrapper}>
      <Header />
      <div className={s.container}>
        <div className={s.sort}>
          <div className={s.icons}>
            <img className={s.icon} src={info} alt="info" />
          </div>
          <div className={s.icons}>
            <img className={s.icon} src={circle} alt="circle" />
          </div>
          <div className={s.icons}>
            <img className={s.icon} src={game} alt="game" />
          </div>
        </div>
        <div className={s.main}>
          <div className={s.subtitle}>personal-info</div>
          <div className={s.info}>
            <div className={s.bio}></div>
            <div className={s.interests}></div>
            <div className={s.education}></div>
          </div>
        </div>
        <div className={s.about}>333</div>
        <div className={s.code}>444</div>
      </div>
      <Footer />
    </div>
  );
}

export default AboutMe;
