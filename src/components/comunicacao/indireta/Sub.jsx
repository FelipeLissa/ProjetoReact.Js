import react from "react";

export default (props) => {
    function acao () {
        props.onClicar(Math.random(), 'Número Gerado')
    }

    return (
        <div>
            <button onClick={acao}>Botao</button>
        </div>
    )

}