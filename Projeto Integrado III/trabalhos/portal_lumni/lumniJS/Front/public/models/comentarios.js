const mongoose = require('mongoose');

module.exports = function(){
    let schema = mongoose.Schema({
        autor: {
            type: String,
            required: true,
    },
        mensagem: {
            type: String,
            required: true,
        }    
    })
    return mongoose.model('Comentario', schema);
}();