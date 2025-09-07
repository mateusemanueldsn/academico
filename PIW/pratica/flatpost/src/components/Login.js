import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import '../components/Login.css'

export class Login extends Component {
    render() {
        return (
            <div class="containerLogin">
                <h2>ENTRAR NA CONTA FLATPOST</h2>
                <form>
                    <input type="email" placeholder="E-mail"></input>
                    <input type="password" placeholder="Senha"></input>
                    <div class="submit">
                        <label>Não tem conta? <Link to="/cadastro">Cadastre-se aqui</Link></label>
                        <button type="submit">ENTRAR</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default Login
