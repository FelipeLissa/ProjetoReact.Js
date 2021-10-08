import react, {useState} from "react";
import Sub from "./Sub";

export default (props) => {

    const  [num, setNum ] = useState(0)
    const  [texto, setTexto] = useState('Valor')

    function QuandoClicar (valorGerado, texto) {
        setNum(valorGerado)
        setTexto(texto)
    }
    return (
        <div>
                    <h4>{texto}: {num}</h4>
                    <Sub onClicar={QuandoClicar}></Sub>
        </div>
    )
}