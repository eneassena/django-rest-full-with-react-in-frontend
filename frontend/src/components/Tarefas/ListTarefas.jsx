import React, { useState, useEffect } from 'react';

export function ListTarefas(props) {
  const [listaTarefas, setListaTarefas] = useState([...props.listaTarefas]);

  useEffect(() => {
    setListaTarefas([...props.listaTarefas]);
  }, [props.listaTarefas]);

  return (
    <div style={{ width: '768px', margin: '0 auto' }} >
      <table>
        <thead>
          <tr>
            <th>Titulo</th>
            <th>Corpo</th>
          </tr>
        </thead>
        <tbody>
          {listaTarefas.length > 0 ? listaTarefas.map(tarefa => (
            <tr key={tarefa.id}  >
              <td> {tarefa.title} </td>
              <td> {tarefa.body} </td>
            </tr>
          )) : (
            <tr>
              <td colSpan="2" style={{ textAlign: 'center' }} >
                Não há tarefas no momento!
              </td>
            </tr>
          )}
        </tbody>

      </table>
    </div>
  )
}

