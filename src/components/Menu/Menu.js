import "./Menu.css";
import AccountLink from "../AccountLink/AccountLink";

function Menu() {
  return (
    <section className="menu">
      <div className="menu__sidebar">
        <div className="menu__sidebar-wrapper">
          <button className="menu__exit-button"></button>
          <nav className="menu__navigation">
            <a className="menu__link" href="#">
              Главная
            </a>
            <a className="menu__link menu__link_active" href="#">
              Фильмы
            </a>
            <a className="menu__link" href="#">
              Сохранённые фильмы
            </a>
          </nav>
        </div>
        <AccountLink />
      </div>
    </section>
  );
}

export default Menu;
