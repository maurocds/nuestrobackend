// Initialize express router
let router = require('express').Router();
let apiController = require('./controllers/apiControllers');

// Set default API response
router.get('/', function (req, res) {
    res.json(
        {
            status: 'API Its Working',
            message: 'Welcome to RESTHub crafted with love!',
        });
});

router.get('/leerComentario', function (req, res) {
    console.log("leer");
    apiController.getComentario(req, res);
});

//EndPoint para insertar un usuario en la BD
router.post('/insertUsuario/Usuario', function (req, res) {
    console.log("entró al endpoint insertarUsuario");
    console.log(req.body);
    apiController.insertUsuario(req, res);
});

//EndPoint para insertar un comentario en la BD
router.post('/insertComentario/Comentario', function (req, res) {
    console.log("entró al endpoint insertComentario de un usuario a una pelicula");
    console.log(req.body);
    apiController.insertComentario(req, res);
});

//EndPoint para agregarle una pelicula a un usuario en la BD
router.post('/insertPelicula/Pelicula', function (req, res) {
    console.log("entró al endpoint insertPelicula a un usuario");
    console.log(req.body);
    apiController.insertPelicula(req, res);
});

//EndPoint para updetear pass de un usuario
router.post('/updatePassUsuario/Usuario', function (req, res) {
    console.log("entró al endpoint updatePassUsuario");
    apiController.updatePassUsuario(req, res);
});

//EndPoint para leer con filtro comentarios de una pelicula
router.post('/leerComentarios/idBusqueda', function (req, res) {
    console.log("entró al endpoint leerComentarios por Pelicula");
    apiController.getComentariosByIdPelicula(req, res);
});

//EndPoint para leer con filtro peliculas de un usuario
router.post('/leerPeliculas/idBusqueda', function (req, res) {
    console.log("entró al endpoint leerPeliculas por Usuario");
    apiController.getPeliculasByIdUsuario(req, res);
});

//EndPoint para loguear usuario
router.post('/loguearUsuario/usuario', function (req, res) {
    console.log("entró al endpoint loguearUsuario contra la BD");
    apiController.logueoUsuario(req, res);
});


// Export API routes
module.exports = router;