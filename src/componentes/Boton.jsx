const Boton = ({texto, botonDeClic, manejarClic}) =>{
    return(
        <button 
        className={botonDeClic ? 'boton-clic' : 'boton-reiniciar'  } onClick={manejarClic}>
            {texto}
        </button>
    )
}

export default Boton