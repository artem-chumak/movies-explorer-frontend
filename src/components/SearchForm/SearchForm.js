import "./SearchForm.css";

function SearchForm() {
  return (
    <section className="search-form">
      <div className="search-form__search-box">
        <div className="search-form__wrapper">
          <form className="search-form__form">
            <div className="search-form__icon"></div>
            <input required className="search-form__input" placeholder="Фильм" />
            <button type="submit" className="search-form__button">
              Найти
            </button>
          </form>

          <div className="search-form__toggle-box">
            <input type="checkbox" className="search-from__toggle" />

            <p>Короткометражки</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SearchForm;
