import s from "./MyProject.module.css";

function MyProject() {
  return (
    <section className={s.section}>
      <div className={s.container}>
        <div className={s.wrapper}>
          <div className={s.project}></div>
        </div>
      </div>
    </section>
  );
}

export default MyProject;
