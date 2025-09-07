const controllers = require("../controllers/comentarios");

module.exports = function(app){
    app.get("/comentarios", controllers.verComentario);
    
}