var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var peliculaSchema = new Schema({
    mail: String,    //seria nuestro id de usuario
    idpelicula: String         //idIMDB
    /*
    portadapelicula: String,
    titulopelicula: String,     //title
    aniopelicula: String,       //year
    tipopelicula: String        //type
    */
});

var Peliculas = mongoose.model('Pelicula', peliculaSchema);
console.log("se creo modelo para Peliculas");
console.log("url para pegarle: localhost:8080/apiMovies/insertPelicula/Pelicula");
module.exports = Peliculas;
