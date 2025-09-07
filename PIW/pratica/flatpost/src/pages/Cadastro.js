import React, { Component } from 'react'
import Cadastro from '../components/Cadastro'
import '../components/Cadastro.css'
import Navegador from '../components/Navegador'

export class CadastroUsuario extends Component {
    render() {
        return (
            <div>
                <Navegador/>
                <Cadastro/>
            </div>
        )
    }
}

export default CadastroUsuario
