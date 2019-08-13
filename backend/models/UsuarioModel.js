var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var usuarioSchema = new Schema({
    nombre: String,
    apellido: String,
    mail: String,
    contrasena: String
});

var Usuarios = mongoose.model('Usuario', usuarioSchema);
console.log("se creo modelo para Usuarios");
console.log("url para pegarle: localhost:8080/apiMovies/insertUsuario/Usuario");
module.exports = Usuarios;