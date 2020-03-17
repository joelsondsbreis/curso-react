import React, { Component } from 'react';

const TableHead = () => {

    return (
        <thead>
            <tr>
                <th>Autores</th>
                <th>Livros</th>
                <th>Preços</th>
                <th>Remover</th>
            </tr>
        </thead>
    );

}

const TableBody = () => {

    return (
        <tbody>
            <tr>
                <td>Joelson</td>
                <td>React</td>
                <td>1000</td>
                <td><button>Remover</button></td>
            </tr>
            <tr>
                <td>Cecilia</td>
                <td>O monge</td>
                <td>90</td>
                <td><button>Remover</button></td>
            </tr>
            <tr>
                <td>Davi</td>
                <td>PHP</td>
                <td>100</td>
                <td><button>Remover</button></td>
            </tr>
        </tbody>
    );
}



class Table extends Component {

    render() {
        return (
            <table>
                <TableHead />
                <TableBody />
            </table>
        );
    }

}

export default Table;