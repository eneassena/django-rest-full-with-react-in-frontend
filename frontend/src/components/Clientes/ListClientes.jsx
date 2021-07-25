import React, { useState, useEffect } from 'react';


export function ListClientes(props) {
  const [lista, setLista] = useState(props.clientes);

  useEffect(() => {
    setLista([...props.clientes]);
  }, [props.clientes]);

  return (
    <>
    <div style={{width: '768px', margin: '0 auto' }} >
      <h1 style={{ margin: '10px auto' }} >Lista de Clientes</h1>
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Telefone</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {
            lista.length > 0 ? lista.map(cliente => (
              <tr key={cliente.id} >
                <td> {cliente.nome} </td>
                <td> {cliente.telefone} </td>
                <td><a href="#">Editar</a></td>
              </tr>
            )) : (
              <tr>
                <td colSpan="2" >Não há clientes Cadastrado!</td>
              </tr>
            )
          }
        </tbody>
      </table>
      </div>
    </>
  );
}