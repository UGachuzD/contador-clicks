import React from 'react';
import '../stylesheets/Puntuacion.css';

function Puntuacion({ name, puntuacion }){
  return(
    <div className='Puntuacion'>
      <p>Nombre: {name}</p>
      <p>Puntuaje: {puntuacion}</p>
    </div>
  );
}

export default Puntuacion;