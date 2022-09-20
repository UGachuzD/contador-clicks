import './App.css';
import Boton from './components/Boton';
import Contador from './components/Contador';
import logoReact from './images/logoReact.png';
import { useState } from 'react';

function App() {

  const [numClics, setNumClics] = useState(0);

  const manejarClic = () =>{
    setNumClics(numClics + 1);
  };

  const reiniciarContador = () => {
    setNumClics(0);
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
        texto='Clic'
        tipoBoton={true}
        manejarClic={manejarClic} />
        <Boton 
        texto='Reiniciar'
        tipoBoton={false}
        manejarClic={reiniciarContador} />
        
      </div>
    </div>
  );
}

export default App;
