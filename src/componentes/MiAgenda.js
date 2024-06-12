import React from 'react';
import '../styles/MiAgenda.css';
import { FaTasks, FaFilm, FaBook, FaShoppingCart, FaMapMarkerAlt, FaBullseye, FaQuoteRight } from 'react-icons/fa'; // Importamos los iconos

function MiAgenda({ setView }) {
  return (
    <div className='agenda-container'>
      <h1 className='agenda-title'>Mi Agenda</h1>
      <div className='list-container'>
        <div className="list-item" onClick={() => setView('tareas')}>
          <FaTasks className="list-icon" />
          <span className="list-text">Mis Tareas</span>
        </div>
        <div className="list-item" onClick={() => setView('peliculas')}>
          <FaFilm className="list-icon" />
          <span className="list-text">Peliculas por ver</span>
        </div>
        <div className="list-item" onClick={() => setView('series')}>
          <FaFilm className="list-icon" />
          <span className="list-text">Series por ver</span>
        </div>
        <div className="list-item" onClick={() => setView('libros')}>
          <FaBook className="list-icon" />
          <span className="list-text">Libros por leer</span>
        </div>
        <div className="list-item" onClick={() => setView('compras')}>
          <FaShoppingCart className="list-icon" />
          <span className="list-text">Lista de compras</span>
        </div>
        <div className="list-item" onClick={() => setView('lugares')}>
          <FaMapMarkerAlt className="list-icon" />
          <span className="list-text">Lugares por visitar</span>
        </div>
        <div className="list-item" onClick={() => setView('metas')}>
          <FaBullseye className="list-icon" />
          <span className="list-text">Metas y Objetivos</span>
        </div>
        <div className="list-item" onClick={() => setView('frases')}>
          <FaQuoteRight className="list-icon" />
          <span className="list-text">Frases Favoritas</span>
        </div>
      </div>
    </div>
  );
}

export default MiAgenda;
