var mongoose = require('mongoose');

module.exports = function(){
    var schema = mongoose.Schema({
        usuario: {     
        type: mongoose.Schema.ObjectId,
        ref: 'Usuario',
        require: true
        },  
        // horario: {
        // type: String,
        // require: true
        // const schema = new Schema({
        //     title: String,
        //     date: {
        //       type: Date,
        //       // `Date.now()` returns the current unix timestamp as a number
        //       default: Date.now
        //     }
        //   }),
        // },
        mensagem: {
        type: String,
        require: true
        },
        postagem: {
        type: mongoose.Schema.ObjectId,
        ref: 'Postagem',
        require: true
        }
    })
    return mongoose.model('Comentario', schema);
}();