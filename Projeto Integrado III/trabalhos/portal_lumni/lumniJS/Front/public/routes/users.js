const controllers = require("../controllers/users");

module.exports = function(app){
    app.get("/users", controllers.listarUsers);
    
}