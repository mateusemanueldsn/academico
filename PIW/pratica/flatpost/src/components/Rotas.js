import React, { Component } from 'react'
import { BrowserRouter, Route, Router, Switch } from 'react-router-dom'
import CadastroUsuario from '../pages/Cadastro'
import CreatePost from '../pages/CreatePost'
import Home from '../pages/Home'
import LoginUsuario from '../pages/Login'
import Timeline from '../pages/Timeline'

export class Rotas extends Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                    <Route exact path="/" component={Home}></Route>
                    <Route exact path="/timeline" component={Timeline}></Route>
                    <Route exact path="/create" component={CreatePost}></Route>
                    <Route exact path="/login" component={LoginUsuario}></Route>
                    <Route exact path="/cadastro" component={CadastroUsuario}></Route>
                </BrowserRouter>
            </div>
        )
    }
}

export default Rotas
