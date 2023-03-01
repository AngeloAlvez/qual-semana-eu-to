import './App.css';
import moment from 'moment';
import logo from './images/logo.png'
function App() {
  const semana = moment().week();
  console.log(semana)
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className='logo-header'/>
        <div className="Text-header">
         FALA
         <div>
          DESENVOLVER'S
         </div>
        </div>
       
      </header>
      <main>
        <div className="Text-main">
        Não se perde hein?!
         <div>
         Estamos na <div className="week-main">semana {semana - 3} </div> <br/> do programa Desenvolve!
         </div>
        </div>
       
      </main>
      <footer className="Footer">
      <div className="Text-focus">
       Mantenha o foco!
        </div>
      </footer>
      
    </div>
  );
}

export default App;
