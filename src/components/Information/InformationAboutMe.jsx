import React from "react";
import s from "./InformationAboutMe.module.css";

function InformationAboutMe() {
  return (
    <section className={s.section}>
      <div className={s.block}>
        <p className={s.text}>Hi all. I am</p>
        <h1 className={s.name}>Nekipelov Evgeniy</h1>
        <p className={s.profession}> > Front-end developer</p>
      </div>
      <div className={s.block}>
        <p className={s.info}>// complete the game to continue</p>
        <p className={s.info}>// you can also see it on my Github page</p>
        <p className={s.findme}>// find my profile on Github: </p>
        <div className={s.link}>
          <span className={s.const}>const</span>{" "}
          <span className={s.github}>githubLink</span> =
          <span className={s.project}>
            {" "}
            “https://github.com/teacher-cheater”
          </span>
        </div>
      </div>
    </section>
  );
}

export default InformationAboutMe;
