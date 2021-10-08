import react from "react";
import Filho from './Filho';
export default props =>
        <div>
            <Filho sobrenome={props.sobrenome}>Felipe</Filho>
            <Filho sobrenome={props.sobrenome}>Fernanda</Filho>
            <Filho sobrenome={props.sobrenome}>Nani</Filho>


        </div>