import React, { useState } from 'react';
import './App.css';
import ListaDeItem from './componentes/ListaDeItem';
import MiAgenda from './componentes/MiAgenda';

function App() {
  const [view, setView] = useState('agenda');

  return (
    <div className='aplicacion-items'>
      {view === 'agenda' && <MiAgenda setView={setView} />}
      
      {view === 'tareas' && (
        <div className='items-lista-principal'>
          <ListaDeItem localStorageKey="tareas" setView={setView} />
        </div>
      )}
      {view === 'peliculas' && (
        <div className='items-lista-principal'>
          <ListaDeItem localStorageKey="peliculas" setView={setView} />
        </div>
      )}
      {view === 'series' && (
        <div className='items-lista-principal'>
          <ListaDeItem localStorageKey="series" setView={setView} />
        </div>
      )}
      {view === 'libros' && (
        <div className='items-lista-principal'>
          <ListaDeItem localStorageKey="libros" setView={setView} />
        </div>
      )}
      {view === 'compras' && (
        <div className='items-lista-principal'>
          <ListaDeItem localStorageKey="compras" setView={setView} />
        </div>
      )}
      {view === 'lugares' && (
        <div className='items-lista-principal'>
          <ListaDeItem localStorageKey="lugares" setView={setView} />
        </div>
      )}
      {view === 'metas' && (
        <div className='items-lista-principal'>
          <ListaDeItem localStorageKey="metas" setView={setView} />
        </div>
      )}
      {view === 'frases' && (
        <div className='items-lista-principal'>
          <ListaDeItem localStorageKey="frases" setView={setView} />
        </div>
      )}
    </div>
  );
}

export default App;