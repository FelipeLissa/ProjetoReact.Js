import React from "react";
import './card.css';

export default props =>
<div className="Card" style={{borderColor: props.color || '#000'}}>

    <div className="conteudo" >
        {props.children}
    </div>

    <div className="footer" style={{backgroundColor: props.color || '#000'}}>
        {props.footer}
    </div>
    
</div>