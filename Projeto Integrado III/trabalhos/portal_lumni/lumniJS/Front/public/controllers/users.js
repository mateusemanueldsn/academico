module.exports.listarUsers = function (req,res){
    res.json([
        {username: "Miranda",senha: "abc123"},
        {username: "Quixinha123",senha: "miau321"}
    ])
};
