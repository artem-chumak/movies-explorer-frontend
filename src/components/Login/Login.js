import "./Login.css";
import logo from "../../images/logo.svg";

function Login() {
  return (
    <section className="login">
      <img
        className="login__logo"
        src={logo}
        alt="логотип, стилизованный под смайлик"
      />
      <form className="login__form">
        <h1 className="login__title">Добро пожаловать!</h1>
        <label className="login__label" for="login-email">
          E-mail
        </label>
        <input
          className="login__input"
          id="login-email"
          name="login-email"
          type="email"
          required
        />
        <label className="login__label" for="login-password">
          Пароль
        </label>
        <input
          className="login__input"
          minlength="8"
          id="login-password"
          name="login-password"
          type="password"
          required
        />
        <span className="login__error-text">Что-то пошло не так...</span>
        <button className="login__button" type="submit">
          Зарегистрироваться
        </button>
        <span className="login__text">
          Ещё не зарегистрированы?
          <a href="#" className="login__link">
            Регистрация
          </a>
        </span>
      </form>
    </section>
  );
}

export default Login;
