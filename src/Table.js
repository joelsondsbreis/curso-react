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

const TableBody = props => {

    const lines = props.authors.map((line, index) => {

        return (
            <tr key={index}>
                <td>{line.nome}</td>
                <td>{line.livro}</td>
                <td>{line.preco}</td>
                <td><button onClick = { () => { props.removeAuthor(index) } } className="waves-effect waves-light indigo lighten-2 btn">Remover</button></td>
            </tr>
        );
    });
    return (
        <tbody>
            {lines}
        </tbody>
    );
}



class Table extends Component {

    render() {

        const { authors, removeAuthor } = this.props;
        console.log(authors);

        return (
            <table className="centered highlight">
                <TableHead />
                <TableBody authors = {authors} removeAuthor = {removeAuthor} />
            </table>
        );
    }

}

export default Table;