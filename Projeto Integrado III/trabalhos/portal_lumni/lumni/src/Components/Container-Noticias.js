import React, { Component } from 'react';
import ImgNoticia1 from "../Graphic/noticias/notic01.jpg";
import ImgNoticia2 from "../Graphic/noticias/notic02.jpg";
import ImgNoticia3 from "../Graphic/noticias/notic03.jpg";
import ImgNoticia4 from "../Graphic/noticias/notic04.jpg";
import More from './More';
import { connect } from 'react-redux';

class ContainerNoticias extends Component {
    constructor(props){
        super(props);
        this.noticias = props.noticias;
        
    }
    render() { 

        let listarNoticias = [];
        for (let noticias of this.noticias){ 
            let titulo = <li>
            <img src={noticias.miniatura} alt=""/>
            <h1>{noticias.titulo}</h1>
        </li>   
        listarNoticias.push(titulo); 
        }

        return ( 
            <section className="containerNoticias">
                <ul className="noticiaDestaque">
                    <li class="miniaturaImg">
                    <img src={ImgNoticia4} alt=""/>
                    <label for="">NOVO</label>
                    </li>
                <li class="infoN">
                <h1>Série Ufológica do History grava Episódio em Quixadá</h1>
                <br/>
                <p>Depois de relatos recentes de avistamentos de luzes misteriosas recorrentes no céu da
                Terra do Monólitos, a série mais completa de investigação e pesquisa sobre a misteriosidade
                ufológica no mundo escolheu a cidade de Quixadá para realização de um documentário com a população
                local, especialmente com a comunidade ufológica da região ...
                <br/>
                </p>
                <label>Postado a 2 min</label>
                <button>VER NOTÍCIA COMPLETA</button>
                </li>
                </ul>
                <fieldset>
                <legend>NOTÍCIAS RECENTES</legend>
                <ul class="noticiasRecentes">
                {/* <li>
                <img src={ImgNoticia1} alt=""/>
                <h1>Antigo Clube OVNI é citado em Matéria Jornalística</h1>
                </li>
                <li>
                <img src={ImgNoticia2} alt=""/>
                <h1>Ufólogos visitam posto de gasolina com escultura de ET</h1>
                </li>
                <li>
                <img src={ImgNoticia3} alt=""/>
                <h1>Pedra do Eurípedes: Ponto de misteriosas aparições ufológicas</h1>
                </li>
                <li>
                <img src={ImgNoticia4} alt=""/>
                <h1>Série Ufológica do History grava Episódio em Quixadá</h1>
                </li> */}
                {listarNoticias}
                </ul>
                <More></More>
                </fieldset>
            </section>
         );
    }
}

const mapearEstadoParaProps = (state, props) => {
     return {"noticias":state.noticias}
}

export default connect(mapearEstadoParaProps)(ContainerNoticias);