import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import '../components/BoasVindas.css';

export class BoasVindas extends Component {
    render() {
        return (
            <div class="welcome">
                <h1>BEM-VINDO AO FLATPOST</h1>
                <h3>Um espaço para mensagens sobre família</h3>
                <button><Link to="/timeline">CLIQUE AQUI PARA COMEÇAR</Link></button>
            </div>
        )
    }
}

export default BoasVindas
