import React from "react";
import Produtos from "../data/products"
export default props => {


    function getProdutosListItem () {
        return Produtos.map(prod => {
            return <li key={prod.id}>
                {prod.id} - {prod.name} -{">"} R$ {prod.price}
            </li>
        })
    }
    return (
        <div>
            <ul>
                {getProdutosListItem()}
            </ul>
        </div>
    )
}