const controllers = require("../controllers/postagens");

module.exports = function(app){
    app.get("/postagens", controllers.listarPostagens);
    app.get("/postagens", controllers.listaPostagens);
    app.post("/postagens", controllers.adicionarPostagem);
    
}