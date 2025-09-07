import React, { Component } from 'react';
import logo from "../logo001.png";
import iconUser from "../user.svg";

class NavMenu extends Component { 
    state = {  }
    render() { 
        return ( 
            <nav className="menu-superior">
                <img src={logo} className="logo" alt="logo"/>
                <ul>
                    <li><button className="button-pink">Linha do Tempo</button></li>
                    <li><button className="button-blue">Postar</button></li>
                    <li className="user">
                    <img src={iconUser}/>
                    <h1>Mateus</h1>
                    </li>
                </ul>
            </nav>
         );
    }
}
 
export default NavMenu;