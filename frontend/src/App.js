import React, { useState, useEffect } from 'react';

// import './ui/style/App.css';
import { list } from './data/service/ApiService.js';
import axios from 'axios';
import { Nav, Table, Row, Col } from 'react-bootstrap'


const Listagem = () => {
    const [data, setData] = useState(list)
    const keyRecurso = 'todos';

    async function getTodos() {
        await axios.get(
            "http://127.0.0.1:8000/api"
        )
        .then(res => {
            localStorage.setItem(keyRecurso, JSON.stringify(res.data));
            JSON.parse(localStorage.getItem(keyRecurso)).map(item => {
                console.log('localStorage: ', item.id, item.title, item.body);                
            })
            setData(res.data)
        })
        .catch(err => {
            console.log(err);
        })
    }

    function showClients() {
        axios.get('http://localhost:8000/cliente-api/clientes')
        .then(function(data){
            console.log(data)
        })
        .catch(err => {
            console.log(err)
        })
    }
    useEffect(() => {
        getTodos();
        showClients()
    }, []);

    return (
        <> 
        <Row>

            <Col>
                <Table striped bordered hover>
                <thead>
                        <tr>
                            <th>#Id</th>
                            <th>Title</th>
                            <th>Body</th>
                        </tr>
                    </thead>
                    <tbody>
                    { data.map(item => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.title}</td>
                            <td>{item.body}</td>
                        </tr>
                    )) }

                    </tbody>
                </Table>
            </Col>
        </Row>
             
        </>
    )
}

const HeaderApp = () => {
    return (
        <nav>
            <Nav
            activeKey="/home"
            onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
            >
            <Nav.Item>
                <Nav.Link href="/home">Active</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="link-1">Link</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="link-2">Link</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="disabled" disabled>
                Disabled
                </Nav.Link>
            </Nav.Item>
            </Nav>
        </nav>
    )
}

function App() {
  return (
    <div>
        <HeaderApp />
        <Listagem />
    </div>
  );
}

export default App;
