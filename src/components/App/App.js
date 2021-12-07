// todo - заменить спец. символы юникодом, еще сделать типограф
// todo - убрать бордеры в блоках, то, что в комментариях
// todo - пройтись по тому, что сделал и отформатировать код
// todo - сделать отдельные компоненты с повторениями
// todo - сделать плавный переход на страницу о проекте с главной
// todo - Добавить линки на страницы в NavTab
// todo - Заменить текст хомячка на мой

import "./App.css";
// import Main from "../Main/Main";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Movies from "../Movies/Movies";

function App() {
  return (
    <div className="App">
      <Header />
      {/* <Main /> */}
      <Movies />
      <Footer />
    </div>
  );
}

export default App;
