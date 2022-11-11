import s from "./Main.module.css";
import InformationAboutMe from "../Information/InformationAboutMe";
import MyProject from "../MyProject/MyProject";

function Main() {
  return (
    <main className={s.main}>
      <div className={s.content}>
        <div className={s.wrapper}>
          <InformationAboutMe />
          <MyProject />
          <div className={s.bggreen}></div>
          <div className={s.bgblue}></div>
        </div>
      </div>
    </main>
  );
}

export default Main;
