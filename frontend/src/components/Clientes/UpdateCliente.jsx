import React, { useState } from 'react';
import { useParams } from 'react-router-dom';


export function UpdateCliente(props) {
  const {id} = useParams() || 0;

  return (
    <h1>info Update Clientes</h1>
  );

}
