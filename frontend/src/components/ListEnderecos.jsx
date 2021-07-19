import React, { useState, useEffect } from 'react';


export function ListEnderecos(props) {
  const [lista, setLista] = useState(props.enderecos || []);

  useEffect(() => {
    setLista([...props.enderecos]);
  }, [props.enderecos]);

  return (
    <>
      <h1>Lista de Endereços</h1>
      <table>
        <thead>
          <tr>
            <th>Bairro</th>
            <th>Número</th>
            <th>Complemento</th>
          </tr>
        </thead>
        <tbody>
          {
            lista.length > 0 ? lista.map(endereco => (
              <tr key={endereco.id} >
                <td> {endereco.bairro} </td>
                <td> {endereco.numero} </td>
                <td> {endereco.complemento} </td>
              </tr>
            )) : (
              <tr>
                <td colSpan="3" >Não há enderecos Cadastrado!</td>
              </tr>
            )
          }
        </tbody>
      </table>
    </>
  );
}