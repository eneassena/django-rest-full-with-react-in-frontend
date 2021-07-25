import React, { useState } from 'react';



export function CreateCliente(props) {
  const [nome, setNome] = useState(''),
    [telefone, setTelefone] = useState('');

  function handleSaveCliente(event) {
    event.preventDefault();
    let cliente = { nome, telefone };
    props.save(cliente);
    setNome('')
    setTelefone('');
  }


  return (
    <form onSubmit={handleSaveCliente} >
      <div>
        <label htmlFor="nome">Nome</label>
        <input
          type="text"
          name="nome"
          id="nome"
          value={nome}
          onChange={(event) => setNome(event.target.value)}
        />
      </div>

      <div>
        <label htmlFor="telefone">Telefone</label>
        <input
          type="text"
          name="telefone"
          id="telefone"
          value={telefone}
          onChange={(event) => setTelefone(event.target.value)}
        />
      </div>

      <div>
        <input type="submit" value="Create" />
      </div>
    </form>
  );

}