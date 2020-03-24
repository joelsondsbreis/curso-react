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

    listenInput = event => {
        const { name, value } = event.target;

        this.setState({
            [name] : value
        });
    }

    submitFormulary = () => {

         this.props.listenSubmit(this.state);
         this.setState(this.stateInit);
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
                    onChange = {this.listenInput}
                />

                <label htmlFor="livro">Livro</label>
                <input
                    id="livro"
                    type="text"
                    name="livro"
                    value={livro}
                    onChange = {this.listenInput}
                />


                <label htmlFor="preco">Preço</label>
                <input
                    id="preco"
                    type="text"
                    name="preco"
                    value={preco}
                    onChange = {this.listenInput}
                />


                <button onClick={this.submitFormulary} type="button">Salvar</button>
            </form>
        )
    }

}

export default Formulary;