import axios from 'axios';

const url = "http://127.0.0.1:8000/api";

export const ApiService = {
  getService(endpoint) {
    return axios.get(`${url}/${endpoint}`)
  },
  insert(endpoint, dados) {

    return axios.post(`${url}/${endpoint}/`, dados);
  },
  update(endpoint, dados) {
    return axios.put(`${url}/${endpoint}/${dados.id}/show`, {
      nome: dados.nome,
      telefone: dados.telefone
    })
  }
}

/*
{
  method: 'post',
  url: '/user/12345',
  data: {
    firstName: 'Fred',
    lastName: 'Flintstone'
  }
}
*/

