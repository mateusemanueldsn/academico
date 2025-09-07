import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import '../components/Navegador.css';

class Navegador extends Component {
    render() {
        return (
            <nav>
                <h1><strong><Link to="/"> FLATPOST </Link></strong></h1>
                <ul>
                    <li><Link to="/timeline">Linha do Tempo</Link></li>
                    <li><Link to="/create">Postar</Link></li>
                </ul>
                <label class="login"><Link to="/login">LOGIN</Link></label>
            </nav>
        )
    }
}

export default Navegador
