import "./Logo.css"
import logo from "../../images/logo.svg";
import { Link } from "react-router-dom"

function Logo() {
  return (
    <Link to="/" className="logo"><img src={logo} alt="логотип, стилизованный под смайлик" /></Link>
  )
}

export default Logo
