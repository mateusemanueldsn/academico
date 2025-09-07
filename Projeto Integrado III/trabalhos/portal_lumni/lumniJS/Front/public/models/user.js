const mongoose = require('mongoose');

module.exports = function(){
    let schema = mongoose.Schema({
        username: {
            type: String,
            required: true,
    },
        senha: {
            type: String,
            required: true,
        }    
    })
    return mongoose.model('User', schema);
}();