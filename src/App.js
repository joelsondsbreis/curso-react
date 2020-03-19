import React, { Component, Fragment } from 'react';
import './App.css';
import Table from './Table';

import Form from './Formulary';

class App extends Component {

  state = {

    authors: [
      {
        nome: 'Mateus',
        livro: 'React',
        preco: '1000'
      },
      {
        nome: 'Marcos',
        livro: 'Java',
        preco: '99'
      },
      {
        nome: 'Lucas',
        livro: 'Design',
        preco: '150'
      },
      {
        nome: 'João',
        livro: 'DevOps',
        preco: '100'
      }
    ],
  };

  removeAuthor = index => {

    const { authors } = this.state;

    this.setState(
      {
        authors: authors.filter((author, currPosition) => {
          return currPosition !== index;
        }),
      }
    );
  };

  render() {
    return (
      <Fragment>
        <Table authors={this.state.authors} removeAuthor={this.removeAuthor} />
        <Form />
      </Fragment> 

    );
  }

}

export default App;
