import React, { Component } from 'react'
import Navegador from '../components/Navegador'
import Login  from '../components/Login'

export class LoginUsuario extends Component {
    render() {
        return (
            <div>
                <Navegador/>
                <Login/>
            </div>
        )
    }
}

export default LoginUsuario
