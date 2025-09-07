const Comentario = require ('../models/comentarios')
const jwt = require('jsonwebtoken');

module.exports.listarComentarios = function(req,res){
    let promise = Comentario.find()
                        .populate('postagem')
                        .populate('usuario')
                        .exec();
    promise.then(
        function(comentarios){
            res.status(200).json(comentarios);
        }
    ).catch( 
        function(erro){
            res.status(500).json(erro); 
        }
    )
} 

module.exports.detalharComentario = function(req,res){
    let id = req.params.id;
    let promise = Comentario.findById(id);
    promise.then(
        function(comentarios){
            res.status(200).json(comentarios);
        }
    ).catch(    
        function(erro){
            res.status(500).json(erro); 
        }
    )
}

module.exports.adicionarComentario = function(req,res){
    let token = req.query.token;
    let user = jwt.decode(token);
    let userId = user.userId;
    let mensagem = req.body.mensagem;
    let postagem = req.body.postagem;
    let comment = {usuario: userId, mensagem: mensagem, postagem: postagem};
    let promise = Comentario.create(comment);
    promise.then(
        function(comentarios){
            res.status(201).json(comentarios);
        }
    ).catch(
        function(erro){
            res.status(500).json(erro); 
        }
    )
}