import "./AboutMe.css";
import photo from "../../images/photo.jpg";

function AboutMe() {
  return (
    <section className="about">
      <h2 className="about__title">Студент</h2>
      <div className="about__info-block">
        <div className="about__bio-block">
          <div>
            <h3 className="about__name">Артём</h3>
            <p className="about__occupation">Фронтенд-разработчик, 36 лет</p>
            <p className="about__bio">
              Я&nbsp;родился и&nbsp;живу в&nbsp;Саратове, закончил факультет
              экономики СГУ. У&nbsp;меня есть жена и&nbsp;дочь. Я&nbsp;люблю
              слушать музыку, а&nbsp;ещё увлекаюсь бегом. Недавно начал кодить.
              С&nbsp;2015 года работал в&nbsp;компании &laquo;СКБ Контур&raquo;.
              После того, как прошёл курс по&nbsp;веб-разработке, начал
              заниматься фриланс-заказами и&nbsp;ушёл с&nbsp;постоянной работы.
            </p>
          </div>
          <div>
            <a
              className="about__link"
              href="https://www.facebook.com/artem.chumak.94"
              target="_blank"
              rel="noreferrer"
            >
              Facebook
            </a>
            <a
              className="about__link"
              href="https://github.com/artem-chumak"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
          </div>
        </div>
        <img src={photo} alt="фотограция" className="about__photo" />
      </div>
    </section>
  );
}

export default AboutMe;
