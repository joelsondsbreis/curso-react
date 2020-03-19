import React, { Component } from 'react';

class Formulary extends Component {

    constructor(props) {
        super(props);

        this.stateInit = {

            nome: '',
            livro: '',
            preco: '',
        }

        this.state = this.stateInit;
    }

    render() {

        const { nome, livro, preco } = this.state;

        return (

            <form>

                <label htmlFor="nome">Nome</label>
                <input
                    id="nome"
                    type="text"
                    name="nome"
                    value={nome}
                />

                <label htmlFor="livro">Livro</label>
                <input
                    id="livro"
                    type="text"
                    name="livro"
                    value={livro}
                />


                <label htmlFor="preco">Preço</label>
                <input
                    id="preco"
                    type="text"
                    name="preco"
                    value={preco}
                />


                <button type="button">Salvar
    </button>
            </form>
        )
    }

}

export default Formulary;