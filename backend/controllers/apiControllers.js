var Usuarios = require('../models/UsuarioModel');
var Comentarios = require('../models/ComentarioModel');
var Peliculas = require('../models/PeliculaModel');
var bodyParser = require('body-parser');

// Listo!!
let insertUsuario = (req, res) => {
    console.log("entré a insertUsuario");
    console.log(req.body);
    var newUsuario = Usuarios({
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        mail: req.body.mail,
        contrasena: req.body.contrasena
    });
    Usuarios.findOne({ mail: req.body.mail }).then(
        respuestaQuery => {
            console.log("muestro el respuestaQuery");
            console.log(respuestaQuery);
            if (respuestaQuery !== null) {
                console.log("El usuario ya existe");
                res.send(false); //devuelvo false porque el usurio ya existe
            } else {
                console.log("guardó OK todos los datos del usuario a insertar en la base de datos");
                newUsuario.save().
                    then
                    (
                        (newUsuario) => {
                            // res.send(newUsuario); //devuelvo resultado query
                            res.send(true);
                            console.log("insertó OK al usuario en la base de datos");
                        },
                        (err) => { console.log(err); }
                    )
            }
        },
        err => {
            console.log(err);
        }
    )
};

// Listo!
let insertComentario = (req, res) => {
    console.log("entré a insertComentario");
    console.log(req.body);
    var newComentario = Comentarios({
        mail: req.body.mail,
        idpelicula: req.body.idpelicula,
        comentario: req.body.comentario
    });
    console.log("guardó OK todos los datos del comentario a insertar en la base de datos");
    newComentario.save().
        then
        (
            (newComentario) => {
                // res.send(newComentario); //devuelvo resultado query
                res.send(true);
                console.log("insertó OK el comentario de la peli en la base de datos");
            },
            (err) => { console.log(err); }
        )
};

// Listo! pero usarlo desde frontend es un plus
let insertPelicula = (req, res) => {
    console.log("entré a insertPelicula");
    console.log(req.body);
    var newPelicula = Peliculas({
        mail: req.body.mail,
        idpelicula: req.body.imdb_id
        /*
        titulopelicula: req.body.title,
        portadapelicula: req.body.poster_path,
        fondopelicula: req.body.backdrop_path,
        lenguajeoriginal: req.body.original_language,
        sinopsis: req.body.overview,
        lanzamiento: req.body.release_date,
        ingresos: req.body.revenue,
        promediovotos: req.body.vote_average,
        cantidadvotos: req.body.vote_count,
        duracion: req.body.duracion,
        homepage: req.body.homepage,
        estado: req.body.status,
        presupuesto: req.body.budget,
        popularidad: req.body.popularity
        */

    });
    console.log("guardó OK todos los datos de la pelicula a insertar en la base de datos");
    newPelicula.save().
        then
        (
            (newPelicula) => {
                // res.send(newPelicula); //devuelvo resultado query
                res.send(true);
                console.log("insertó OK la pelicula en la base de datos");
            },
            (err) => { console.log(err); }
        )
};

// Listo!
let updatePassUsuario = (req, res) => {
    console.log("entré a updatePassUsuario");

    Usuarios.findOne({
        mail: req.body.mailBuscado
    })
        .then((usuario) => {
            usuario.contrasena = req.body.nuevoPassword;
            usuario
                .save()
                .then(() => {
                    // res.jsonp({ usuario }); // retornamos el usuario updeteado
                res.send(true);
                });
        });
};

// Listo!
let getComentariosByIdPelicula = (req, res) => {
    console.log("entré a getComentariosByIdPelicula");
    //Obtener id busqueda
    let idBusqueda = { idpelicula: req.body.idPeliculaBuscada };
    console.log(idBusqueda);
    //Listar resultados
    Comentarios.find(idBusqueda)
        .then
        (
            (listaComentarios) => {
                res.send(listaComentarios); //devuelvo resultado query   
                console.log(listaComentarios);
            },
            (err) => { console.log(err); }
        )
};
let getComentario = (req, res) => {
    console.log("llegue a leer");
    //Listar resultados
    Comentarios.find()
        .then
        (
            (listaComentarios) => {
                res.send(listaComentarios); //devuelvo resultado query   
                // console.log(listaComentarios);    
            },
            (err) => { console.log(err); }
        )
};

// Listo! pero usarlo desde frontend es un plus
let getPeliculasByIdUsuario = (req, res) => {
    console.log("entré a getPeliculasByIdUsuario");
    //Obtener id busqueda
    let idBusqueda = { mail: req.body.mailBuscado };
    console.log(idBusqueda);
    //Listar resultados
    Peliculas.find(idBusqueda)
        .then
        (
            (listaPeliculas) => {
                res.send(listaPeliculas); //devuelvo resultado query   
                console.log(listaPeliculas);
            },
            (err) => { console.log(err); }
        )
};

// Listo!
let logueoUsuario = (req, res) => {
    // Listar todos los usuarios
    Usuarios
        .findOne({ mail: req.body.mailBuscado })
        .where({ contrasena: req.body.contrasenaUsuarioBuscado })
        .then(
            respuestaQuery => {
                console.log("LOGGING RESPUESTA QUERY");
                console.log(respuestaQuery);

                if (respuestaQuery !== null) {
                    //res.send(true); //devuelvo resultado query
                    var datosDelUsuario = Usuarios({
                        nombre: respuestaQuery.nombre,
                        apellido: respuestaQuery.apellido,
                        mail: respuestaQuery.mail,
                        contrasena: respuestaQuery.contrasena
                    });

                    res.send(datosDelUsuario);  // retorno datos del usuario para consumir desde el front

                } else {
                    res.send(false); //devuelvo false porque no coinciden el par usuario/contrasena
                }
            },
            err => {
                console.log(err);
            }
        );
};


module.exports = { insertUsuario, insertComentario, getComentariosByIdPelicula, insertPelicula, getPeliculasByIdUsuario, logueoUsuario, updatePassUsuario, getComentario };
