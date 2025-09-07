const Postagem = require('../models/postagens');

module.exports.listaPostagens = function (req,res){
    let.promise = Postagem.find().exec();
    promise.then(
        function(post){
            res.status(201).json(post);
        }
    ).catch(
        function(erro){
            res.status(500).json(erro);
        }

    )
}

module.exports.listarPostagens = function (req,res){
    res.json([
        {autor: "quixinha123", tema: "Abducao", mensagem:"Rapaz, fui abduzido hoje..."},
        {autor: "miranda", tema: "Avistamento", mensagem: "Vi alguem sendo abduzido..."},
        {autor: "SamuelBond", tema: "Astronomia", mensagem: "Chuva de meteoros no domingo!"}
    ])
};

module.exports.adicionarPostagem = function(re,res){
    let postagem = req.body;
    let promise = Postagem.create(postagem);
    promise.then(    
        function(post){
            res.status(201).json(post)
        }
    ).catch(
        function(erro){
            res.status(500).json(erro);
        }
    )
}