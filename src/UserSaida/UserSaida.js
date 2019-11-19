import React from 'react';
import './UserSaidaEstilo.css';

const userSaida = (props) => {
   return (
       <div className="UserSaidaEstilo">
           <p>Nome Usuário : {props.NomeUsuario}</p>
           <p>Eu espero isso será sobrescrito!</p>
       </div>
   );

};

export default userSaida;


