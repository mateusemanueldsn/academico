import React, { Component } from 'react';
import ButtonsCreateForm from './ButtonsCreateForm';
import { Link } from 'react-router-dom';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import CKEditor from '@ckeditor/ckeditor5-react';
import { connect } from 'react-redux';
import { adicionarPostagem } from '../Actions';


class CreateForumPost extends Component {
    
    state = {
        titulo: "",
        tematica: "",
    }

    constructor(props){
        super(props);
        this.adicionarPostagem = props.adicionarPostagemProps;
    }

    modificouFormulario = (event) =>{
        this.setState({
            ...this.state,
            [event.target.id]: event.target.value,
        })
        console.log(this.state);
    }

    submeterFormulario = (event) =>{
        event.preventDefault();
        this.adicionarPostagem(this.state.titulo, this.state.tematica)
        this.setState({
            titulo: "",
            tematica: "",
        })
        window.alert("Postagem publicada com sucesso!");
    }
    
    render() {
        return (
            <div className="containerForm">
                <h2>POSTAGEM DE DISCUSSÃO</h2>
                <label><Link to="/forum">FÓRUM</Link></label> / <label className="marked"><Link to="/forumcreate">NOVA POSTAGEM</Link></label>
                <form onSubmit={this.submeterFormulario}>
                    <input type="text" id="titulo" onChange={this.modificouFormulario} placeholder="Título da Postagem" value={this.state.titulo}/>
                    {/* <select name="tematicas" id="tematicas" placeholder="Temática">
                    <option>Abdução</option>
                    <option>Astronomia</option>
                    <option>Ocultismo</option>
                    <option>Teorias da Conspiração</option>
                    <option>Paranormalidade</option>
                    <option>Antigas Civilizações</option>
                    <option>Telescinese</option>
                    <option>Projeções Astrais</option>
                    <option>Área 51</option>
                    </select> */}
                    <input type="text" id="tematica" onChange={this.modificouFormulario} placeholder="Temática" value={this.state.value}/>
                    <div className="EditorPost">
                    <CKEditor 
                    editor = {ClassicEditor}
                    config={{
                        ckfinder:{uploadUrl: "/upload"}
                            }}
                   
                    />
                    <ButtonsCreateForm></ButtonsCreateForm>
                    </div>
                </form>
            </div>
            
        )
    }
}

function MapDispatchToProps(dispatch){
    return {
        adicionarPostagemProps:(titulo, tematica) =>{
            dispatch(adicionarPostagem({titulo:titulo,tematica:tematica}))
        }
    };
}

export default connect(null, MapDispatchToProps) (CreateForumPost);
