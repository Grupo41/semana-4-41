const router = require('express').Router();

//se llama el manejador 
const apiRouterUser = require('./api/users.js');
const apiRouterCategoria = require('./api/categoria.js');
const apiRouterArticulo = require('./api/articulo.js');

router.use('/usuario', apiRouterUser); //.com/api/usuario
router.use('/categoria', apiRouterCategoria); //.com/api/categoria
router.use('/articulo', apiRouterArticulo); //.com/api/articulo


module.exports = router;