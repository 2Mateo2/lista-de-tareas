import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import '../styles/ListaDeItem.css';
import ItemForm from './ItemForm';
import Item from './Item';
import { FaArrowLeft, FaTrash } from 'react-icons/fa';

Modal.setAppElement('#root'); // Important for accessibility

function ListaDeItem({ localStorageKey, setView }) {
  const [items, setItems] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [showDeleteAll, setShowDeleteAll] = useState(false); // Agregar estado para controlar la visibilidad del botón

  const titulos = {
    tareas: 'MIS TAREAS',
    peliculas: 'PELICULAS POR VER',
    series: 'SERIES POR VER',
    compras: 'LISTA DE COMPRAS',
    libros: 'LIBROS POR LEER',
    lugares: 'LUGARES POR VISITAR',
    metas: 'METAS Y OBJETIVOS',
    frases: 'FRASES FAVORITAS',
    // Agrega más listas aquí
  };

  const titulo = titulos[localStorageKey] || 'OTRAS LISTAS';

  // Cargar items desde el almacenamiento local al montar el componente 
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem(localStorageKey));
    // console.log('Items cargados al montar:', stored);
    if (stored) {
      setItems(stored);
    }
  }, [localStorageKey]);

  // Guardar items en el almacenamiento local cada vez que se actualizan
  useEffect(() => {
    localStorage.setItem(localStorageKey, JSON.stringify(items));
  }, [items, localStorageKey]);

  // Agregar un efecto para actualizar el estado de la visibilidad del botón
  useEffect(() => {
    setShowDeleteAll(items.length > 1);
  }, [items]);

  const agregarItem = item => {
    if (item.texto.trim()) {
      item.texto = item.texto.trim();
      const itemsActualizadas = [item, ...items];
      setItems(itemsActualizadas);
    } else {
      alert('Por favor ingrese el nuevo item');
    }
  };

  const eliminarItem = id => {
    const itemsActualizadas = items.filter(item => item.id !== id);
    setItems(itemsActualizadas);
  };

  const completarItem = id => {
    const itemsActualizadas = items.map(item => {
      if (item.id === id) {
        item.completada = !item.completada;
      }
      return item;
    });
    setItems(itemsActualizadas);
  };

  const eliminarTodosItems = () => {
    setItems([]);
    localStorage.removeItem(localStorageKey);
    closeModal();
  };

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <>
      <div className="header">
        <button className="back-button" onClick={() => setView('agenda')}>
          <FaArrowLeft />
        </button>
        <h1 className="lista-titulo">{titulo}</h1>
      </div> 
      <div className="form-y-eliminar">
        <ItemForm onSubmit={agregarItem} />
        {showDeleteAll && ( // Mostrar el botón solo si showDeleteAll es true
          <button className="eliminar-todo-button" onClick={openModal}>
            <FaTrash />
          </button>
        )}
      </div>
      <div className='item-lista-contenedor'>
        {items.map(item => (
          <Item
            key={item.id}
            id={item.id}
            texto={item.texto}
            completada={item.completada}
            completarItem={completarItem}
            eliminarItem={eliminarItem}
          />
        ))}
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Confirm Delete"
        className="modal"
        overlayClassName="overlay"
      >
        <h2 className='black'>¿Estás seguro?</h2>
        <p className='black'>¿Deseas eliminar todos los items agregados?</p>
        <button onClick={eliminarTodosItems} className="confirm-button">Sí, eliminar todo</button>
        <button onClick={closeModal} className="cancel-button">Cancelar</button>
      </Modal>
    </>
  );
}

export default ListaDeItem;

