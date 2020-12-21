const routerx = require('express-promise-router');
//const router = require('express').Router();
//const categoriaRouter = require('./articulo');
const router = routerx();
//se llama el manejador 
const usuarioRouter = require('./api/usuario.js');
const categoriaRouter = require('./api/categoria.js');
const articuloRouter = require('./api/articulo.js');

router.use('/usuario', usuarioRouter); //.com/api/usuario
router.use('/categoria', categoriaRouter); //.com/api/categoria
router.use('/articulo', articuloRouter); //.com/api/articulo


module.exports = router;