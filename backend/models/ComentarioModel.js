var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var comentarioSchema = new Schema({
    mail: String,    //seria nuestro id de usuario
    idpelicula: String,
    comentario: String
});

var Comentarios = mongoose.model('Comentario', comentarioSchema);
console.log("se creo modelo para Comentarios");
console.log("url para pegarle: localhost:8080/apiMovies/insertComentario/Comentario");
module.exports = Comentarios;