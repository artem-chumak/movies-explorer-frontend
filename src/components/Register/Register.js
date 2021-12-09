import "./Register.css";
import logo from "../../images/logo.svg";

function Register() {
  return (
    <section className="register">
      <img
        className="register__logo"
        src={logo}
        alt="логотип, стилизованный под смайлик"
      />
      <form className="register__form">
        <h1 className="register__title">Добро пожаловать!</h1>
        <label className="register__label" for="register-name">
          Имя
        </label>
        <input
          className="register__input"
          minlength="2"
          id="register-name"
          name="register-name"
          type="text"
          required
        />
        <label className="register__label" for="register-email">
          E-mail
        </label>
        <input
          className="register__input"
          id="register-email"
          name="register-email"
          type="email"
          required
        />
        <label className="register__label" for="register-password">
          Пароль
        </label>
        <input
          className="register__input"
          minlength="8"
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
          Уже зарегистрированы?<a href="#" className="register__link">Войти</a>
        </span>
      </form>
    </section>
  );
}

export default Register;
