/* un Ejemplo  de como se veria la ruta listar - modelo del  articulo*/
//const routerx = require('express-promise-router');
//const articuloController = require('../../controllers/ArticuloController');
//const auth = require('../../middlewares/auth');

//const router = routerx();
//router.get('/list', articuloController.list);
//module.exports = router;

// se trae el router de express
const router = require('express').Router();
//se conecta con el controllador
const articuloController = require('../../controllers/ArticuloController');
//Middlewares
const auth = require('../../middlewares/auth');



//api/usuario/list
router.get('/list',auth.verificarAlmacenero, articuloController.list);

//.com/api/usuario/register
router.post('/add', auth.verificarAlmacenero, articuloController.add);

//.com/api/usuario/update
router.put('/update',auth.verificarAlmacenero, articuloController.update);

//.com/api/usuario/activate
router.put('/activate',auth.verificarAlmacenero, articuloController.activate);

//.com/api/usuario/deactivate
router.put('/deactivate',auth.verificarAlmacenero, articuloController.deactivate);


module.exports = router;