// todo - заменить спец. символы юникодом, еще сделать типограф
// todo - убрать бордеры в блоках
// todo - пройтись по тому, что сделал и отформатировать код
// todo - сделать отдельные компоненты с повторениями
// todo - сделать плавный переход на страницу о проекте с главной

import "./App.css";
import Main from "../Main/Main";
import Header from "../Header/Header";
import Footer from "../Footer/Footer"

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
