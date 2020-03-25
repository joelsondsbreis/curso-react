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
            [name]: value
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
                <div className="row"> 
                    <div className="input-field col s4">
                        <label className="input-field" htmlFor="nome">Nome</label>
                        <input
                            className="validade"
                            id="nome"
                            type="text"
                            name="nome"
                            value={nome}
                            onChange={this.listenInput} />
                    </div>
                    <div className="input-field col s4">
                        <label className="input-field" htmlFor="livro">Livro</label>
                        <input
                            className="validade"
                            id="livro"
                            type="text"
                            name="livro"
                            value={livro}
                            onChange={this.listenInput} />
                    </div>

                    <div className="input-field col s4">
                        <label className="input-field" htmlFor="preco">Preço</label>
                        <input
                            className="validade"
                            id="preco"
                            type="text"
                            name="preco"
                            value={preco}
                            onChange={this.listenInput} />
                    </div>

                </div>
                <button className="waves-effect waves-light indigo lighten-2 btn" onClick={this.submitFormulary} type="button" >Salvar</button>
            </form>
        )
    }

}

export default Formulary;