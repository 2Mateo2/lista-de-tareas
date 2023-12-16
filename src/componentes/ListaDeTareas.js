import React, { useState, useEffect } from 'react';
import '../styles/ListaDeTareas.css';
import TareaForm from './TareaForm';
import Tarea from './Tarea';

function ListaDeTareas() {
  const localStorageKey = 'tareas';
  const [tareas, setTareas] = useState([]);

  // Cargar tareas desde el almacenamiento local al montar el componente
  useEffect(() => {
    const storedTareas = JSON.parse(localStorage.getItem(localStorageKey));
    console.log('Tareas cargadas al montar:', storedTareas);
    setTareas(storedTareas);
  }, []);
  
  // Guardar tareas en el almacenamiento local cada vez que se actualizan
  useEffect(() => {
    localStorage.setItem(localStorageKey, JSON.stringify(tareas));
  }, [tareas]);


  const agregarTarea = tarea => {
    if (tarea.texto.trim()) {
      tarea.texto = tarea.texto.trim();
      const tareasActualizadas = [tarea, ...tareas];
      setTareas(tareasActualizadas);
    } else {
      alert('Por favor ingrese una tarea');
    }
  };


  const eliminarTarea = id => {
    const tareasActualizadas = tareas.filter(tarea => tarea.id !== id);
    setTareas(tareasActualizadas);
  };

  const completarTarea = id => {
    const tareasActualizadas = tareas.map(tarea => {
      if (tarea.id === id) {
        tarea.completada = !tarea.completada;
      }
      return tarea;
    });
    setTareas(tareasActualizadas);
  };

  return (
    <>
      <TareaForm onSubmit={agregarTarea} />
      <div className='tareas-lista-contenedor'>
        {tareas.map(tarea => (
          <Tarea
            key={tarea.id}
            id={tarea.id}
            texto={tarea.texto}
            completada={tarea.completada}
            completarTarea={completarTarea}
            eliminarTarea={eliminarTarea}
          />
        ))}
      </div>
    </>
  );
}

export default ListaDeTareas;
