import "./Register.css";
import Logo from "../Logo/Logo"
import { Link } from "react-router-dom"

function Register() {
  return (
    <section className="register">
      <Logo />
      <form className="register__form">
        <h1 className="register__title">Добро пожаловать!</h1>
        <label className="register__label" htmlFor="register-name">
          Имя
        </label>
        <input
          className="register__input"
          minLength="2"
          id="register-name"
          name="register-name"
          type="text"
          required
        />
        <label className="register__label" htmlFor="register-email">
          E-mail
        </label>
        <input
          className="register__input"
          id="register-email"
          name="register-email"
          type="email"
          required
        />
        <label className="register__label" htmlFor="register-password">
          Пароль
        </label>
        <input
          className="register__input"
          minLength="8"
          id="register-password"
          name="register-password"
          type="password"
          required
        />
        <span className="register__error-text">Что-то пошло не так...</span>
        <button className="register__button" type="submit">
          Зарегистрироваться
        </button>
        <span className="register__text">
          Уже зарегистрированы?<Link to="/signin" className="register__link">Войти</Link>
        </span>
      </form>
    </section>
  );
}

export default Register;
