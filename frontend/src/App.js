import React, { Component } from 'react';

import './styles/App.css';

import { ListTarefas } from './components/ListTarefas';
import { ListClientes } from './components/ListClientes';
import { ListEnderecos } from './components/ListEnderecos';

import { TodoService } from './service/TodoTarefa';
import { ClienteService } from './service/ClienteService';
import { EnderecoService } from "./service/EnderecoService";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      enderecos: [],
      clientes: []
    }
    this.getTodos = this.getTodos.bind(this);
    this.getClientes = this.getClientes.bind(this);
    this.getEnderecos = this.getEnderecos.bind(this);
  }

  componentDidMount() {
    this.getTodos();
    this.getClientes();
    this.getEnderecos();
  }
  getEnderecos() {
    EnderecoService.getEnderecos()
      .then(res => {
        this.setState({ enderecos: res.data });
      })
      .catch(err => {
        console.log(err);
      })
  }
  getClientes() {
    ClienteService.getClientes()
      .then(res => {
        this.setState({ clientes: res.data });
      })
      .catch(err => {
        console.log(err);
      })
  }

  getTodos() {
    TodoService.getTodos()
      .then(response => {
        this.setState({ todos: response.data });
      })
      .catch(err => {
        console.log(err);
      })
  }

  render() {
    const { state } = this;
    return (
      <div className="app">
        <h1>Lista de tarefas</h1>
        <ListTarefas listaTarefas={state.todos} />
        <br /> <hr /> <br />
        <ListClientes clientes={state.clientes} />
        <br /> <hr /> <br />
        <ListEnderecos enderecos={state.enderecos} />
      </div>
    );
  }
}

export default App;
