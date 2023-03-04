import "./App.css";
import moment from "moment";
import logo from "./images/logo.png";
import { useEffect, useState } from "react";
function App() {
  const semana = moment().week();
  const { innerWidth: width } = window;
  const [isMobile, setIsMobile] = useState(width < 768);

  useEffect(() => {
    setIsMobile(width < 768);
  }, [width]);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="logo-header" />
        <div className="Text-header">
          FALA,
          <div>DESENVOLVER'S</div>
        </div>
      </header>
      <main>
        <div className="Text-main">
          Não se perde hein?!
          <div>
            Estamos na <span className="week-main">semana {semana - 3} </span>{" "}
            {isMobile && <br />} do programa Desenvolve!
          </div>
        </div>
      </main>
      <footer className="Footer">
        <span>Links úteis:</span>
        <a href="https://www.alura.com.br/">Alura</a>
        <a href="https://www.aluralingua.com.br/">Alura Línguas</a>
        <span className="Text-focus">Mantenha o foco!</span>
        <span className="Developers">Desenvolvido por Angelo Alves e Davi Emmanuel</span>
      </footer>
    </div>
  );
}

export default App;
