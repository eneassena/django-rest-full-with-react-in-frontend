// recursos
import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './styles/App.css';

import { ListClientes } from './components/Clientes/ListClientes';
import { ListEnderecos } from './components/Enderecos/ListEnderecos';
import { ListTarefas } from './components/Tarefas/ListTarefas';



import { TodoService } from './service/TodoTarefa';
import { ClienteService } from './service/ClienteService';
import { EnderecoService } from "./service/EnderecoService";
// end recursos



class App extends Component {
  constructor(props) {
    super(props);
    this.state = { // estados do components
      todos: [],
      enderecos: [],
      clientes: [],
      userSelected: {}
    }


    this.getTodos = this.getTodos.bind(this);
    this.getClientes = this.getClientes.bind(this);
    this.getEnderecos = this.getEnderecos.bind(this);
    this.guardaClientes = this.guardaClientes.bind(this);
    this.atualizaCliente = this.atualizaCliente.bind(this);
  }


  /* Method
   * methodo é chamado no ciclo de vida do componentes,
   * ou seja quando ele for rendenrizado na tela.
   */
  componentDidMount() {
    this.getTodos();
    this.getClientes();
    this.getEnderecos();
  }

  /* Method
   * Busca todos os enderecos cadastrados
   */
  getEnderecos() {
    EnderecoService.getEnderecos()
      .then(res => {
        this.setState({ enderecos: res.data });
      })
      .catch(err => {
        console.log(err);
      })
  }

  /* Method
   * busca todos o clientes cadastrados
   */
  getClientes() {
    ClienteService.getClientes()
      .then(res => {
        this.setState({ clientes: res.data });
      })
      .catch(err => {
        console.log(err);
      })
  }

  /* Method
   * salva clientes no banco de dados
   */
  async guardaClientes(cliente) {
    console.log(cliente);
    await ClienteService.save(cliente)
      .then(res => {
        console.log(res.data)
        this.setState({ clientes: [...this.state.clientes, res.data] })
      }).catch(err => {
        console.log(err);
      });
  }

  /* Method
   * method atualiza informações dos clientes
   */
  atualizaCliente(cliente) {
    // {id: 1, nome: '', telefone: ''}
    this.setState({ userSelected: cliente });
  }

  /* Method
   * Method busca todas a tarefas cadastradas na api
   */
  async getTodos() {
    await TodoService.getTodos()
      .then(response => {
        console.log(response.data);
        this.setState({ todos: response.data });
      })
      .catch(err => {
        console.log(err);
      })
  }

  render() {
    const { state } = this;
    return (
      <Router>
      {/* gerando rotas */}
        <div style={{ width: '768px', margin: '0px auto' }} >
          <nav>
            <ul>
              <li>
                <Link to="/list-tarefas">Tarefas</Link>
              </li>
              <li>
                <Link to="/list-clientes">Clientes</Link>
              </li>
              <li>
                <Link to="/list-enderecos">Endereços</Link>
              </li>
            </ul>
          </nav>

          {/* distribuição dos components das rotas do app */}
          <div style={{ margin: '50px auto 0 auto' }} >
            <Switch>

              <Route path="/list-enderecos">
                <ListEnderecos enderecos={state.enderecos} />
              </Route>

              <Route path="/list-clientes">
                <ListClientes clientes={state.clientes} />
              </Route>

              <Route path="/list-tarefas">
                <ListTarefas listaTarefas={state.todos} />
              </Route>

            </Switch>
          </div>

        </div>
      </Router>
    );
  }
}

export default App;
