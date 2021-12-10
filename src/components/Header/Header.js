import "./Header.css";
import logo from "../../images/logo.svg";
import NavTab from "../NavTab/NavTab";
import Navigation from "../Navigation/Navigation";
import AccountLink from "../AccountLink/AccountLink";

function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <img src={logo} alt="логотип, стилизованный под смайлик" />
        <Navigation />
        <div className="header__link-wrapper">
          <AccountLink />
        </div>
        <button className="header__menu-button"></button>
        {/* <NavTab /> */}
      </div>
    </header>
  );
}

export default Header;
