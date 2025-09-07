import React, { Component } from 'react'
import '../components/ContainerPosts.css';

export class ContainerPosts extends Component {
    state = {
        postagens:[
            {
                nome: 'João',
                mensagem: 'A natureza nos uniu em uma imensa família, e devemos estar sempre juntos.', 
                id: "01",      
                likes: 0
            },
            {
                nome: 'Júlia',
                mensagem: 'Se seus pais não são a sua base, seja a base deles. O importante é não se perder da união familiar.',
                id: "05", 
                likes: 0       
            },
            {
                nome: 'Ana',
                mensagem: 'Fraternidade, compreensão, amor, paz e união são elementos essenciais para a harmonia de uma família.',
                id: "06", 
                likes: 0       
            },
        ],
       
    }

    incrementarClick = () =>{
        this.setState({likes : this.state.postagens.likes+1})
    }
    render() {
        return (
            <div class="timelineposts">
                <ul class="container">
                    {/* <li class="post">
                        <h2>Usuário</h2>
                        <p>Texto texto texto texto texto texto texto...</p>
                        <button onClick={this.foiClicado_}><i class="icon-6"></i>{this.state.likes}</button>
                    </li>
                    <li class="post">
                        <h2>Usuário</h2>
                        <p>Texto texto texto texto texto texto texto...</p>
                        <button onClick={this.foiClicado_}><i class="icon-6"></i>{this.state.likes}</button>
                    </li>
                    <li class="post">
                        <h2>Usuário</h2>
                        <p>Texto texto texto texto texto texto texto...</p>
                        <button onClick={this.foiClicado_}><i class="icon-6"></i>{this.state.likes}</button>
                    </li>
                    <li class="post">
                        <h2>Usuário</h2>
                        <p>Texto texto texto texto texto texto texto...</p>
                        <button onClick={this.foiClicado_}><i class="icon-6"></i>{this.state.likes}</button>
                    </li> */}
                    {this.state.postagens.map(post=>(
                       <li class="post">
                       <h2>{post.nome}</h2>
                       <p>{post.mensagem}</p>
                       <button onClick={this.incrementarClick}><i class="icon-6"></i>{post.likes}</button>
                       <i class="icon-15"></i>
                        </li> 
                    ))}
                </ul>
            </div>
        )
    }
}

export default ContainerPosts
