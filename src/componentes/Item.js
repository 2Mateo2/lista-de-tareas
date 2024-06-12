// import React from 'react';
// import '../styles/Item.css'
// import { AiOutlineCloseCircle } from "react-icons/ai";


// function Item({ id, texto, completada, completarItem, eliminarItem }){

//   return (
//     //Si completada es true, asigana dos clases, si es false asigna una sola clase
//     <div className={completada ? 'item-contenedor completada' : 'item-contenedor'}>
//         <div 
//           className='item-texto'
//           onClick={() => completarItem(id)}>
//           {texto}
//         </div>
//         <div 
//           className='item-contenedor-iconos'
//           onClick={() => eliminarItem(id)}>
//         <AiOutlineCloseCircle className='item-icono' />
//         </div>
//     </div>
//   );
// }

// export default Item;

import React from 'react';
import '../styles/Item.css'
import { AiOutlineCloseCircle } from "react-icons/ai";

function Item({ id, texto, completada, completarItem, eliminarItem }) {
  return (
    <div className={completada ? 'item-contenedor completada' : 'item-contenedor'}>
      <div 
        className='item-texto'
        onClick={() => completarItem(id)}>
        {texto}
      </div>
      <div 
        className='item-contenedor-iconos'
        onClick={() => eliminarItem(id)}>
        <AiOutlineCloseCircle className='item-icono' />
      </div>
    </div>
  );
}

export default Item;
