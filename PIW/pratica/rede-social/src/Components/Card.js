import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

class Card extends Component {
    state = {
        clicks: 0,
    }
    
    incrementarClick = () =>{
        this.setState({clicks : this.state.clicks+1})
    }

    foiClicado_ = () =>{
        this.incrementarClick();
        this.props.foiClicado(this.state.clicks)
    }
    render() { 
        return ( 
            <div className="card">
                <legend className="time">{this.props.horario}</legend>
                <button class="like" onClick={this.foiClicado_} ><FontAwesomeIcon icon={faHeart} className="iconLike"/><p>{this.state.clicks}</p></button>
                        <div className="perfil-post">
                        <img src={this.props.img} alt="foto-perfil"/>
                        <legend><strong>{this.props.nome}</strong></legend>
                        </div>
                        <div className="msg-post">
                            <p>{this.props.mensagem}</p>
                        </div>
            </div>
        );
    }
}
 
export default Card;