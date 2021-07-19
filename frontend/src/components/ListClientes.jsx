import React, { useState, useEffect } from 'react';


export function ListClientes(props) {
  const [lista, setLista] = useState(props.clientes);

  useEffect(() => {
    setLista([...props.clientes]);
  }, [props.clientes]);

  return (
    <>
      <h1>Lista de Clientes</h1>
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Telefone</th>
          </tr>
        </thead>
        <tbody>
          {
            lista.length > 0 ? lista.map(cliente => (
              <tr key={cliente.id} >
                <td> {cliente.nome} </td>
                <td> {cliente.telefone} </td>
              </tr>
            )) : (
              <tr>
                <td colSpan="2" >Não há clientes Cadastrado!</td>
              </tr>
            )
          }
        </tbody>
      </table>
    </>
  );
}