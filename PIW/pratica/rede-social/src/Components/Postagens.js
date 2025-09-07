import React, { Component } from 'react';
import Card from './Card.js';
import user1 from "../perfil-forum1.jpg";
import user2 from "../perfil-forum2.jpg";
import user3 from "../perfil-forum3.jpg";
import user4 from "../perfil-forum4.jpg";
import user5 from "../perfil-forum5.jpg";



class Postagens extends Component {
    state = {
        postagens:[
            {
                nome: 'João',
                mensagem: 'A natureza nos uniu em uma imensa família, e devemos viver nossas vidas unidos, ajudando uns aos outros.',
                img: user1,
                horario: "Há 2 min",  
                id: "01",      
            },
            {
                nome: 'Ana',
                mensagem: 'União familiar é a programação que Deus nos dá para que haja o Amor Universal entre os espíritos unidos por um laço sanguíneo, devendo ser cultivado para que não tenham um reencontro futuro e um novo recomeço',
                img: user2,
                horario: "Há 2 horas", 
                id: "02",      
            },
            {
                nome: 'Bia',
                mensagem: 'Abençoa Senhor todas as famílias, todos os animais e as plantas! Abençoa a vida, a união e a serenidade. Amém.',
                img: user3,
                horario: "Há 34 min",
                id: "03",        
            },
            {
                nome: 'André',
                mensagem: 'A família é a coragem de ser feliz sem se arrepender. Cada membro é a união da face divina e humana, terrena e efêmera no coração de cada homem e cada mulher.',
                img: user4,
                horario: "Há 1 hora",
                id: "04",        
            },
            {
                nome: 'Júlia',
                mensagem: 'Se seus pais não são a sua base, seja a base deles. O importante é não se perder da união familiar.',
                img: user5,
                horario: "Há 4 min",
                id: "05",        
            },
            {
                nome: 'João',
                mensagem: 'Fraternidade, compreensão, amor, paz e união são elementos essenciais para a harmonia de uma família.',
                img: user1,
                horario: "Há 25 min",
                id: "06",        
            },
            {
                nome: 'João',
                mensagem: 'Dinheiro no Bolso, Deus no Coração, Família Unida e Champanhe pros Irmãos.',
                img: user1,
                horario: "Há 2 dias",
                id: "07",        
            },
        ]
    }

    recebiClick = (clicks) => {
        console.log("Alguém deu like e foram " + clicks + " vezes");
    }
    
    render() {
        return (
            <section className="container-posts">
                <ul>
                    <li className="galeria-posts">
                        {this.state.postagens.map(
                            (cardPost) => (<Card
                            nome={cardPost.nome}
                            mensagem={cardPost.mensagem}
                            img={cardPost.img}
                            horario={cardPost.horario} 
                            foiClicado={this.recebiClick}></Card>)
                        )}
                    </li>
                </ul>
            </section>
        );
    }
}

export default Postagens;