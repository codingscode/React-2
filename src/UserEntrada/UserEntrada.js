import React from 'react'

const userEntrada = (props) => {
    const estilo = {
      border: '2px solid red'
    };

    return <input type="text" styele={estilo} onChange={props.changed} value={props.NomeAtual}/>;
};
  
 export default userEntrada;

