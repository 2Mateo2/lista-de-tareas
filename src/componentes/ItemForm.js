import React, { useState } from 'react';
import '../styles/ItemForm.css';
import { v4 as uuidv4 } from 'uuid';

function ItemForm({ onSubmit }) {
  const [input, setInput] = useState('');

  const manejarCambio = e => {
    setInput(e.target.value);
  };

  const manejarEnvio = e => {
    e.preventDefault();

    const itemNuevo = {
      id: uuidv4(),
      texto: input,
      completada: false,
    };

    onSubmit(itemNuevo);
    limpiarInput();
  };

  const limpiarInput = () => {
    setInput('');
  };

  return (
    <form className='item-formulario' onSubmit={manejarEnvio}>
      <input
        className='item-input'
        type='text'
        placeholder='Escribe el item a agregar'
        name='texto'
        autoComplete='off'
        value={input}
        onChange={manejarCambio}
      />
      <button className='item-boton'>
        Agregar
      </button>
    </form>
  );
}

export default ItemForm;
