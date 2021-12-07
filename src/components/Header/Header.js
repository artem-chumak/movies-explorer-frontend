import "./Header.css";
import logo from "../../images/logo.svg";
// import NavTab from "../NavTab/NavTab";
import Navigation from "../Navigation/Navigation"

function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <img src={logo} alt="логотип, стилизованный под смайлик" />

        <Navigation />

        <a href="#" className="header__link">
          <p className="header__link-text">Аккаунт</p>
          <div className="header__link-icon"></div>
        </a>
        {/* <button></button> */}

        {/* <NavTab /> */}
      </div>
    </header>
  );
}

export default Header;
