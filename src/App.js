import React, { Component, Fragment } from 'react';
import 'materialize-css/dist/css/materialize.min.css';

import './App.css';
import Header from './Header';
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
  }

  listenSubmit = author => {

    this.setState({ authors: [...this.state.authors, author]})
  }

  render() {
    return (
      <Fragment>
        <Header />
        <div className="container mb-10">
        <Table authors={this.state.authors} removeAuthor={this.removeAuthor} />
        <Form listenSubmit={this.listenSubmit}/>
        </div>
      </Fragment> 

    );
  }

}

export default App;
