import "./NavTab.css"
import { Link } from 'react-router-dom';

function NavTab() {
  return (
    <nav className="navtab">
      <Link to="/signup" className="navtab__reg-link">Регистрация</Link>
      <Link to="/signin" className="navtab__entrance-link">Войти</Link>
    </nav>
  );
}

export default NavTab;
