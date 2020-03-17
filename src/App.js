import React from 'react';
import './App.css';
import Table from './Table';

function App() {

  const authors = [
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
  ];
  return (
    <div className="App">
      <Table authors = { authors } />
    </div>
  );
}

export default App;
