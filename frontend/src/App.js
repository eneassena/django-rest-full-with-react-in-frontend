import React, { useState, useEffect } from 'react';

import './ui/style/App.css';
import { list } from './data/service/ApiService.js';
import axios from 'axios';

const Listagem = (props) => {
    const [data, setData] = useState([])
    const keyRecurso = 'todos';

    function getTodosLocalStorage() {
        return JSON.parse(localStorage.getItem(keyRecurso))
    }
    async function getTodosApi() {
        await axios.get(
            "http://localhost:8000/api/v1/"
        )
        .then(res => {
            setData(res.data)

            localStorage.setItem(keyRecurso, JSON.stringify(data));

            console.log(data);
        })
        .catch(err => {
            console.log(err);
        })
    }
    useEffect(() => {
        getTodosApi();
        let datalocal = getTodosLocalStorage();
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



const App = () => {


  return (
    <div>
     <h1>Olá</h1>

     <Listagem />

    </div>
  );
}

export default App;
