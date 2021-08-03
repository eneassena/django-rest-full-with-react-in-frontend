// recursos
import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import { UpdateCliente } from './UpdateCliente';

import '../styles/stylesheet.css';
// end recursos





export function ListClientes(props) {
  const [lista, setLista] = useState(props.clientes);

  useEffect(() => {
    setLista([...props.clientes]);
  }, [props.clientes]);

  return (
    <>
    <div className="row" >
      <h1 className="title-box" >Lista de Clientes</h1>
      <table className="table-box" >
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
                <td>
                  <Link to={`${cliente.id}`} >Editar</Link>

                </td>
              </tr>
            )) : (
              <tr>
                <td colSpan="3" >Não há clientes Cadastrado!</td>
              </tr>
            )
          }
        </tbody>
      </table>
      </div>
    </>
  );
}
