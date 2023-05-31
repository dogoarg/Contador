import '../hojas-de-estilos/Contador.css'
const Contador = ({numClic})=>{
    return(
        <div className="contador">
            {numClic}
        </div>
    )
}

// function Contador ({numClic}){
//     return(
//         <div className="contador">
//             {numClic}
//         </div>
//     )

// }

export default Contador
