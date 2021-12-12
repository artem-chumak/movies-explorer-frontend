import "./Profile.css";

function Profile() {
  return (
    <section className="profile">
      <form className="profile__form">
        <h1 className="profile__title">Привет, Артём!</h1>
        <section className="profile__section">
          <label htmlFor="profile__name" className="profile__label">
            Имя
          </label>
          <input
            id="profile__name"
            name="profile__name"
            type="text"
            className="profile__input"
            placeholder="имя"
            minLength="2"
          />
        </section>
        <section className="profile__section">
          <label htmlFor="profilef__email" className="profile__label">
            E&#8209;mail
          </label>
          <input
            id="profile__email"
            name="profile__email"
            type="email"
            className="profile__input"
            placeholder="email"
          />
        </section>
        <button type="submit" className="profile__button profile__button-edit">
          Редактировать
        </button>
        <button type="button" className="profile__button profile__button-exit">
          Выйти из аккаунта
        </button>
      </form>
    </section>
  );
}

export default Profile;
