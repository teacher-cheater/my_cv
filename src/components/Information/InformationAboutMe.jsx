import React from "react";
import s from "./InformationAboutMe.module.css";

function InformationAboutMe() {
  return (
    <>
      <div className={s.block}>
        <p className={s.text}>Hi all. I am</p>
        <h1 className={s.name}>Nekipelov Evgeniy</h1>
        <a className={s.profession} href="#">
          Front-end developer
        </a>
      </div>
      <div className={s.block}>
        <p className={s.info}>// complete the game to continue</p>
        <p className={s.info}>// you can also see it on my Github page</p>
        <a className={s.link} href="#">
          <span className={s.const}>const</span> const{" "}
          <span className={s.github}>githubLink</span> =
          <span className={s.project}>“https://github.com/example/url”</span>
        </a>
      </div>
    </>
  );
}

export default InformationAboutMe;
