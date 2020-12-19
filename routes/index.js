//const routerx = require('express-promise-router');
//const categoriaRouter = require('./api/articulo');

//const router = routerx();

//router.use('/articulo', articuloRouter);

//module.exports = router;

const router = require('express').Router();
//se llama el manejador 
const apiRouterUser = require('./api/users.js');
const apiRouterCategoria = require('./api/categoria');
const apiRouterArticulo = require('./api/articulo');

router.use('/usuario', apiRouterUser); //.com/api/usuario
router.use('/categoria', apiRouterCategoria); //.com/api/usuario
router.use('/articulo', apiRouterArticulo); //.com/api/usuario

module.exports = router;