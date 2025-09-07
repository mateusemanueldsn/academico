import React, { Component } from 'react';
import '../Components/ButtonsCreateForm.css';
import { Link } from 'react-router-dom';

export class ButtonsCreateForm extends Component {
    render() {
        return (
            <div className="ButtonsContainer">
                <button className="cancel"><Link to="/forum">CANCELAR</Link></button><button className="next">PUBLICAR</button>
            </div>
        )
    }
}

export default ButtonsCreateForm;
