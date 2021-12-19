import "./MoviesCard.css";

function MoviesCard() {
  return (
    <li className="movie-card">
      <div className="movie-card__content">
        <div className="movie-card__text-box">
          <h2 className="movie-card__title">Венеция</h2>
          <p className="movie-card__subtitle">1ч 42м</p>
        </div>
        <div>
          <button className="icon movie-card__like"></button>
          <button className="icon movie-card__liked"></button>
          <button className="icon movie-card__delete"></button>
        </div>
      </div>
      <img
        className="mevie-card__image"
        alt="Изображение фрагмента из фильма"
        src="https://images.unsplash.com/photo-1637507143792-66d72198f87e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
      />
    </li>
  );
}

export default MoviesCard;
