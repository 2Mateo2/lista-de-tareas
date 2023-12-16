import './App.css';
import freeCodeCampLogo from './img/freecodecamp-logo.png';
import ListaDeTareas from './componentes/ListaDeTareas';

function App() {
  return (
    <div className='aplicacion-tareas'>
      <div className='tareas-lista-principal'>
        <h1>MIS TAREAS</h1>
        <ListaDeTareas />
      </div>
    </div>
  );
}

export default App;
