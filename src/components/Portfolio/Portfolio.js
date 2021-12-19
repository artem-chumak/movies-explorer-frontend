import "./Portfolio.css";

function Portfolio() {
  return (
    <section className="portfolio">
      <h2 className="portfolio__title">Портфолио</h2>
      <ul className="portfolio__links">
        <li className="portfolio__link-box">
          <a
            className="portfolio__link"
            href="https://github.com/artem-chumak/how-to-learn"
            target="_blank"
            rel="noreferrer"
          >
            <p className="portfolio__link-text">Статичный сайт</p>
            <p className="portfolio__link-icon">↗</p>
          </a>
        </li>
        <li className="portfolio__link-box">
          <a
            className="portfolio__link"
            href="https://github.com/artem-chumak/russian-travel"
            target="_blank"
            rel="noreferrer"
          >
            <p className="portfolio__link-text">Адаптивный сайт</p>
            <p className="portfolio__link-icon">↗</p>
          </a>
        </li>
        <li className="portfolio__link-box">
          <a
            className="portfolio__link"
            href="https://github.com/artem-chumak/react-mesto-api-full"
            target="_blank"
            rel="noreferrer"
          >
            <p className="portfolio__link-text">Одностраничное приложение</p>
            <p className="portfolio__link-icon">↗</p>
          </a>
        </li>
      </ul>
    </section>
  );
}

export default Portfolio;
