import React ,{Component} from 'react';
import logo from "../Graphic/logo.png";
import { Link } from 'react-router-dom';

class Navegador extends React.Component {
  
    render() { 
    
        return (
            <nav>
                <img src={logo} className="logo" alt="logo" className="logo"/>
                <ul className="menu-principal">
                    <li><Link to="/">INÍCIO</Link></li>
                    <li><Link to="/forum">FÓRUM</Link></li>
                    <li><Link to="/">LOJA</Link></li>
                    <li><Link to="/">EVENTOS</Link></li>
                    <li><Link to="/">RELATOS</Link></li>
                    <li><Link to="/">SOBRE NÓS</Link></li>
                </ul>
                <form>
                    <input type = "search" placeholder="O que você procura?"/>
                    <button type="submit"><i class="icon-B" id="lupa"></i></button>
                </form>
                    <button><i class="icon-I"></i></button>
                    <button><i class="icon-C"></i><sup>0</sup></button>
                    <button class="conta-usuario"><i class="icon-U"></i><legend>Entre ou <br/> Cadastre-se</legend></button>
            </nav>
        );
    }
}
 
export default Navegador;