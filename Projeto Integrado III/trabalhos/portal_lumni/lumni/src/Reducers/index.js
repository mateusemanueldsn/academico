import ImgNoticia1 from "../Graphic/noticias/notic01.jpg";
import ImgNoticia2 from "../Graphic/noticias/notic02.jpg";
import ImgNoticia3 from "../Graphic/noticias/notic03.jpg";
import ImgNoticia4 from "../Graphic/noticias/notic04.jpg";
import ForumPerfil1 from "../Graphic/forum/perfil-forum1.jpg";
import { ADICIONAR_POSTAGEM } from "../Cosntants";

const estadoInicial = {
    noticias: [
        {
            "titulo": "Antigo Clube OVNI é citado em Matéria Jornalística",
            "miniatura": ImgNoticia1
        },
        {
            "titulo": "Ufólogos visitam posto de gasolina com escultura de ET",
            "miniatura": ImgNoticia2
        },
        {
            "titulo": "Pedra do Eurípedes: Ponto de misteriosas aparições ufológicas",
            "miniatura": ImgNoticia3
        },
        {
            "titulo": "Série Ufológica do History grava Episódio em Quixadá",
            "miniatura": ImgNoticia4
        }
    ],
    postagens: [
        {
            "nomeUser": "André Almeida",
            "userAvatar": ForumPerfil1,
            "titulo:": "Surpreendente Palestra Ufológica",
            "tematica": "Palestra Ufológica",
            "horario": "Postado a 12 min",
            "texto": "Em 08 de Agosto de 2015 ocorreu o 1º Debate Ufológico de Paranapiacaba, dentro da II SteamCon, o maior evento de SteamPunk do Brasil. Como esse era o primeiro evento de ufologia organizado por nós, pensei: Poxa, vejo sempre nos eventos por ai as pessoas falando de ...",
            "qtdLikes": 8
        }
    ]
}

function reducerRaiz(state = estadoInicial, action){
    if(action.type == ADICIONAR_POSTAGEM){
        let newState = {...state};
        newState.postagens.push({
            titulo: action.payload.titulo,
            tematica: action.payload.tematica,
        })
        return newState;
    }
    return state;
}


export default reducerRaiz;