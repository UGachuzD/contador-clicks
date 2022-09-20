import React from 'react';
import '../stylesheets/Boton.css';

function Boton({ texto, tipoBoton, manejarClic }){
  return(
    <button
      className={ tipoBoton ? 'boton-clic' : 'boton-reinicio'}
      onClick={manejarClic}>
      {texto}
    </button>

    
  );  
}

export default Boton;