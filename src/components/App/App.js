// todo - заменить спец. символы юникодом, еще сделать типограф
// todo - убрать бордеры в блоках, то, что в комментариях
// todo - пройтись по тому, что сделал и отформатировать код
// todo - сделать отдельные компоненты с повторениями
// todo - сделать плавный переход на страницу о проекте с главной
// todo - Добавить линки на страницы в NavTab
// todo - Заменить текст хомячка на мой
// todo - Проверить все линки, котрые есть в пректе
// todo - Клик по логотипу ведет на главную

import "./App.css";
import Main from "../Main/Main";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import NotFound from "../NotFound/NotFound";
import Register from "../Register/Register"
import Login from "../Login/Login"
import Profile from "../Profile/Profile"

function App() {
  return (
    <div className="App">
      {/* <Header /> */}
      {/* <Main /> */}
      {/* <Movies /> */}
      {/* <SavedMovies /> */}
      {/* <Footer /> */}
      {/* <NotFound /> */}
      {/* <Register /> */}
      {/* <Login /> */}
      <Profile />
    </div>
  );
}

export default App;
