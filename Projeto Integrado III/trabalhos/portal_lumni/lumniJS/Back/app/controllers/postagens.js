const { populate } = require('../models/postagens');
const Postagem = require ('../models/postagens');
const Usuario = require ('../models/usuarios');
const jwt = require('jsonwebtoken');

module.exports.listarPostagem = function(req,res){
    let promise = Postagem.find()
                    .populate('autor')
                    .populate('tematica')
                    .exec();
    promise.then(
        function(postagens){
            res.status(200).json(postagens);
        }
    ).catch(  
        function(erro){
            res.status(500).json(erro); 
        }
    )
}

module.exports.detalhePostagem = function(req,res){
    let id = req.params.id;
    let promise = Postagem.findById(id);
    promise.then(
        function(postagem){
            res.status(200).json(postagem);
        }
    ).catch(
        function(erro){
            res.status(500).json(erro); 
        }
    )
}

module.exports.adicionarPostagem = function(req,res){
    let token = req.query.token;
    let user = jwt.decode(token);
    let userId = user.userId;
    let titulo = req.body.titulo;
    let tematica = req.body.tematica;
    let horario = req.body.horario;
    let texto = req.body.texto;
    let post = {titulo: titulo, autor: userId, tematica: tematica, horario: horario, texto: texto};
    let promise = Postagem.create(post);
    promise.then(
        function(postagem){
            res.status(201).json(postagem);
        }
    ).catch(
        function(erro){
            res.status(500).json(erro); 
        }
    )
}


module.exports.removerPostagem = function(req,res){
    let id = req.params.id;
    let promise = Postagem.deleteOne({"_id": id});
    promise.then(
        function(postagem){
            res.status(200).json(postagem);
        }
    ).catch(
        function(erro){
            res.status(500).json(erro);
        }
    )
}

