import "./AboutProject.css";

function AboutProject() {
  return (
    <section id="about-project" className="about-project">
      <h2 className="about-project__title">О проекте</h2>
      <div className="about-project__box">
        <div className="about-project__stage">
          <p className="about-project__stage-tittle">
            Дипломный проект включал 5 этапов
          </p>
          <p className="about-project__stage-text">
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и финальные доработки.
          </p>
        </div>
        <div className="about-project__stage">
          <p className="about-project__stage-tittle">
            На выполнение диплома ушло 5 недель
          </p>
          <p className="about-project__stage-text">
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
            соблюдать, чтобы успешно защититься.
          </p>
        </div>
      </div>
      <div className="about-project__timeline-box">
        <div className="about-project__back">
          <div className="about-project__timeline-back">1 неделя</div>
          <p className="about-project__timeline-text">Back-end</p>
        </div>
        <div className="about-project__front">
          <div className="about-project__timeline-front">4 недели</div>
          <p className="about-project__timeline-text">Front-end</p>
        </div>
      </div>
    </section>
  );
}

export default AboutProject;
