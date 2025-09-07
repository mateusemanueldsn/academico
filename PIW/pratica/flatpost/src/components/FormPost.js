import React, { Component } from 'react';
import '../components/FormPost.css';

export class FormPost extends Component {
    render() {
        return (
            <div class="containerFormPost">
                <h2>NOVA POSTAGEM</h2>
                <form>
                    <input type="text" placeholder="Nome"></input>
                    <textarea placeholder="Escreva sua mensagem..." rows="5"></textarea>
                    <div class="submitPost">
                        <button type="submitPost">PUBLICAR</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default FormPost
