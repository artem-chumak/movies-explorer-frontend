import "./Register.css";
import logo from "../../images/logo.svg";

function Register() {
  return (
    <section className="register">
      <img className="register__logo" src={logo} alt="логотип, стилизованный под смайлик" />
      <h1 className="register__title">Добро пожаловать!</h1>
      <form className="register__form">

      </form>
    </section>
  );
}

export default Register;
