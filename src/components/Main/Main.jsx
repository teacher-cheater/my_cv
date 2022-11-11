import s from "./Main.module.css";
import InformationAboutMe from "../Information/InformationAboutMe";

function Main() {
  return (
    <main className={s.main}>
      <div className={s.container}>
        <div className={s.wrapper}>
          <InformationAboutMe />
        </div>
      </div>
    </main>
  );
}

export default Main;
