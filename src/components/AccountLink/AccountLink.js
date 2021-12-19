import "./AccountLink.css"
import { Link } from "react-router-dom"

function AccountLink({ handleMenu }) {
  return (
    <Link onClick={handleMenu} to="/profile" className="account-link">
      <p className="account-link__text">Аккаунт</p>
      <div className="account-link__icon"></div>
    </Link>
  );
}

export default AccountLink
