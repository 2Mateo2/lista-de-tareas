import React, { useState } from 'react'
import '../styles/TareaForm.css'
import { v4 as uuidv4} from 'uuid'

function TareaForm(props) {

  const [input, setInput] = useState('');

  const manejarCambio = e => {
    //Con e.target.value se obtiene el valor del input
    setInput(e.target.value);
  };

  const manejarEnvio = e => {
    e.preventDefault();

    const tareaNueva = {
      id: uuidv4(),
      texto: input,
      completada: false
    }
    props.onSubmit(tareaNueva);
    limpiarInput();

  };

  const limpiarInput = () => {
    document.getElementById('texto').value='';
    setInput('');
  };

  return (
    <form className='tarea-formulario'
      onSubmit={manejarEnvio}>
      <input
        className='tarea-input'
        type='text'
        placeholder='Escribe una tarea'
        id='texto'
        name='texto' 
        autoComplete='off'
        onChange={manejarCambio}/>
      <button className='tarea-boton'>
        Agragar Tarea
      </button>
    </form>
  );
}

export default TareaForm;