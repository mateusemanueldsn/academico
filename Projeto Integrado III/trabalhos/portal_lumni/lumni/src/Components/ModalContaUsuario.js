import React, { Component } from 'react';
import logo from "../Graphic/logo.png";
import '../Components/ModalContaUsuario.css';
import ModalLogin from '../Components/ModalLogin';
import ModalCadastro from '../Components/ModalCadastro';

export class ModalContaUsuario extends Component {
    render() {
        return (
             <div className="BlackBackground">
                 <div className="ContainerModal">
                     <img src={logo} className="logo" alt="logo" className="logo"/>
                     <button className="Exit"><i class="icon-15"></i></button>
                     {/* <ModalLogin></ModalLogin> */}
                     <ModalCadastro></ModalCadastro> 
                 </div>
             </div>
        
        )
    }
}

export default ModalContaUsuario
