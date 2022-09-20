import './App.css';
import Boton from './components/Boton';
import Contador from './components/Contador';
import logoReact from './images/logoReact.png';
import Puntuacion from './components/Puntuacion';
import { useState } from 'react';

let nombre;
nombre=prompt('Nombre: ');    //Falta hacer que no se borre esto

function App() {
  
  const [numClics, setNumClics] = useState(0);

  const manejarClic = () => {
    setNumClics(numClics + 1);
  };

  const reiniciarContador = () => {
    setNumClics(0);
    nombre='';
  };

  return (
    <div className='App'>
      <div className='contenedor-logo-react'>
        <img 
          className='imagen-react'
          src={logoReact}
          alt='Logo de React'
        />

      </div>
      <div className='contenedor-contador'>
        <Contador 
        numClic={numClics} />
        <Boton 
        texto='Clic 👍'
        tipoBoton={true}
        manejarClic={manejarClic} />
        <Boton 
        texto='Reiniciar 👍'
        tipoBoton={false}
        manejarClic={reiniciarContador} />

      </div>
    <div className='contenedor-puntuaciones'>
       <h2 className='tituloPuntuaciones'>PUNTUACIONES</h2>
      <Puntuacion 
        name={nombre}
        puntuacion={numClics}
      />
      
    </div>

    </div>
  );
}

export default App;
