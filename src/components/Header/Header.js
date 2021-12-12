import "./Header.css";
import Logo from "../Logo/Logo";
import NavTab from "../NavTab/NavTab";
import Navigation from "../Navigation/Navigation";
import AccountLink from "../AccountLink/AccountLink";
import { useRouteMatch } from "react-router-dom";

function Header({ handleMenu }) {
  const matchMain = useRouteMatch("/");

  return (
    <header className="header">
      <div className="header__container">
        <Logo />
        {matchMain.isExact ? (
          <NavTab />
        ) : (
          <>
            <Navigation />
            <div className="header__link-wrapper">
              <AccountLink />
            </div>
            <button onClick={ handleMenu } className="header__menu-button"></button>
          </>
        )}
      </div>
    </header>
  );
}

export default Header;
