const controller = require("../controllers/postagens");
const autenticacao = require("../controllers/autenticacao");

module.exports = function(app){
    // app.use("/postagens", autenticacao.chegarTokenUsuario);
    app.get("/postagens", controller.listarPostagem);
    app.get("/postagens/:id", controller.detalhePostagem);
    app.post("/postagens",controller.adicionarPostagem);
    app.delete("/postagens/:id", controller.removerPostagem);
}   