import React, { useState, useEffect } from 'react';

import './ui/style/App.css';
import { list } from './data/service/ApiService.js';
import axios from 'axios';

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
    useEffect(() => {
        getTodos();
    }, []);

    return (
        <>
            <table>
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
            </table>
        </>
    )
}



function App() {
  return (
    <div>
     <h1>Olá</h1>

     <Listagem />

    </div>
  );
}

export default App;
