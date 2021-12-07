import "./Header.css";
import logo from "../../images/logo.svg";
import NavTab from "../NavTab/NavTab";

function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <img src={logo} alt="логотип, стилизованный под смайлик" />
        <NavTab />
        {/* <nav></nav>
        <a></a>
        <button></button> */}
      </div>
    </header>
  );
}

export default Header;
