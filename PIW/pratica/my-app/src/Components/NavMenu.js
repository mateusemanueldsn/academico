import React, { Component } from 'react';
import logo from "../logo001.png";
import iconUser from "../user.png";

class NavMenu extends Component {
    state = {  }
    render() { 
        return ( 
            <nav className="menu-superior">
                <img src={logo} className="logo" alt="logo"/>
                <ul>
                    <li><button className="button-pink">Linha do Tempo</button></li>
                    <li><button className="button-blue">Meu Perfil</button></li>
                    <li className="user">
                    <div>
                    </div>
                    <div>
                    <legend>Bem-Vindo</legend><h1>Mateus</h1>
                    </div>
                    </li>
                </ul>
            </nav>
         );
    }
}
 
export default NavMenu;