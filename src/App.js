import React, { Component } from 'react';
import './App.css';
import Table from './Table';

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

  render() {
    return (
      <div className="App">
        <Table authors = { this.state.authors } />
      </div>
    );
  }
  
}

export default App;
