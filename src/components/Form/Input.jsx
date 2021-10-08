import react, {useState} from "react";


export default (props) => {
    const [nome, alterarNome] = useState ('Felipe')
    return (
    <div>
        <h3>{nome}</h3>
            <input type="text" value= {nome} onChange={e => alterarNome(e.target.value)}></input>
    </div>
    )
};