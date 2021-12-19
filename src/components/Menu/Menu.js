import "./Menu.css";
import AccountLink from "../AccountLink/AccountLink";
import { NavLink } from "react-router-dom";

function Menu({ isMenuOpen, handleMenu }) {
  return (
    <section className={isMenuOpen ? "menu" : "menu_hidden"}>
      <div className="menu__sidebar">
        <div className="menu__sidebar-wrapper">
          <button onClick={handleMenu} className="menu__exit-button"></button>
          <nav className="menu__navigation">
            <NavLink
              onClick={handleMenu}
              to="/"
              className="menu__link"
              href="#"
            >
              Главная
            </NavLink>
            <NavLink
              onClick={handleMenu}
              to="/movies"
              activeClassName="menu__link_active"
              className="menu__link"
              href="#"
            >
              Фильмы
            </NavLink>
            <NavLink
              onClick={handleMenu}
              to="/saved-movies"
              activeClassName="menu__link_active"
              className="menu__link"
              href="#"
            >
              Сохранённые фильмы
            </NavLink>
          </nav>
        </div>
        <AccountLink handleMenu={handleMenu} />
      </div>
    </section>
  );
}

export default Menu;
