import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import '../components/Cadastro.css'

export class Cadastro extends Component {
    render() {
        return ( 
            <div class="containerCadastro">
                <h2>CRIAR NOVA CONTA FLATPOST</h2>
                <form>
                    <input type="text" placeholder="Nome"></input>
                    <input type="text" placeholder="E-mail"></input>
                    <input type="password" placeholder="Senha"></input>
                    <div class="submit">
                        <label>Já possui conta?<Link to="/login"> Acesse aqui</Link></label>
                        <button type="submit">CADASTRAR-SE</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default Cadastro
