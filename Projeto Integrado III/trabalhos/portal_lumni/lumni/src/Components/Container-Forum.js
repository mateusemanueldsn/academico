import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';



export class ContainerForum extends Component {
    constructor(props){
        super(props);
        this.postagens = props.postagens;        
    }


    render() {
        let listarPostagens = [];
        for (let postagens of this.postagens){ 
            let post = <li class="post-user">
                <div class="perfil-user"><img src={postagens.userAvatar} alt=""/>
                            <h4>{postagens.nomeUser}</h4>
                            </div>
                            <div class="conteudo-post">
                            <h2>{postagens.titulo}</h2>
                            <legend>{postagens.tematica}</legend>
                            <label>{postagens.horario}</label><br/>
                            <p>{postagens.texto}<strong id="postvideo">Ver mais</strong></p>
                                <div class="opc-post">
                                <p><i class="icon-8" id="report"></i>Denunciar</p>
                                <p><i class="icon-2" id="coment"></i>0</p>
                                <p><i class="icon-6" id="like"></i>{postagens.qtdLikes}</p>
                                </div>
                            </div>
            </li>
        listarPostagens.push(post); 
        }
        return (
            <div className="containerForum">
                <section class="presentation-forum">
                <div>
                <h2>FÓRUM LUMNI</h2>
                <p>Troca de experiências e conhecimentos ufológicos</p>
                </div>
                </section>
                <section className="forumConteudo">
                    <aside className="tematicas">
                    <h2>TEMÁTICAS</h2>
                    <ul>
                        <li>
                        <label class="container">Todas
                            <input type="checkbox" checked="checked"/>
                            <span class="checkmark"></span>
                        </label>
                        </li>
                        <li>
                        <label class="container">Abdução
                            <input type="checkbox" />
                            <span class="checkmark"></span>
                        </label>
                        </li>
                        <li>
                        <label class="container">Astronomia
                            <input type="checkbox" />
                            <span class="checkmark"></span>
                        </label>
                        </li>
                        <li>
                        <label class="container">Ocultismo
                            <input type="checkbox" />
                            <span class="checkmark"></span>
                        </label>
                        </li>
                        <li>
                        <label class="container">Teorias da Conspiração
                            <input type="checkbox" />
                            <span class="checkmark"></span>
                        </label>
                        </li>
                        <li>
                        <label class="container">Paranormalidade
                            <input type="checkbox" />
                            <span class="checkmark"></span>
                        </label>
                        </li>
                        <li>
                        <label class="container">Antigas Civilizações
                            <input type="checkbox" />
                            <span class="checkmark"></span>
                        </label>
                        </li>
                        <li>
                        <label class="container">Telescinese
                            <input type="checkbox" />
                            <span class="checkmark"></span>
                        </label>
                        </li>
                        <li>
                        <label class="container">Projeções Astrais
                            <input type="checkbox" />
                            <span class="checkmark"></span>
                        </label>
                        </li>
                    </ul>
                    </aside>
                    <main>
                    <div className="opcPosts">
                    <form action="">
                        <select name="postagens" id="postagens">
                            <option value="todas">Todas as postagens</option>
                            <option value="recentes">Recentes</option>
                            <option value="alta">Em Alta</option>
                        </select>
                    </form>
                    <button><Link to="/forumcreate">Criar nova postagem</Link></button>
                    <i class="icon-6" id="like"></i>
                    </div>
                        <ul>
                            {listarPostagens}
                        </ul>
                    </main>
                </section>
            </div>
            
        );
    }
}

const mapearEstadoParaProps = (state, props) => {
    return {"postagens":state.postagens}
}

export default connect(mapearEstadoParaProps)(ContainerForum);
