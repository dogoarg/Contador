import "./App.css";
import logoDogo from "./imagenes/images dogo.jpg";
import Boton from "./componentes/Boton";
import "./hojas-de-estilos/Boton.css";
import Contador from "./componentes/Contador.jsx";
import { useState } from "react";

function App() {
  const [numClic, setNumClics] = useState(0);

  const manejarClic = () => {
    setNumClics(numClic + 1);
  };

  const reiniciarContador = () => {
    setNumClics(0);
  };

  const restarContador = () => {
    setNumClics(numClic - 1);
  };

  return (
    <div className="App">
      <div className="logo-dogo">
        <img className="logo-dogo2" src={logoDogo} alt="logo-dogos" />
      </div>
      <div className="contenedor-principal">
        <Contador numClic={numClic} />

        <Boton texto="sumar" botonDeClic={true} manejarClic={manejarClic} />

        <Boton texto="restar" manejarClic={restarContador} />

        <Boton
          texto="reiniciar"
          botonDeClic={false}
          manejarClic={reiniciarContador}
        />
      </div>
    </div>
  );
}

export default App;
