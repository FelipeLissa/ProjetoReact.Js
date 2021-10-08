import React from "react";
import './app.css'
import Card from './components/layout/card';
import Primeiro from './components/basicos/Primeiro';
import ComFilhos from './components/basicos/ComFilhos';
import ComParametro from './components/basicos/ComParametro';
import Condicional from "./components/basicos/Condicional";
import Repeticao from "./components/basicos/Repeticao";
import Pai from "./components/comunicacao/direta/Pai";
import Super from "./components/comunicacao/indireta/Super";
import Input from "./components/Form/Input";
// resolver problema com o import do react em Contador.
import Contador from "./components/Contador/Contador";

export default(props) => (
<div className="App" >
  <h1>Fundamentos React</h1>
  <div className="Cards">
    <Card footer="Exercicio X" color="#5c3c92">
      Children
    </Card>

    <Card footer="Primeiro Componente" color="#077b8a">
    <Primeiro></Primeiro>
    </Card>

    <Card footer="Comp Com Filhos" color="#a2d5c6">
    <ComFilhos>
      <ul>
        <p>Ana</p>
        <p>Bia</p>
      </ul>
    </ComFilhos>
    </Card>

    <Card footer="esse é o titulo" color="#6f0000">
      <ComParametro titulo="Titulo" subtitulo="subtitulo" ></ComParametro>
    </Card>
    
    <Card footer="arranjo de protudos" color="#1e3d59">
      <Repeticao></Repeticao>
    </Card>

    <Card footer="Condicional impar ou par" color="#ecc19c">
        <Condicional numero={10}></Condicional>
    </Card>
    
    <Card footer="Comunicacao direta" color="#f5f5f5">
      <Pai sobrenome="Fontoura"></Pai>
    </Card>

    <Card footer="Comunicacao indireta" color="#31c9e0">
      <Super></Super>
    </Card>

    <Card footer="Input" color="#864faa">
      <Input></Input>
    </Card>

    <Card footer="Contador" color="#293E6A">
      <Contador passo={10}></Contador>
    </Card>
    </div>
 </div>
 );