import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import circle from "./icons-about/circle.svg";
import details from "./icons-about/details.svg";
import email from "./icons-about/email.svg";
import folder1 from "./icons-about/folder1.svg";
import folder2 from "./icons-about/folder2.svg";
import folder3 from "./icons-about/folder3.svg";
import game from "./icons-about/game.svg";
import info from "./icons-about/info.svg";
import phone from "./icons-about/phone.svg";
import school from "./icons-about/school.svg";
import star from "./icons-about/star.svg";
import bg from "./bg/bg.jpg";

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
          <div className={s.subtitle}>
            <p>personal-info</p>
            <span>x</span>
          </div>
          <div className={s.info}>
            <div className={s.bio}>
              <img className={s.folder} src={folder1} alt="folder" />
              <p className={s.text}>bio</p>
            </div>
            <div className={s.bio}>
              <img className={s.folder} src={folder2} alt="folder" />
              <p className={s.text}>interests</p>
            </div>
            <div className={s.bio}>
              <img className={s.folder} src={folder3} alt="folder" />
              <p className={s.text}>education</p>
            </div>
            <div className={s.schools}>
              <img className={s.school} src={school} alt="school" />
              <p className={s.text}>high-school</p>
            </div>
            <div className={s.schools}>
              <img className={s.school} src={school} alt="school" />
              <p className={s.text}>university</p>
            </div>
          </div>
          <div className={s.subtitle}>
            <p>contacts</p>
          </div>
          <div className={s.contacts}>
            <div className={s.contact}>
              <img className={s.connect} src={email} alt="email" />
              <p className={s.text}>nekipelov@gmail.com</p>
            </div>
            <div className={s.contact}>
              <img className={s.connect} src={phone} alt="phone" />
              <p className={s.text}>+79650889868</p>
            </div>
          </div>
        </div>
        <div className={s.about}>
          <div className={s.myself}>
            <p className={s.number}>2</p> <p>/** * About me</p>
            <p className={s.number}>2</p>{" "}
            <p>* I have 5 years of еxperience in web</p>
            <p className={s.number}>2</p>{" "}
            <p>* development lorem ipsum dolor sit amet,</p>
            <p className={s.number}>2</p>{" "}
            <p>* consectetur adipiscing elit, sed do eiusmod</p>
            <p className={s.number}>2</p>{" "}
            <p>* tempor incididunt ut labore et dolore</p>
            <p className={s.number}>2</p>{" "}
            <p>* magna aliqua. Ut enim ad minim veniam,</p>
            <p className={s.number}>2</p>{" "}
            <p>* quis nostrud exercitation ullamco laboris</p>
            <p className={s.number}>2</p>{" "}
            <p>* nisi ut aliquip ex ea commodo consequat.</p>
            <p className={s.number}>2</p> <p>* </p>
            <p className={s.number}>2</p>{" "}
            <p>* Duis aute irure dolor in reprehenderit in</p>
            <p className={s.number}>2</p>{" "}
            <p>* Duis aute irure dolor in reprehenderit in */</p>
          </div>
        </div>
        <div className={s.code}>
          <div className={s.codeTitle}>// Code snippet showcase:</div>
          <div className={s.blockCode}>
            <div className={s.example}>
              <div className={s.top}>
                <div className={s.user}>
                  <img className={s.ava} src={school} alt="ava" />
                  <div className={s.data}>
                    <h3 className={s.username}>@username</h3>
                    <p>Created 5 months ago</p>
                  </div>
                </div>
                <div className={s.details}>
                  <div className={s.detail}>
                    <img className={s.img} src={details} alt="details" />
                    <p>details</p>
                  </div>
                  <div className={s.detail}>
                    <img className={s.img} src={star} alt="star" />
                    <p>stars</p>
                  </div>
                </div>
              </div>
              <div className={s.bottom}>
                <img className={s.s} src={bg} alt="bg" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default AboutMe;
